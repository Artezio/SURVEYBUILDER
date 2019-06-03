import * as Models from '@art-forms/models';
import IFormState from '../interfaces/IFormState';


const completeResponseItem = (initialFormState: IFormState, responseItem: Models.QuestionnaireResponseItem) => {
    const answers = responseItem.answers;
    const nestedItems = responseItem.items;
    if (answers.length >= 1) {
        if (answers.length === 1) {
            initialFormState[responseItem.id] = answers[0].value;
        } else {
            const multipleAnswers: any = {};
            answers.forEach(answer => {
                multipleAnswers[answer.id] = true;
            })
            initialFormState[responseItem.id] = multipleAnswers;
        }
    }
    nestedItems.forEach(item => completeResponseItem(initialFormState, item));
}


export const completeInitialFormState = (response: Models.QuestionnaireResponse): IFormState => {
    const initialFormState = {};
    response.items.forEach(item => completeResponseItem(initialFormState, item));
    return initialFormState;
}

export default completeInitialFormState;