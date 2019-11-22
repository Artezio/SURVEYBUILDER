import * as React from 'react';
import * as Models from '@art-forms/models';
import ItemWrapperProps from '../interfaces/components/ItemWrapperProps';
import { useObservableModel } from '@art-forms/observable-react';
import ItemProvider from './ItemProvider';
import { FormApi, Form, Text, Checkbox, TextArea } from 'informed';
import QuestionTypeMenu from './QuestionTypeMenu';
import EnableSettings from './enableWhen/EnableSettings';
import HumanReadableGuid from '../helpers/humanReadableId';
import { activeItemClassName } from '../constants/itemWrapper';
import SETTINGS_DISPLAY_MODE from '../constants/questionnaireDesigner';
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

    bottomLineRef = React.createRef<HTMLDivElement>();
    closingBottomMenuTimeOutKey: any;
    formApi?: FormApi<Omit<Models.IItem, 'type'>>;
    formApi_2?: FormApi<Omit<Models.IQuestionItem<any>, 'type'>>;
    inputRef: React.RefObject<HTMLInputElement> = React.createRef();
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
        clearTimeout(this.closingBottomMenuTimeOutKey);
    }

    componentDidMount() {
        const item = this.inputRef.current;
        if (item) {
            const x = window.pageXOffset;
            const y = window.pageYOffset;
            item.focus();
            window.scrollTo(x, y)
        }
    }

    toggleSettings() {
        this.setState({
            areSettingsOpen: !this.state.areSettingsOpen
        })
    }

    renderHeader() {
        const { item, targetItemId } = this.props;
        return <div className="row">
            <div className="col-4 d-flex align-items-center"><span>#{this.humanReadableGuid.getHumanReadableId(item.id)}</span></div>
            <div className="col-4 d-flex justify-content-center align-items-center">
                <i className="fas fa-grip-horizontal text-muted"></i>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
                <div className="button-toolbar no-drag">
                    {/* {item.type === Models.GROUP && < ItemCollectionMenu item={item as Models.GroupItem} />} */}
                    <div className="btn-group">
                        {targetItemId === item.id && <button className="btn btn-outline-secondary border-0" onClick={item.remove.bind(item)}>
                            <i className="fas fa-trash"></i>
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    }

    getHeadlineControl() {
        const { item } = this.props;
        if (item.type === Models.DISPLAY) {
            return <TextArea
                forwardedRef={this.inputRef}
                // autoFocus={true}
                autoComplete="off"
                className="form-control"
                id={`${item.id}-text`}
                field="text"
                placeholder="My text"
                onBlur={this.submitForm.bind(this)}
            />
        }
        return <Text
            forwardedRef={this.inputRef}
            // autoFocus={true}
            autoComplete="off"
            className="form-control"
            id={`${item.id}-text`}
            field="text"
            placeholder="Questions group"
            onBlur={this.submitForm.bind(this)}
        />
    }

    getHeadlineFromClassName() {
        const { item } = this.props;
        switch (item.type) {
            case Models.GROUP: {
                return "questionnaire-group-item__headline form-group";
            }
            case Models.DISPLAY: {
                return "questionnaire-display-item__headline";
            }
            default: {
                return "questionnaire-item__headline form-group";
            }
        }
    }

    getHeadlineLogoText() {
        const { item } = this.props;
        switch (item.type) {
            case Models.GROUP: {
                return "Group Title";
            }
            case Models.DISPLAY: {
                return "Text";
            }
            default: {
                return "Question";
            }
        }
    }

    renderHeadlineLabelReplacerText() {
        const { item } = this.props;
        switch (item.type) {
            case Models.GROUP: {
                return "Questions group";
            }
            case Models.DISPLAY: {
                return "Text";
            }
            default: {
                return "Question";
            }
        }
    }

    renderHeadline() {
        const { item, targetItemId, selectTargetItem } = this.props;
        const itemIsActive = item.id === targetItemId;
        return <div className={`form-row ${this.getHeadlineFromClassName()}`}>
            {itemIsActive ?
                <div className="col">
                    <Form
                        getApi={this.getFormApi.bind(this)}
                        initialValues={item}
                        onSubmit={this.handleSubmit.bind(this)}
                    >
                        <div>
                            <label htmlFor={`${item.id}-text`}>{this.getHeadlineLogoText()}</label>
                            {this.getHeadlineControl()}
                        </div>
                    </Form>
                </div>
                : <div className="col">
                    <label className="labelReplacer">
                        {item.text || this.renderHeadlineLabelReplacerText()}
                        {item.required && <span className="text-danger">*</span>}
                    </label>
                </div>}
            {item.type !== Models.DISPLAY
                && item.type !== Models.GROUP
                && itemIsActive
                && <div className="col-md-4">
                    <QuestionTypeMenu selectTargetItem={selectTargetItem} title="Question Type" item={item as Models.QuestionItem<any>} />
                </div>}
        </div>
    }

    renderEnableSettings() {
        const { item, questionnaire } = this.props;
        return <div className="item-settings">
            <hr />
            {questionnaire && <EnableSettings questionnaire={questionnaire} item={item} />}
        </div>
    }

    renderFooter() {
        const { item } = this.props;
        // const correctEnableWhens = item.enableWhen.filter(enableWhen => enableWhen.questionId !== undefined && enableWhen.operator !== undefined && enableWhen.answer !== undefined);
        return <div>
            <div className="align-items-center">
                <div className="d-flex justify-content-start">
                    {item.type !== Models.GROUP && item.type !== Models.DISPLAY &&
                        <Form
                            className="mr-3"
                            getApi={this.getFormApi_2.bind(this)}
                            initialValues={(item as Models.QuestionItem<any>)}
                            onSubmit={this.handleSubmit_2.bind(this)}
                        >
                            <div className="form-check">
                                <Checkbox
                                    key={item.required + ''}
                                    field="required"
                                    type="checkbox"
                                    className="form-check-input"
                                    id={`${item.id}-required`}
                                    onChange={this.submitForm_2.bind(this)}
                                />
                                <label className="mb-0" htmlFor={`${item.id}-required`}>Required</label>
                            </div>
                        </Form>}
                    {/* <div>
                        {`Dependent: ${correctEnableWhens.length ? 'On' : 'Off'}`}
                    </div> */}
                </div>
                {/* <div className="col-6 d-flex justify-content-end">
                    {this.state.areSettingsOpen && showSettingsButton && <button className="btn btn-outline-secondary" onClick={this.toggleSettings.bind(this)}>
                        <i className="fas fa-cog"></i>
                    </button>}
                </div> */}
            </div>
            {this.renderEnableSettings()}
        </div>
    }

    getClassNameIdentifier() {
        const { item } = this.props;
        if (item.type === Models.GROUP) {
            return 'questionnaire-item questionnaire-group-item';
        } else if (item.type === Models.DISPLAY) {
            return 'questionnaire-item questionnaire-display-item';
        }
        return 'questionnaire-item questionnaire-question-item';
    }

    toggleBottomMenu() {
        this.setState({
            bottomMenuShowed: !this.state.bottomMenuShowed
        })
    }

    closeBottomMenu() {
        if (this.state.bottomMenuShowed) {
            this.setState({
                bottomMenuShowed: false
            })
        }
    }

    prepareClosingBottomMenu() {
        this.closingBottomMenuTimeOutKey = setTimeout(() => { this.closeBottomMenu() })
    }

    preventClosingBottomMenu() {
        clearTimeout(this.closingBottomMenuTimeOutKey);
    }

    selectTargetItem(e) {
        const { item, selectTargetItem, targetItemId } = this.props;
        e.stopPropagation();
        if (e.type === 'click' && item.id === targetItemId && (!this.itemRef.current || this.itemRef.current.contains(e.target))) {
            return;
        }
        if (!this.bottomLineRef.current || !this.bottomLineRef.current.contains(e.target)) {
            selectTargetItem && selectTargetItem(item);
        }
    }

    clearTargetItem() {
        const { clearTargetItem } = this.props;
        clearTargetItem && clearTargetItem();
    }

    render() {
        const { item, nestingLevel, className, subscribe, targetItemId, settingsDisplayMode, targetGroupId, selectTargetItem } = this.props;
        const { bottomMenuShowed } = this.state;
        const classNameIdentifier = this.getClassNameIdentifier();
        const showSettingsButton = settingsDisplayMode === SETTINGS_DISPLAY_MODE.insideItem;
        const activeIdentifier = (targetItemId === item.id) ? activeItemClassName : '';
        return <div
            className={`${classNameIdentifier} card mb-3 ${activeIdentifier} ${className}`}
            data-id={item.id}
            ref={this.itemRef}
            // onBlur={this.clearTargetItem.bind(this)}
            onFocus={this.selectTargetItem.bind(this)}
            onClick={this.selectTargetItem.bind(this)}
        >
            <div className="card-header drag-handle">
                {this.renderHeader()}
            </div>
            <div className="card-body">
                {this.renderHeadline()}
                <div className="questionnaire-item__details">
                    <ItemProvider item={item} key={item.id} nestingLevel={nestingLevel} subscribe={subscribe} />
                </div>
            </div>
            {showSettingsButton && item.id === targetItemId && <div className="card-footer">
                {this.renderFooter()}
            </div>}
            {item.parent && (item.parent as any).id === targetGroupId && <div
                className="bottom-line"
                onFocus={this.preventClosingBottomMenu.bind(this)}
                onBlur={this.prepareClosingBottomMenu.bind(this)}
                ref={this.bottomLineRef}
            >
                <hr />
                <div className="dropup d-flex">
                    <button className="toggle btn btn-outline-secondary" onClick={this.toggleBottomMenu.bind(this)} title="Add item">
                        <i className="fas fa-plus"></i>
                    </button>
                    {bottomMenuShowed && <BottomItemCollectionMenu close={this.closeBottomMenu.bind(this)} selectTargetItem={selectTargetItem} item={item} />}
                </div>
            </div>}
        </div>
    }
}

export default useObservableModel<ItemWrapperProps>(ItemWrapper);