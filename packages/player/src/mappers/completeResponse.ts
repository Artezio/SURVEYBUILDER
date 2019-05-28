import * as Models from '@art-forms/models';

export const completeResponse = (item: Models.Questionnaire | Models.GroupItem, response: Models.QuestionnaireResponse | Models.QuestionnaireResponseItem) => {
    item.items && item.items.forEach(item => {
        let answers;
        if (item.type !== Models.GROUP) {
            const responseItem = response.items.find(responseItem => responseItem.id === item.id);
            if (responseItem && responseItem.answers !== undefined && responseItem.answers.length !== 0) {
                answers = responseItem.answers;
            }
            else {
                answers = Array.isArray((item as Models.QuestionItem<any>).initialAnswers) ?
                    (item as Models.QuestionItem<any>).initialAnswers.map(initialAnswer => new Models.Answer(initialAnswer)) :
                    [];
            }
        }
        let responseItem: Models.QuestionnaireResponseItem;
        switch (item.type) {
            case Models.CHOICE: {
                responseItem = Models.QuestionResponseFactory.createChoiceResponse({ id: item.id, text: item.text, answers });
            }
            case Models.OPEN_CHOICE: {
                responseItem = Models.QuestionResponseFactory.createChoiceResponse({ id: item.id, text: item.text, answers });
            }
            case Models.MULTI_CHOICE: {
                responseItem = Models.QuestionResponseFactory.createMultiChoiceResponse({ id: item.id, text: item.text, answers });
            }
            default: {
                responseItem = Models.QuestionResponseFactory.createTextInputResponse({ id: item.id, text: item.text, answers });
            }
        }
        response.addQuestionnaireResponseItem(responseItem);
    })
}