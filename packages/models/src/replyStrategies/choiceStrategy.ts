import ReplyStrategy from "../interfaces/IReplyStrategy";
import { QuestionItem, QuestionnaireResponseItem, AnswerFactory } from "..";

export const choiceStrategy: ReplyStrategy = (value: any, item: QuestionItem<any> | undefined, questionnaireResponseItem: QuestionnaireResponseItem, answerFactory: AnswerFactory) => {
    if (questionnaireResponseItem.answers[0]) {
        questionnaireResponseItem.answers[0].setValue(value);
    } else {
        const answer = answerFactory.createAnswer({ value });
        questionnaireResponseItem.setSingleAnswer(answer);
    }
}

export default choiceStrategy;