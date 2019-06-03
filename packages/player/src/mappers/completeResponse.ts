import * as Models from '@art-forms/models';

export const completeResponse = (item: Models.Questionnaire | Models.GroupItem, response: Models.QuestionnaireResponse | Models.QuestionnaireResponseItem) => {
    item.items && item.items.forEach(item => {
        let answers;
        const answerFactory = new Models.AnswerFactory();
        if (item.type !== Models.GROUP) {
            const responseItem = response.items.find(responseItem => responseItem.id === item.id);
            if (responseItem && responseItem.answers !== undefined && responseItem.answers.length !== 0) {
                return;
            }
            else {
                answers = Array.isArray((item as Models.QuestionItem<any>).initialAnswers) ?
                    (item as Models.QuestionItem<any>).initialAnswers.map(initialAnswer => {
                        if (item.type === Models.CHOICE || item.type === Models.OPEN_CHOICE || item.type === Models.MULTI_CHOICE) {
                            const option = (item as Models.ChoiceItem).options.find(opt => opt.id === initialAnswer.value);
                            const value = option && option.value;
                            const id = option && option.id;
                            return answerFactory.createAnswer({ id, value });
                        }
                        return answerFactory.createAnswer(initialAnswer);
                    }) :
                    [];
            }
        }
        const responseItem = Models.questionResponseFactory.createResponseByType(item.type, { id: item.id, text: item.text, answers });
        if (item.type === Models.GROUP) {
            completeResponse(item as Models.GroupItem, responseItem)
        }
        response.addQuestionnaireResponseItem(responseItem);
    })
}

export default completeResponse;