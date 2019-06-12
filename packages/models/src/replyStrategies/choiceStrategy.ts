import ReplyStrategy from "../interfaces/IReplyStrategy";

export const choiceStrategy: ReplyStrategy = (value, questionnaireResponseItem, answerFactory) => {
    if (questionnaireResponseItem.answers[0]) {
        questionnaireResponseItem.answers[0].setValue(value);
    } else {
        const answer = answerFactory.createAnswer({ value });
        questionnaireResponseItem.setSingleAnswer(answer);
    }
}

export default choiceStrategy;