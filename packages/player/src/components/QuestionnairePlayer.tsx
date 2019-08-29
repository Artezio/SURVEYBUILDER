import * as React from 'react';
import { QuestionnairePlayerProps } from '../interfaces/components/QuestionnairePlayerProps';
import { useObservableModel } from '../observableConnector/useObservableModel';
import ItemWrapper from './ItemWrapper';
import { Form, FormApi } from 'informed';
import IFormState from '../interfaces/IFormState';


export class Questionnaire extends React.Component<QuestionnairePlayerProps> {
    formApi?: FormApi<IFormState>;
    static defaultProps = {
        submitButtonText: 'Submit'
    }

    getFormApi(formApi: FormApi<IFormState>) {
        this.formApi = formApi;
    }

    submitForm() {
        const { questionnaireResponseModel, provider } = this.props;
        provider && provider.putQuestionnaireResponse(questionnaireResponseModel);
    }

    onSubmitFailure() {
        this.forceUpdate();
        setTimeout(() => {
            const firstIncorrectAnswer = document.querySelector('.error-item');
            firstIncorrectAnswer && firstIncorrectAnswer.scrollIntoView();
        })
    }

    renderItemList() {
        const { questionnaire, questionnaireResponseModel } = this.props;
        return <div className="response-item-list">
            <Form getApi={this.getFormApi.bind(this)}
                onSubmit={this.submitForm.bind(this)}
                onSubmitFailure={this.onSubmitFailure.bind(this)}
            // preventEnter={true}     // has no type definition in .d.ts 
            >
                {questionnaire.items && questionnaire.items.map(item => {
                    const questionnaireResponseItem = questionnaireResponseModel.items.find(responseItem => responseItem.questionId === item.id);
                    return questionnaireResponseItem && <ItemWrapper key={item.id} item={item} questionnaireResponseItem={questionnaireResponseItem} />
                })}
            </Form>
        </div >
    }

    render() {
        const { questionnaire, className = '', submitButtonText } = this.props;
        return <div className={`questionnaire-response ${className}`}>
            <div className="header">
                <h3>{questionnaire && questionnaire.title}</h3>
                <p>{questionnaire && questionnaire.description}</p>
            </div>
            {this.renderItemList()}
            <button type="button" className="btn btn-primary submit-button" onClick={() => { this.formApi && this.formApi.submitForm() }}>{submitButtonText}</button>
        </div>
    }
}


const QuestionnairePlayer = useObservableModel<QuestionnairePlayerProps>(Questionnaire);
export { QuestionnairePlayer }
export default QuestionnairePlayer;