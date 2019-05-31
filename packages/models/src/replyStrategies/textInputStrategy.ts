import ReplyStrategy from "../interfaces/IReplyStrategy";

export const textInputStrategy: ReplyStrategy = (value, validator, questionnaireResponseItem, answerFactory) => {
    if (questionnaireResponseItem.answers[0]) {
        const answer = questionnaireResponseItem.answers[0];
        if (value !== '' && value !== undefined) {
            validator(value) && answer.setValue(value);
        } else {
            answer.remove();
        }
    } else {
        if (validator(value)) {
            const answer = answerFactory.createAnswer({ value });
            questionnaireResponseItem.setSingleAnswer(answer);
        }
    }
}

export default textInputStrategy;