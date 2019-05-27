import * as Models from '@art-forms/models';

export const completeResponse = (item: Models.IQuestionnaire | Models.GroupItem, response: Models.QuestionnaireResponse | Models.QuestionnaireResponseItem) => {
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
        response.addQuestionnaireResponseItem(new Models.QuestionnaireResponseItem({ id: item.id, text: item.text, answers }))
    })
}