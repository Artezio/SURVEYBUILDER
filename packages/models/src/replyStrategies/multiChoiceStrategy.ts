import ReplyStrategy from "../interfaces/IReplyStrategy";
import AnswerOption from "../models/answerOption";

export const multiChoiceStrategy: ReplyStrategy = (value: [boolean, AnswerOption], questionnaireResponseItem, answerFactory) => {
    const [flag, option] = value;
    if (flag) {
        questionnaireResponseItem.addAnswer(answerFactory.createAnswer({ value: option.value, id: option.id }));
    } else {
        const answer = questionnaireResponseItem.answers.find(answer => answer.id === option.id);
        answer && questionnaireResponseItem.removeAnswer(answer);
    }
}

export default multiChoiceStrategy;