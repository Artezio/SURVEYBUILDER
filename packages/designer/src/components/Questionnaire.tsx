import React from 'react';
import { connect } from 'react-redux';
import { TextItem, Questionnaire } from '@art-forms/models';
import { addTextItem, setDescription, setTitle, updateQuestionnaire, updateTextItem, removeItem } from "../actions/questionnaire";
import { Store } from '../interfaces/Store';
import TextItemComponent from './TextItem';
import DropdownMenuComponent from './DropdownMenu';
import { QuestionnaireComponentActions, QuestionnaireComponentState, QuestionnaireComponentProps } from '../interfaces/QuestionnaireComponentProps';
import { Form, Text, TextArea, FormApi } from 'informed';


const mapStateToProps = (store: Store): QuestionnaireComponentState => {
    return { questionnaire: store.questionnaire as Questionnaire };
}

const mapDispatchToProps: QuestionnaireComponentActions = {
    addTextItem,
    setTitle,
    setDescription,
    updateQuestionnaire,
    updateTextItem,
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

    addTextItem() {
        const { addTextItem } = this.props.actions;
        addTextItem && addTextItem();
    }

    getFormApi(formApi: FormApi<Questionnaire>) {
        this.formApi = formApi;
    }

    render() {
        const { questionnaire, actions } = this.props;
        return <div className="questionnaire container border border-secondary">
            <div className="d-flex justify-content-end m-1">
                <DropdownMenuComponent title='Context menu' items={[
                    { title: 'Create text item', action: this.addTextItem.bind(this) }
                ]} />
            </div>
            <div className="container">
                <Form className="from-group my-3" getApi={this.getFormApi.bind(this)} key={questionnaire.id} initialValues={questionnaire} onSubmit={this.handleSubmit.bind(this)} >
                    <Text className="form-control my-2" field="title" placeholder="Title" style={{ height: '50px', fontSize: '30px' }} autoFocus={true} onBlur={this.submitForm.bind(this)} />
                    <TextArea className="form-control my-2" field="description" placeholder="Description" onBlur={this.submitForm.bind(this)} />
                </Form>
                <div className="item-list my-3">
                    {questionnaire.items && questionnaire.items.map(item => <TextItemComponent key={item.id} item={item as TextItem} actions={{ removeItem: actions.removeItem, updateTextItem: actions.updateTextItem }} />)}
                </div>
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(QuestionnaireComponent);