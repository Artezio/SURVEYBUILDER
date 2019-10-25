import * as React from 'react';
import * as Models from '@art-forms/models';
import ItemWrapperProps from '../interfaces/components/ItemWrapperProps';
import { useObservableModel } from '../observableConnector/useObservableModel';
import ItemProvider from './ItemProvider';
import { FormApi, Form, Text, Checkbox } from 'informed';
import QuestionTypeMenu from './QuestionTypeMenu';
import EnableSettings from './enableWhen/EnableSettings';
import HumanReadableGuid from '../helpers/humanReadableId';
import QuestionnaireContext from '../helpers/questionnaireContext';
import { activeItemClassName } from '../constants/itemWrapper';
import SETTINGS_DISPLAY_MODE from '../constants/questionnaireDesigner';
import { IQuestionnaireContext } from '../interfaces/helpers/IQuestionnaireContext';
import BottomItemCollectionMenu from './BottomItemCollectionMenu';

interface ItemWrapperState {
    areSettingsOpen: boolean;
    bottomMenuShowed: boolean;
}

export class ItemWrapper extends React.PureComponent<ItemWrapperProps, ItemWrapperState> {
    static defaultProps: Partial<ItemWrapperProps> = {
        className: ''
    }

    state = {
        areSettingsOpen: false,
        bottomMenuShowed: false
    }

