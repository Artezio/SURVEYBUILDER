import ReplyStrategy from "../interfaces/IReplyStrategy";

export const textInputStrategy: ReplyStrategy = (value: string | number | boolean | undefined, questionnaireResponseItem, answerFactory) => {
    if (questionnaireResponseItem.answers[0]) {
        const answer = questionnaireResponseItem.answers[0];
        if (value !== '' && value !== undefined) {
            answer.setValue(value);
        } else {
            answer.remove();
        }
    } else {
        if (value !== '' && value !== undefined) {
            const answer = answerFactory.createAnswer({ value });
            questionnaireResponseItem.setSingleAnswer(answer);
        }
    }
}

export default textInputStrategy;