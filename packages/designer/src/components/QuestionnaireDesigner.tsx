import * as React from 'react';
import * as Models from '@art-forms/models';
import '../data/styles/settingsPanel.scss';
import '../data/styles/item-bottomline-menu.scss';
import { QuestionnaireDesignerProps } from '../interfaces/components/QuestionnaireDesignerProps';
import { Form, Text, TextArea, FormApi } from 'informed';
import { useObservableModel } from '../observableConnector/useObservableModel';
import ItemCollectionMenu from './ItemCollectionMenu';
import QuestionnaireItemList from './QuestionnaireItemList';
import Sortable, { SortableEvent } from 'sortablejs';
import QuestionnaireContext from '../helpers/questionnaireContext';
import { QuestionnaireDesignerState } from '../interfaces/components/QuestionnaireDesignerState';
import { SETTINGS_DISPLAY_MODE } from '../constants/questionnaireDesigner';
import ItemSettingsPanel from './ItemSettingsPanel';
import { QuestionnaireSettingsPanel } from './QuestionnaireSettingsPanel';

export class Questionnaire extends React.Component<QuestionnaireDesignerProps, QuestionnaireDesignerState> {
    static defaultProps: Partial<QuestionnaireDesignerProps> = {
        className: ''
    }

    state = {
        settingsDisplayModel: SETTINGS_DISPLAY_MODE.rightPanel,
        targetItem: undefined,
        targetGroup: this.props.questionnaireModel
    }

    questionnaireNodeTopPosition?: string;
    questionnaireItemsRef = React.createRef<HTMLDivElement>();
    settingsPanelRef = React.createRef<HTMLDivElement>();
    questionnaireDesignerRef = React.createRef<HTMLDivElement>();
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

    escListener(e) {
        if (e.keyCode === 27) {
            this.clearTargetItem();
        }
    }

    bodyClickListener(e) {
        if ((!this.settingsPanelRef.current || !this.settingsPanelRef.current.contains(e.target)) && (!this.questionnaireItemsRef.current || !this.questionnaireItemsRef.current.contains(e.target))) {
            this.clearTargetItem();
        }
    }

    componentDidMount() {
        this.makeItemsDraggable();
        document.addEventListener('keydown', this.escListener.bind(this));
        document.body.addEventListener('click', this.bodyClickListener.bind(this));
    }
    componentDidUpdate() {
        const { questionnaireModel } = this.props;
        this.formApi.setValues(questionnaireModel);
    }

