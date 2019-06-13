import * as React from 'react';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import { useObservableModel, getObservable } from '@art-forms/observable';
import ItemWrapper from './ItemWrapper';
import { Form, FormApi } from 'informed';
import { completeInitialFormState } from '../mappers/completeInitialFormState';
import IFormState from '../interfaces/IFormState';
import { provider } from '@art-forms/providers';


export class Questionnaire extends React.Component<QuestionnaireProps> {
    formApi?: FormApi<IFormState>;
    initialFormState: IFormState = completeInitialFormState(this.props.questionnaireResponse);

    getFormApi(formApi: FormApi<IFormState>) {
        this.formApi = formApi;
    }

    submitForm() {
        const { questionnaireResponse } = this.props;
        provider.putQuestionnaireResponse(questionnaireResponse);
    }

    onSubmitFailure() {
        const { questionnaireResponse } = this.props;
        const obs = getObservable(questionnaireResponse);
        obs && obs.emitChange();
        setTimeout(() => {
            const firstIncorrectAnswer = document.querySelector('.error-item');
            firstIncorrectAnswer && firstIncorrectAnswer.scrollIntoView();
        })
    }

    renderItemList() {
        const { questionnaire, questionnaireResponse } = this.props;
        return <div className="response-item-list">
            <Form getApi={this.getFormApi.bind(this)}
                initialValues={this.initialFormState}
                onSubmit={this.submitForm.bind(this)}
                onSubmitFailure={this.onSubmitFailure.bind(this)}
            >
                {questionnaire.items && questionnaire.items.map(item => {
                    const questionnaireResponseItem = questionnaireResponse.items.find(responseItem => responseItem.id === item.id);
                    return questionnaireResponseItem && <ItemWrapper key={item.id} item={item} questionnaireResponseItem={questionnaireResponseItem} />
                })}
            </Form>
            <button type="btn" className="btn btn-primary" onClick={() => { this.formApi && this.formApi.submitForm() }}>Submit</button>
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