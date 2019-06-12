import * as Models from '@art-forms/models';
import IFormState from '../interfaces/IFormState';


const completeResponseItem = (initialFormState: IFormState, responseItem: Models.QuestionnaireResponseItem) => {
    const answers = responseItem.answers;
    const nestedItems = responseItem.items;
    const questionItem = responseItem.questionItem;
    const type = responseItem.questionItem.type;
    if (answers.length !== 0) {
        const answer = answers[0];
        switch (type) {
            case Models.CHOICE: {
                initialFormState[responseItem.id] = answer.id;
                break;
            }
            case Models.OPEN_CHOICE: {
                if ((questionItem as Models.OpenChoiceItem).options.some(option => option.id === answer.id && option.value === answer.value)) {
                    initialFormState[responseItem.id] = answer.id;
                }
                else {
                    initialFormState[responseItem.id + '-other'] = answer.value;
                }
            }
            case Models.MULTI_CHOICE: {
                const multipleAnswers: any = {};
                answers.forEach(answer => {
                    multipleAnswers[answer.id] = true;
                })
                initialFormState[responseItem.id] = multipleAnswers;
                break;
            }
            default: {
                initialFormState[responseItem.id] = answer.value;
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