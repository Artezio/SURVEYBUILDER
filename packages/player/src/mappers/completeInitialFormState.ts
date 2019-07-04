import * as Models from '@art-forms/models';
import IFormState from '../interfaces/IFormState';


const completeResponseItem = (initialFormState: IFormState, responseItem: Models.QuestionnaireResponseItem) => {
    const answers = responseItem.answers;
    const nestedItems = responseItem.items;
    const questionItem = responseItem.questionItem;
    const type = questionItem.type;
    if (answers.length !== 0) {
        const answer = answers[0];
        switch (type) {
            case Models.CHOICE: {
                initialFormState[responseItem.questionId] = answer.id;
                break;
            }
            case Models.OPEN_CHOICE: {
                if ((questionItem as Models.OpenChoiceItem).options.some(option => option.id === answer.id && option.value === answer.value)) {
                    initialFormState[responseItem.questionId] = answer.id;
                }
                else {
                    initialFormState[responseItem.questionId + '-other'] = answer.value;
                }
            }
            case Models.MULTI_CHOICE: {
                const multipleAnswers: any = {};
                answers.forEach(answer => {
                    multipleAnswers[answer.id] = true;
                })
                initialFormState[responseItem.questionId] = multipleAnswers;
                break;
            }
            default: {
                initialFormState[responseItem.questionId] = answer.value;
            }
        }
    }
    nestedItems.forEach(item => completeResponseItem(initialFormState, item));
}


export const completeInitialFormState = (response: Models.QuestionnaireResponse): IFormState => {
    const initialFormState: IFormState = {};
    response.items.forEach(item => completeResponseItem(initialFormState, item));
    return initialFormState;
}

export default completeInitialFormState;