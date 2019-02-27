import React from 'react';
import { connect } from 'react-redux';
import { Questionnaire, DisplayItem } from '@art-forms/models';
import { addDisplayItem, setDescription, setTitle, updateQuestionnaire } from "../actions/questionnaire";
import { updateDisplayItem, removeItem } from "../actions/displayItem";
import { Store } from '../interfaces/Store';
import DisplayItemComponent from './DisplayItem';
import DropdownMenuComponent from './DropdownMenu';
import { QuestionnaireComponentActions, QuestionnaireComponentState, QuestionnaireComponentProps } from '../interfaces/QuestionnaireComponentProps';
import { Form, Text, TextArea, FormApi } from 'informed';


const mapStateToProps = (store: Store): QuestionnaireComponentState => {
    return { questionnaire: store.questionnaire as Questionnaire };
}

const mapDispatchToProps: QuestionnaireComponentActions = {
    addDisplayItem,
    setTitle,
    setDescription,
    updateQuestionnaire,
    updateDisplayItem: updateDisplayItem,
    removeItem
}

const mergeProps = (stateProps: any, dispatchProps: QuestionnaireComponentActions, ownProps: any): QuestionnaireComponentProps =>
    Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } });

export class QuestionnaireComponent extends React.Component<QuestionnaireComponentProps> {
    formApi!: FormApi<Questionnaire>;

    handleSubmit(values: Partial<Questionnaire>) {
        const { updateQuestionnaire } = this.props.actions;
        updateQuestionnaire(values);
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    addDisplayItem() {
        const { addDisplayItem } = this.props.actions;
        addDisplayItem && addDisplayItem();
    }

    getFormApi(formApi: FormApi<Questionnaire>) {
        this.formApi = formApi;
    }

    render() {
        const { questionnaire, actions } = this.props;
        return <div className="questionnaire container border border-secondary">
            <div className="d-flex justify-content-end m-1">
                <DropdownMenuComponent title='Context menu' items={[
                    { title: 'Create text item', action: this.addDisplayItem.bind(this) }
                ]} />
            </div>
            <div className="container">
                <Form className="from-group my-3" getApi={this.getFormApi.bind(this)} key={questionnaire.id} initialValues={questionnaire} onSubmit={this.handleSubmit.bind(this)} >
                    <Text className="form-control my-2" field="title" placeholder="Title" style={{ height: '50px', fontSize: '30px' }} autoFocus={true} onBlur={this.submitForm.bind(this)} />
                    <TextArea className="form-control my-2" field="description" placeholder="Description" onBlur={this.submitForm.bind(this)} />
                </Form>
                <div className="item-list my-3">
                    {questionnaire.items && questionnaire.items.map(item => <DisplayItemComponent key={item.id} item={item as DisplayItem} actions={{ removeItem: actions.removeItem, updateDisplayItem: actions.updateDisplayItem }} />)}
                </div>
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(QuestionnaireComponent);