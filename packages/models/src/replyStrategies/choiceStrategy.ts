import ReplyStrategy from "../interfaces/IReplyStrategy";
import { ChoiceItem } from "..";

export const choiceStrategy: ReplyStrategy = (value, questionnaireResponseItem, answerFactory) => {
    const answer = questionnaireResponseItem.answers[0] || answerFactory.createAnswer();
    const option = (questionnaireResponseItem.questionItem as ChoiceItem).options.find(option => option.id === value);
    option && answer.updateAnswer({ ...answer, id: option.id, value: option.value });
    questionnaireResponseItem.setSingleAnswer(answer);
}

export default choiceStrategy;