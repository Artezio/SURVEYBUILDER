import ReplyStrategy from "../interfaces/IReplyStrategy";

export const multiChoiceStrategy: ReplyStrategy = (value, questionnaireResponseItem, answerFactory) => {
    questionnaireResponseItem.addAnswer(answerFactory.createAnswer({ value }));
}

export default multiChoiceStrategy;