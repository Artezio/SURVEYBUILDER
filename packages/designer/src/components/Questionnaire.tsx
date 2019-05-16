import * as React from 'react';
import * as Models from '@art-forms/models';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import { Form, Text, TextArea, FormApi } from 'informed';
import { useObservableModel, getObservable } from '@art-forms/observable';
import ItemCollectionMenu from './ItemCollectionMenu';
import QuestionnaireItemList from './QuestionnaireItemList';
import Sortable, { SortableEvent } from 'sortablejs';

export class Questionnaire extends React.Component<QuestionnaireProps> {

    static defaultProps: Partial<QuestionnaireProps> = {
        className: ''
    }

    formApi!: FormApi<Models.IQuestionnaire>;
    itemFactory: Models.ItemFactory = new Models.ItemFactory(this.props.questionnaire);

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
    };

    handleSubmit(values: Partial<Models.IQuestionnaire>) {
        const { questionnaire } = this.props;
        questionnaire.updateQuestionnaire({ ...questionnaire, title: values.title, description: values.description });
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
        const { questionnaire } = this.props;
        this.formApi.setValues(questionnaire);
        this.highlightActiveItems();
        this.makeItemsDraggable();
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.documentListener.bind(this), true);
        this.clearSortables();
    }

    documentListener(e: Event) {
        this.clearSelected();
    }

    itemListener(e: Event) {
        const target = (e.currentTarget as HTMLElement);
        if (!target.classList.contains('card-active')) {
            this.clearSelected();
            target && target.classList.add('card-active');
            target && target.classList.add('shadow');
        }
    }

    subscribeDocument() {
        document.addEventListener('click', this.documentListener.bind(this), true);
    }

    clearSelected() {
        const selectedItems = document.querySelectorAll('.card-active');
        selectedItems.forEach(selectedItem => {
            selectedItem && selectedItem.classList.remove('card-active');
            selectedItem && selectedItem.classList.remove('shadow');
        })
    }

    highlightActiveItems() {
        document.querySelectorAll('.questionnaire-item').forEach(el => {
            el.removeEventListener('click', this.itemListener.bind(this));
            el.addEventListener('click', this.itemListener.bind(this));
        })
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
        const obs = getObservable(item);
        obs && obs.mute();
        item.remove();
        newItemList.addItem(item, e.newIndex);
        obs && obs.unmute();
    }

    findNestedItemList(nesting?: string): Models.Questionnaire | Models.GroupItem | undefined {
        if (nesting === undefined) return;
        const nestingLevel = nesting.split(':');
        nestingLevel.shift();
        const { questionnaire } = this.props;
        let currentItemList: Models.Questionnaire | Models.GroupItem = questionnaire;
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
        const { questionnaire } = this.props;
        return <div id="drag-drop-nested">
            <QuestionnaireItemList item={questionnaire} nestingLevel={this.nestingLevel} subscribe={this.makeItemsDraggable.bind(this)} />
        </div>
    }

    renderMenu() {
        const { questionnaire } = this.props;
        return <ItemCollectionMenu item={questionnaire} />
    }

    render() {
        const { questionnaire, className } = this.props;
        return <div className={`questionnaire ${className}`}>
            <div className="card card-sm mb-3">
                <div className="card-header d-flex justify-content-end">
                    {this.renderMenu()}
                </div>
                <div className="card-body">
                    <Form getApi={this.getFormApi.bind(this)} key={questionnaire.id} initialValues={questionnaire} onSubmit={this.handleSubmit.bind(this)} >
                        <div className="form-group">
                            <label htmlFor={`${questionnaire.id}-title`}>Questionnaire Title</label>
                            <Text autoComplete="off" className="form-control" id={`${questionnaire.id}-title`} field="title" placeholder="My Questionnaire" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                        </div>
                        <div>
                            <label htmlFor={`${questionnaire.id}-description`}>Questionnaire Description</label>
                            <TextArea autoComplete="off" className="form-control" id={`${questionnaire.id}-description`} field="description" placeholder="My description" onBlur={this.submitForm.bind(this)} />
                        </div>
                    </Form>
                </div>
            </div>
            {this.renderItemList()}
        </div>
    }
}

export default useObservableModel<QuestionnaireProps>(Questionnaire);