import * as React from 'react';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import { useObservableModel } from '@art-forms/observable';
import ItemWrapper from './ItemWrapper';
import { Form, FormApi } from 'informed';
import { completeInitialFormState } from '../mappers/completeInitialFormState';
import IFormState from '../interfaces/IFormState';


export class Questionnaire extends React.Component<QuestionnaireProps> {
    formApi?: FormApi<IFormState>;
    initialFormState: IFormState = completeInitialFormState(this.props.questionnaireResponse);

    getFormApi(formApi: FormApi<IFormState>) {
        this.formApi = formApi;
    }

    submitForm(e: any) {
        e.preventDefault && e.preventDefault();
    }

    renderItemList() {
        const { questionnaire, questionnaireResponse } = this.props;
        return <div className="response-item-list">
            <Form getApi={this.getFormApi.bind(this)} initialValues={this.initialFormState} onSubmit={this.submitForm.bind(this)} onChange={() => console.log('CHANGE')}>
                {questionnaire.items && questionnaire.items.map(item => {
                    const questionnaireResponseItem = questionnaireResponse.items.find(responseItem => responseItem.id === item.id);
                    return questionnaireResponseItem && <ItemWrapper key={item.id} item={item} questionnaireResponseItem={questionnaireResponseItem} />
                })}
            </Form>
        </div >
    }

    render() {
        const { questionnaire, className = '' } = this.props;
        return <div className={`questionnaire-response ${className}`}>
            <div className="header">
                <h3>{questionnaire && questionnaire.title}</h3>
                <p>{questionnaire && questionnaire.description}</p>
            </div>
            {this.renderItemList()}
        </div>
    }
}

export default useObservableModel<QuestionnaireProps>(Questionnaire);