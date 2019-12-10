import * as React from 'react';
import { QuestionnairePlayerProps } from '../interfaces/components/QuestionnairePlayerProps';
import { useObservableModel } from '@surveybuilder/observable-react';
import ItemWrapper, { ERROR_ITEM_CLASS_NAME } from './ItemWrapper';
import { Form, FormApi } from 'informed';
import IFormState from '../interfaces/IFormState';


export class Questionnaire extends React.Component<QuestionnairePlayerProps> {
    formApi?: FormApi<IFormState>;

    getFormApi(formApi: FormApi<IFormState>) {
        this.formApi = formApi;
    }

    submitForm() {
        const { questionnaireResponseModel, onSubmit } = this.props;
        onSubmit && onSubmit(questionnaireResponseModel);
    }

    onSubmitFailure(e) {
        const { onError } = this.props;
        this.forceUpdate();
        setTimeout(() => {
            const firstIncorrectAnswer = document.querySelector(`.${ERROR_ITEM_CLASS_NAME}`);
            if (firstIncorrectAnswer) {
                let inputControl: HTMLInputElement | HTMLTextAreaElement = firstIncorrectAnswer.querySelector('input:not([type=radio]):not([type=checkbox]):not([type=file])');
                if (!inputControl) {
                    inputControl = firstIncorrectAnswer.querySelector('textarea');
                }
                if (inputControl) {
                    inputControl.focus();
                }
            }
            firstIncorrectAnswer.scrollIntoView();
        })
        onError && onError(e);
    }

    renderItemList() {
        const { questionnaire, questionnaireResponseModel, forwardRef } = this.props;
        return <div className="response-item-list">
            <Form ref={forwardRef}
                getApi={this.getFormApi.bind(this)}
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
        const { questionnaire, className = '' } = this.props;
        return <div className={`questionnaire-response ${className}`}>
            <div className="header">
                <h1>{questionnaire && questionnaire.title}</h1>
                <p>{questionnaire && questionnaire.description}</p>
            </div>
            {this.renderItemList()}
        </div>
    }
}


const QuestionnairePlayer = useObservableModel<QuestionnairePlayerProps>(Questionnaire);
export { QuestionnairePlayer }
export default QuestionnairePlayer;