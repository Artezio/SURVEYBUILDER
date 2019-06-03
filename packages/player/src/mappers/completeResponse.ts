import * as Models from '@art-forms/models';

export const completeResponse = (item: Models.Questionnaire | Models.GroupItem, response: Models.QuestionnaireResponse | Models.QuestionnaireResponseItem) => {
    item.items && item.items.forEach(item => {
        const responseItem = Models.questionResponseFactory.createResponseByType(item.type, { id: item.id, text: item.text });
        const answerFactory = new Models.AnswerFactory(responseItem);
        if (item.type !== Models.GROUP) {
            const oldResponseItem = response.items.find(responseItem => responseItem.id === item.id);
            if (oldResponseItem && Array.isArray(oldResponseItem.answers)) {
                oldResponseItem.answers.forEach(answer => {
                    responseItem.addAnswer(answerFactory.createAnswer(answer));
                })
            }
            if (Array.isArray((item as Models.QuestionItem<any>).initialAnswers) && responseItem.answers.length === 0) {
                (item as Models.QuestionItem<any>).initialAnswers.forEach(initialAnswer => {
                    responseItem.addAnswer(answerFactory.createAnswer(initialAnswer));
                })
            }
        }
        if (item.type === Models.GROUP) {
            completeResponse(item as Models.GroupItem, responseItem)
        }
        response.addQuestionnaireResponseItem(responseItem);
    })
}

export default completeResponse;