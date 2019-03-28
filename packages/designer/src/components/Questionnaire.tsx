import * as React from 'react';
import * as Models from '@art-forms/models';
import DropdownMenu from './DropdownMenu';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import { Form, Text, TextArea, FormApi } from 'informed';
import ItemProvider from './ItemProvider';
import useObservableModel from '../HOCs/useObservableModel';


export class Questionnaire extends React.Component<QuestionnaireProps> {
    formApi!: FormApi<Models.IQuestionnaire>;

    handleSubmit(values: Partial<Models.IQuestionnaire>) {
        const { actions, questionnaire } = this.props;
        if ((questionnaire as any).updateQuestionnaire) {
            (questionnaire as any).updateQuestionnaire(values);
        } else {
            actions.updateQuestionnaire(values)
        }
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IQuestionnaire>) {
        this.formApi = formApi;
    }

    componentDidUpdate() {
        const { questionnaire } = this.props;
        this.formApi.setValues(questionnaire as Models.IQuestionnaire);
    }

    render() {
        const { questionnaire, actions, className = '' } = this.props;
        return questionnaire && <div className={`questionnaire border border-secondary ${className}`}>
            <div className="d-flex justify-content-end m-1">
                <DropdownMenu title='Context menu' items={[
                    { title: 'Create item', action: actions.addItem },
                    { title: 'Create text item', action: actions.addTextItem }
                ]} />
            </div>
            <div>
                <Form className="p-3" getApi={this.getFormApi.bind(this)} key={questionnaire.id} initialValues={questionnaire} onSubmit={this.handleSubmit.bind(this)} >
                    <div className="form-group">
                        <label htmlFor="questionnaire-title">Title</label>
                        <Text className="form-control" id="questionnaire-title" field="title" placeholder="My Questionnaire" autoFocus={true} onBlur={this.submitForm.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="questionnaire-description">Description</label>
                        <TextArea className="form-control" id="questionnaire-description" field="description" placeholder="My description" onBlur={this.submitForm.bind(this)} />
                    </div>
                </Form>
                <div className="item-list row my-3">
                    {questionnaire.items && questionnaire.items.map(item =>
                        <div className="col-12" key={item.id}>
                            {ItemProvider({ actions, item })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    }
}

export default useObservableModel<QuestionnaireProps>(Questionnaire);