    componentWillUnmount() {
        this.clearSortables();
        document.removeEventListener('keydown', this.escListener.bind(this))
        document.body.addEventListener('click', this.bodyClickListener.bind(this));
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

    fillQuestionList(list: Models.IQuestionItem<any>[], source: Models.IGroupItem | Models.IQuestionnaire) {
        source.items && source.items.forEach(item => {
            if (item.type === Models.GROUP) {
                this.fillQuestionList(list, item as Models.GroupItem);
            }
            list.push(item as Models.QuestionItem<any>);
        })
    }

    prepareQuestionList(): Models.QuestionItem<any>[] {
        const { questionnaireModel } = this.props;
        const questionList: Models.QuestionItem<any>[] = [];
        this.fillQuestionList(questionList, questionnaireModel);
        return questionList;
    }

    onDragUnchoose(e: SortableEvent) {
        document.body.style.height = "";
        const questionList = this.prepareQuestionList();
        const item = questionList.find(item => item.id === e.item.dataset.id);
        this.selectTargetItem(item);
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

    selectTargetItem(item: Models.Item) {
        this.setState({
            targetItem: item,
            targetGroup: item.type === Models.GROUP ? (item as any) : item.parent
        })
    }

    clearTargetItem() {
        const { questionnaireModel } = this.props;
        this.setState({
            targetItem: undefined,
            targetGroup: questionnaireModel
        })
    }

    renderItemList() {
        const { questionnaireModel } = this.props;
        const { targetItem, settingsDisplayModel, targetGroup } = this.state;
        return <div id="drag-drop-nested">
            <QuestionnaireContext.Provider
                value={{
                    questionnaire: questionnaireModel,
                    selectTargetItem: this.selectTargetItem.bind(this),
                    targetItemId: targetItem && targetItem.id,
                    settingsDisplayMode: settingsDisplayModel,
                    clearTargetItem: this.clearTargetItem.bind(this),
                    targetGroupId: targetGroup && targetGroup.id
                }}
            >
                <QuestionnaireItemList
                    itemList={questionnaireModel.items}
                    nestingLevel={this.nestingLevel}
                    subscribe={this.makeItemsDraggable.bind(this)}
                />
            </QuestionnaireContext.Provider>
        </div>
    }

    // getQuestionnaireTopPosition() {
    //     if (this.questionnaireNodeTopPosition) return this.questionnaireNodeTopPosition;
    //     const questionnaireNode = this.questionnaireDesignerRef.current;
    //     if (questionnaireNode) {
    //         const questionnaireNodeTopPosition = questionnaireNode.getBoundingClientRect().top;
    //         this.questionnaireNodeTopPosition = questionnaireNodeTopPosition ? questionnaireNodeTopPosition + 'px' : '0';
    //         return this.questionnaireNodeTopPosition;
    //     }
    // }

    // getQuestionnaireBottomPosition() {
    //     const questionnaireNode = this.questionnaireDesignerRef.current;
    //     if (questionnaireNode) {
    //         const questionnaireNodeHeight = questionnaireNode.getBoundingClientRect().height;
    //         const bodyHeight = document.body.getBoundingClientRect().height;
    //         const bottomPosition = bodyHeight - questionnaireNodeHeight;
    //         return bottomPosition > 0 ? bottomPosition + 'px' : '150px';
    //     }
    // }

    render() {
        const { questionnaireModel, className } = this.props;
        const { targetItem, settingsDisplayModel } = this.state;
        const settingsPanelHeight = `calc(100vh - 250px)`;
        return <div className={`questionnaire-designer media ${className}`} /*ref={this.questionnaireDesignerRef}*/>
            <div className="questionnaire-items media-body" ref={this.questionnaireItemsRef}>
                <div className="questionnaire card mb-3">
                    <div className="card-header d-flex justify-content-end">
                        {/* <ItemCollectionMenu item={questionnaireModel} /> */}
                    </div>
                    <div className="card-body">
                        <Form
                            getApi={this.getFormApi.bind(this)}
                            key={questionnaireModel.id}
                            initialValues={questionnaireModel}
                            onSubmit={this.handleSubmit.bind(this)}
                        >
                            <div className="form-group">
                                <label htmlFor={`${questionnaireModel.id}-title`}>Questionnaire Title</label>
                                <Text
                                    autoComplete="off"
                                    className="form-control"
                                    id={`${questionnaireModel.id}-title`}
                                    field="title"
                                    placeholder="My Questionnaire"
                                    autoFocus={true}
                                    onBlur={this.submitForm.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor={`${questionnaireModel.id}-description`}>Questionnaire Description</label>
                                <TextArea autoComplete="off"
                                    className="form-control"
                                    id={`${questionnaireModel.id}-description`}
                                    field="description"
                                    placeholder="My description"
                                    onBlur={this.submitForm.bind(this)}
                                />
                            </div>
                        </Form>
                    </div>
                </div>
                {questionnaireModel.items.length === 0 && <div className="w-100 d-flex justify-content-center align-items-center">
                    <ItemCollectionMenu item={questionnaireModel} />
                </div>}
                {this.renderItemList()}
            </div>
            {settingsDisplayModel === SETTINGS_DISPLAY_MODE.rightPanel &&
                <div className="question-settings-panel ml-4" style={{ height: settingsPanelHeight }} ref={this.settingsPanelRef}>
                    {targetItem ? <ItemSettingsPanel key={targetItem.id} questionnaire={questionnaireModel} item={targetItem} />
                        : <QuestionnaireSettingsPanel questionnaire={questionnaireModel} />}
                </div>}
        </div>
    }
}

const QuestionnaireDesigner = useObservableModel<QuestionnaireDesignerProps>(Questionnaire);
export { QuestionnaireDesigner }
export default QuestionnaireDesigner;