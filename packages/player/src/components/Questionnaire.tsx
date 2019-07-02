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
    // isFileDraggingOverDocument: boolean = false;

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

    // componentDidMount() {
    //     document.addEventListener('dragenter', this.documentListener);
    //     document.addEventListener('dragleave', this.documentListenerOff);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('dragenter', this.documentListener);
    //     document.removeEventListener('dragleave', this.documentListenerOff);
    // }

    // documentListener(e: DragEvent) { /// think about name
    //     if (e.dataTransfer) {
    //         console.log(e.dataTransfer.getData('format'));
    //     }
    //     if (!this.isFileDraggingOverDocument) {
    //         this.isFileDraggingOverDocument = true;
    //         const attachmentDives = document.querySelectorAll('.attachment-item');
    //         attachmentDives.forEach(element => {
    //             element.classList.add('fileIsDraggingOverDocument');
    //         })
    //     }
    // }

    // documentListenerOff(e: DragEvent) { /// think about name
    //     console.log('LEAVE')
    //     if (!e.clientX && !e.clientY) {
    //         this.isFileDraggingOverDocument = false;
    //         const attachmentDives = document.querySelectorAll('.attachment-item');
    //         attachmentDives.forEach(element => {
    //             element.classList.remove('fileIsDraggingOverDocument');
    //         })
    //     }
    // }

    renderItemList() {
        const { questionnaire, questionnaireResponse } = this.props;
        return <div className="response-item-list">
            <Form getApi={this.getFormApi.bind(this)}
                initialValues={this.initialFormState}
                onSubmit={this.submitForm.bind(this)}
                onSubmitFailure={this.onSubmitFailure.bind(this)}
                // preventEnter={true}     // has no type definition in .d.ts 
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