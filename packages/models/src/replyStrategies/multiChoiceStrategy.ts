import ReplyStrategy from "../interfaces/IReplyStrategy";
import { QuestionItem } from "..";
import { QuestionnaireResponseItem, AnswerFactory } from "..";

export const multiChoiceStrategy: ReplyStrategy = (value: any, item: QuestionItem<any> | undefined, questionnaireResponseItem: QuestionnaireResponseItem, answerFactory: AnswerFactory) => {
    questionnaireResponseItem.addAnswer(answerFactory.createAnswer({ value }));
}

export default multiChoiceStrategy;