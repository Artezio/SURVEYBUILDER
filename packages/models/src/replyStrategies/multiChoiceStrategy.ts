import ReplyStrategy from "../interfaces/IReplyStrategy";
import MultiChoiceItem from "../models/questionItems/multiChoiceItem";

export const multiChoiceStrategy: ReplyStrategy = (value, questionnaireResponseItem, answerFactory) => {
    const option = (questionnaireResponseItem.questionItem as MultiChoiceItem).options.find(option => option.id === value);
    if (!option) return;
    const answer = questionnaireResponseItem.answers.find(answer => answer.id === option.id);
    if (!answer) {
        questionnaireResponseItem.addAnswer(answerFactory.createAnswer({ id: option.id, value: option.value }));
    } else {
        answer.remove();
    }
}

export default multiChoiceStrategy;