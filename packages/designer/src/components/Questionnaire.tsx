import * as React from 'react';
import * as Models from '@art-forms/models';
import DropdownMenu from './DropdownMenu';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import { Form, Text, TextArea, FormApi } from 'informed';
import ItemProvider from './ItemProvider';


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

    getFormApi(formApi: FormApi<Models.Questionnaire>) {
        this.formApi = formApi;
    }

    render() {
        const { questionnaire, actions, className = '' } = this.props;
        return <div className={`container-fluid questionnaire border border-secondary ${className}`}>
            <div className="d-flex justify-content-end m-1">
                <DropdownMenu title='Context menu' items={[
                    { title: 'Create item', action: actions.addItem },
                    { title: 'Create text item', action: actions.addTextItem }
                ]} />
            </div>
            <div>
                <Form getApi={this.getFormApi.bind(this)} key={questionnaire.id} initialValues={questionnaire} onSubmit={this.handleSubmit.bind(this)} >
                    <div className="form-group">
                        <label htmlFor="questionnaire-title">Title</label>
                        <Text className="form-control" id="questionnaire-title" field="title" placeholder="My Questionnaire" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="questionnaire-description">Description</label>
                        <TextArea className="form-control" id="questionnaire-description" field="description" placeholder="My description" onBlur={this.submitForm.bind(this)} />
                    </div>
                </Form>
                <div className="item-list row justify-content-center my-3">
                    {questionnaire.items && questionnaire.items.map(item =>
                        <div className="col-11 justify-content-center" key={item.id}>
                            {ItemProvider({ actions, item })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    }
}

export default Questionnaire;