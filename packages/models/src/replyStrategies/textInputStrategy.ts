import ReplyStrategy from "../interfaces/IReplyStrategy";
import { QuestionnaireResponseItem } from "../models/questionnaireResponseItem";
import AnswerFactory from "../factories/answerFactory";
import QuestionItem from "../models/questionItems/questionItem";

export const textInputStrategy: ReplyStrategy = (value: any, item: QuestionItem<any> | undefined, questionnaireResponseItem: QuestionnaireResponseItem, answerFactory: AnswerFactory) => {
    if (questionnaireResponseItem.answers[0]) {
        const answer = questionnaireResponseItem.answers[0];
        if (true/* validation should be there */) {
            answer.setValue(value);
        } else {
            answer.remove();
        }
    } else {
        if (true/* validation should be there */) {
            const answer = answerFactory.createAnswer({ value });
            questionnaireResponseItem.setSingleAnswer(answer);
        }
    }
}

export default textInputStrategy;