import * as React from 'react';
import * as Models from '@art-forms/models';
import { QuestionnaireDesignerProps } from '../interfaces/components/QuestionnaireDesignerProps';
import { Form, Text, TextArea, FormApi } from 'informed';
import { useObservableModel } from '../observableConnector/useObservableModel';
import ItemCollectionMenu from './ItemCollectionMenu';
import QuestionnaireItemList from './QuestionnaireItemList';
import Sortable, { SortableEvent } from 'sortablejs';
import QuestionnaireContext from '../helpers/questionnaireContext';

export class Questionnaire extends React.Component<QuestionnaireDesignerProps> {

    static defaultProps: Partial<QuestionnaireDesignerProps> = {
        className: ''
    }

    formApi!: FormApi<Models.IQuestionnaire>;
    itemFactory: Models.ItemFactory = new Models.ItemFactory(this.props.questionnaireModel);

    nestingLevel: string = '0';

    bodyHeight?: number;
    itemListsMap: Map<HTMLElement, Sortable> = new Map();
    sortableOptions: Sortable.Options = {
        group: 'nested',
        animation: 350,
        fallbackOnBody: true,
        swapThreshold: 0.35,           //has no type definition in .d.ts
        handle: '.drag-handle',
        dragClass: "sortable-drag",
        onChoose: this.onDragChoose.bind(this),
        onUnchoose: this.onDragUnchoose.bind(this),
        onEnd: this.onDragEnd.bind(this),
        forceFallback: true,
        filter: '.no-drag',
        fallbackTolerance: 1,
        emptyInsertThreshold: 30,          //has no type definition in .d.ts
    } as any;

    handleSubmit(values: Partial<Models.IQuestionnaire>) {
        const { questionnaireModel } = this.props;
        questionnaireModel.updateQuestionnaire({ ...questionnaireModel, title: values.title, description: values.description });
    }
    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }
    getFormApi(formApi: FormApi<Models.IQuestionnaire>) {
        this.formApi = formApi;
    }

    componentDidMount() {
        this.subscribeDocument();
        this.makeItemsDraggable();
    }
    componentDidUpdate() {
        const { questionnaireModel } = this.props;
        this.formApi.setValues(questionnaireModel);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.documentListener.bind(this), true);
        this.clearSortables();
    }

    documentListener(e: Event) {
        this.clearSelected();
    }

    clearSelected() {
        const selectedItems = document.querySelectorAll('.card-active');
        selectedItems.forEach(selectedItem => {
            selectedItem && selectedItem.classList.remove('card-active');
            selectedItem && selectedItem.classList.remove('shadow');
        })
    }

    subscribeDocument() {
        document.addEventListener('click', this.documentListener.bind(this), true);
    }

    clearSortables() {
        this.itemListsMap.forEach(sortable => sortable.destroy());
    }

    makeItemsDraggable() {
        const itemLists = document.querySelectorAll('#drag-drop-nested .questionnaire-item-list') as NodeListOf<HTMLElement>;
        itemLists.forEach((itemList) => {
            if (this.itemListsMap.has(itemList)) return;
            this.itemListsMap.set(itemList, new Sortable(itemList, this.sortableOptions));
        })
    }

    onDragChoose(e: SortableEvent) {
        document.body.style.height = `${document.body.clientHeight}px`;
    }

    onDragUnchoose(e: SortableEvent) {
        document.body.style.height = "";
        const item = e.item;
        this.highlightDraggedItem(item);
    }

    highlightDraggedItem(item: HTMLElement) {
        this.clearSelected();
        item && item.classList.add('card-active');
        item && item.classList.add('shadow');
    }

    onDragEnd(e: SortableEvent) {
        const oldItemList = this.findNestedItemList(e.from.dataset['nestingLevel']);
        const newItemList = this.findNestedItemList(e.to.dataset.nestingLevel);
        if (oldItemList === newItemList && e.oldIndex === e.newIndex || oldItemList === undefined || newItemList === undefined) return;
        const item = oldItemList.items.find(x => x.id === e.item.dataset.id);
        if (!item) return;
        if (oldItemList !== newItemList) {
            e.from.appendChild(e.item);
        }
        item.remove();
        newItemList.addItem(item, e.newIndex);
    }

    findNestedItemList(nesting?: string): Models.Questionnaire | Models.GroupItem | undefined {
        if (nesting === undefined) return;
        const nestingLevel = nesting.split(':');
        nestingLevel.shift();
        const { questionnaireModel } = this.props;
        let currentItemList: Models.Questionnaire | Models.GroupItem = questionnaireModel;
        if (nesting.length === 0) {
            return currentItemList;
        }
        nestingLevel.forEach(index => {
            if (Array.isArray(currentItemList.items)) {
                currentItemList = currentItemList.items[+index] as Models.GroupItem;
            }
        })
        return currentItemList;
    }

    renderItemList() {
        const { questionnaireModel } = this.props;
        return <div id="drag-drop-nested">
            <QuestionnaireContext.Provider value={{ questionnaire: questionnaireModel }}>
                <QuestionnaireItemList itemList={questionnaireModel.items} nestingLevel={this.nestingLevel} subscribe={this.makeItemsDraggable.bind(this)} />
            </QuestionnaireContext.Provider>
        </div>
    }

    render() {
        const { questionnaireModel, className } = this.props;
        return <div className={`questionnaire ${className}`}>
            <div className="card card-sm mb-3">
                <div className="card-header d-flex justify-content-end">
                    <ItemCollectionMenu item={questionnaireModel} />
                </div>
                <div className="card-body">
                    <Form getApi={this.getFormApi.bind(this)} key={questionnaireModel.id} initialValues={questionnaireModel} onSubmit={this.handleSubmit.bind(this)} >
                        <div className="form-group">
                            <label htmlFor={`${questionnaireModel.id}-title`}>Questionnaire Title</label>
                            <Text autoComplete="off" className="form-control" id={`${questionnaireModel.id}-title`} field="title" placeholder="My Questionnaire" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`${questionnaireModel.id}-description`}>Questionnaire Description</label>
                            <TextArea autoComplete="off" className="form-control" id={`${questionnaireModel.id}-description`} field="description" placeholder="My description" onBlur={this.submitForm.bind(this)} />
                        </div>
                    </Form>
                </div>
            </div>
            {this.renderItemList()}
        </div>
    }
}

const QuestionnaireDesigner = useObservableModel<QuestionnaireDesignerProps>(Questionnaire);
export { QuestionnaireDesigner }
export default QuestionnaireDesigner;