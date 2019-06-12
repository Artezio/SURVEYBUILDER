import ReplyStrategy from "../interfaces/IReplyStrategy";
import AnswerOption from "../models/answerOption";

export const choiceStrategy: ReplyStrategy = (value: AnswerOption, questionnaireResponseItem, answerFactory) => {
    const answer = questionnaireResponseItem.answers[0];
    if (answer) {
        answer.updateAnswer({ ...answer, id: value.id, value: value.value });
    } else {
        const answer = answerFactory.createAnswer({ value: value.value, id: value.id });
        questionnaireResponseItem.setSingleAnswer(answer);
    }
}

export default choiceStrategy;