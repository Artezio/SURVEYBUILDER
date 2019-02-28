import React from 'react';
import { connect } from 'react-redux';
import * as Models from '@art-forms/models';
import { addItem, setDescription, setTitle, updateQuestionnaire } from "../actions/questionnaire";
import { updateItem, removeItem } from "../actions/item";
import { Store } from '../interfaces/Store';
import Item from './Item';
import DropdownMenu from './DropdownMenu';
import { QuestionnaireActions, QuestionnaireState, QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import { Form, Text, TextArea, FormApi } from 'informed';


const mapStateToProps = (store: Store): QuestionnaireState => {
    return { questionnaire: store.questionnaire as Models.Questionnaire };
}

const mapDispatchToProps: QuestionnaireActions = {
    addItem: addItem,
    setTitle,
    setDescription,
    updateQuestionnaire,
    updateItem: updateItem,
    removeItem
}

const mergeProps = (stateProps: QuestionnaireState, dispatchProps: QuestionnaireActions, ownProps: any): QuestionnaireProps =>
    Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } });

export class Questionnaire extends React.Component<QuestionnaireProps> {
    formApi!: FormApi<Models.Questionnaire>;

    handleSubmit(values: Partial<Models.Questionnaire>) {
        const { actions } = this.props;
        actions.updateQuestionnaire(values);
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    addDisplayItem() {
        const { actions } = this.props;
        actions.addItem();
    }

    getFormApi(formApi: FormApi<Models.Questionnaire>) {
        this.formApi = formApi;
    }

    render() {
        const { questionnaire, actions } = this.props;
        return <div className="questionnaire container border border-secondary">
            <div className="d-flex justify-content-end m-1">
                <DropdownMenu title='Context menu' items={[
                    { title: 'Create text item', action: this.addDisplayItem.bind(this) }
                ]} />
            </div>
            <div className="container">
                <Form className="from-group my-3" getApi={this.getFormApi.bind(this)} key={questionnaire.id} initialValues={questionnaire} onSubmit={this.handleSubmit.bind(this)} >
                    <Text className="form-control my-2" field="title" placeholder="Title" style={{ height: '50px', fontSize: '30px' }} autoFocus={true} onBlur={this.submitForm.bind(this)} />
                    <TextArea className="form-control my-2" field="description" placeholder="Description" onBlur={this.submitForm.bind(this)} />
                </Form>
                <div className="item-list my-3">
                    {questionnaire.items && questionnaire.items.map(item => <Item key={item.id} item={item} actions={{ removeItem: actions.removeItem, updateItem: actions.updateItem }} />)}
                </div>
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Questionnaire);