    closingBottomMenuTimeOutKey: any;
    formApi?: FormApi<Omit<Models.IItem, 'type'>>;
    formApi_2?: FormApi<Omit<Models.IQuestionItem<any>, 'type'>>;
    // inputRef: React.RefObject<HTMLInputElement> = React.createRef();
    itemRef: React.RefObject<HTMLDivElement> = React.createRef();
    humanReadableGuid = HumanReadableGuid.getHumanReadableGuid();

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }
    submitForm_2() {
        if (!this.formApi_2) return;
        this.formApi_2.submitForm();
    }

    getFormApi(formApi: FormApi<Omit<Models.IItem, 'type'>>) {
        this.formApi = formApi;
    }
    getFormApi_2(formApi: FormApi<Omit<Models.IQuestionItem<any>, 'type'>>) {
        this.formApi_2 = formApi;
    }

    handleSubmit(values: Partial<Omit<Models.IItem, 'type'>>) {
        const { item } = this.props;
        item.updateItem({ ...item, text: values.text });
    }
    handleSubmit_2(values: Partial<Omit<Models.IQuestionItem<any>, 'type'>>) {
        const { item } = this.props;
        item.updateItem({ ...item, ...values });
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi && this.formApi.setValues(item);
        this.formApi_2 && this.formApi_2.setValues(item);
    }

    componentWillUnmount() {
        const { clearTargetItem } = this.props;
        clearTargetItem && clearTargetItem();
    }

    // componentDidMount() {
    //     const item = this.inputRef.current;
    //     if (item) {
    //         const x = window.pageXOffset;
    //         const y = window.pageYOffset;
    //         item.focus();
    //         window.scrollTo(x, y)
    //     }
    // }

    toggleSettings() {
        this.setState({
            areSettingsOpen: !this.state.areSettingsOpen
        })
    }

    renderHeader() {
        const { item } = this.props;
        return <div className="row">
            <div className="col-4 d-flex align-items-center"><span>#{this.humanReadableGuid.getHumanReadableId(item.id)}</span></div>
            <div className="col-4 d-flex justify-content-center align-items-center">
                <i className="fas fa-grip-horizontal text-muted"></i>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
                <div className="button-toolbar no-drag">
                    {/* {item.type === Models.GROUP && < ItemCollectionMenu item={item as Models.GroupItem} />} */}
                    <div className="btn-group">
                        <button className="btn btn-outline-secondary ml-2" onClick={item.remove.bind(item)}>
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    }

    renderItemHeadLine() {
        const { item } = this.props;
        if (item.type !== Models.GROUP && item.type !== Models.DISPLAY) {
            return <div className="form-row questionnaire-item__headline">
                <div className="col-md-8">
                    <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor={`${item.id}-text`}>Question</label>
                            <Text
                                // forwardedRef={this.inputRef}
                                autoFocus={true}
                                autoComplete="off"
                                className="form-control"
                                id={`${item.id}-text`}
                                field="text"
                                placeholder="My Question"
                                onBlur={this.submitForm.bind(this)}
                            />
                        </div>
                    </Form>
                </div>
                <div className="col-md-4">
                    <QuestionTypeMenu title="Question Type" item={item as Models.QuestionItem<any>} />
                </div>
            </div>
        }
    }

    renderEnableSettings() {
        const { item, questionnaire } = this.props;
        return this.state.areSettingsOpen && <div className="item-settings">
            <hr />
            {questionnaire && <EnableSettings questionnaire={questionnaire} item={item} />}
        </div>
    }

    renderFooter(showSettingsButton: boolean) {
        const { item } = this.props;
        const correctEnableWhens = item.enableWhen.filter(enableWhen => enableWhen.questionId !== undefined && enableWhen.operator !== undefined && enableWhen.answer !== undefined);
        return <div>
            <div className="row align-items-center">
                <div className="col-6 d-flex justify-content-start">
                    {item.type !== Models.GROUP && item.type !== Models.DISPLAY &&
                        <Form className="mr-3" getApi={this.getFormApi_2.bind(this)} initialValues={(item as Models.QuestionItem<any>)} onSubmit={this.handleSubmit_2.bind(this)}>
                            <div className="form-check">
                                <Checkbox key={item.required + ''} field="required" type="checkbox" className="form-check-input" id={`${item.id}-required`} onChange={this.submitForm_2.bind(this)} />
                                <label className="mb-0" htmlFor={`${item.id}-required`}>Required</label>
                            </div>
                        </Form>}
                    <div>
                        {`Dependent: ${correctEnableWhens.length ? 'On' : 'Off'}`}
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    {showSettingsButton && <button className="btn btn-outline-secondary" onClick={this.toggleSettings.bind(this)}>
                        <i className="fas fa-cog"></i>
                    </button>}
                </div>
            </div>
            {showSettingsButton && this.renderEnableSettings()}
        </div>
    }

    getClassNameIdentifier() {
        const { item } = this.props;
        if (item.type === Models.GROUP) {
            return 'questionnaire-item questionnaire-group-item';
        } else if (item.type === Models.DISPLAY) {
            return 'questionnaire-item questionnaire-display-item';
        }
        return 'questionnaire-item';
    }

    toggleBottomMenu() {
        this.setState({
            bottomMenuShowed: !this.state.bottomMenuShowed
        })
    }

    closeBottomMenu() {
        this.setState({
            bottomMenuShowed: false
        })
    }

    prepareClosingBottomMenu() {
        this.closingBottomMenuTimeOutKey = setTimeout(() => { this.closeBottomMenu() })
    }

    preventClosingBottomMenu() {
        clearTimeout(this.closingBottomMenuTimeOutKey);
    }

    render() {
        const { item, nestingLevel, className, subscribe, questionnaire, selectTargetItem, targetItem, settingsDisplayMode } = this.props;
        const { bottomMenuShowed } = this.state;
        const classNameIdentifier = this.getClassNameIdentifier();
        const showSettingsButton = settingsDisplayMode === SETTINGS_DISPLAY_MODE.insideItem;
        const activeIdentifier = (targetItem && targetItem.id === item.id) ? activeItemClassName : '';
        const choseTargetItem = () => {
            selectTargetItem && selectTargetItem(item);
        }
        return <div
            className={`${classNameIdentifier} card mb-3 ${activeIdentifier} ${className}`}
            data-id={item.id}
            ref={this.itemRef}
            onClickCapture={choseTargetItem}
            onFocusCapture={choseTargetItem}
        >
            <div className="card-header drag-handle">
                {this.renderHeader()}
            </div>
            <div className="card-body">
                {this.renderItemHeadLine()}
                <ItemProvider item={item} key={item.id} nestingLevel={nestingLevel} subscribe={subscribe} />
            </div>
            {showSettingsButton && <div className="card-footer">
                {this.renderFooter(showSettingsButton)}
            </div>}
            <div className="bottom-line" onFocus={this.preventClosingBottomMenu.bind(this)} onBlur={this.prepareClosingBottomMenu.bind(this)}>
                <hr />
                <div className="dropup d-flex">
                    <button className="toggle btn btn-outline-secondary" onClick={this.toggleBottomMenu.bind(this)}>
                        <i className="fas fa-plus"></i>
                    </button>
                    {bottomMenuShowed && <BottomItemCollectionMenu item={item} />}
                </div>
            </div>
        </div>
    }
}

export default useObservableModel<ItemWrapperProps>(ItemWrapper);