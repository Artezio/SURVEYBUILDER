import { QuestionnaireResponseItem } from "../models/questionnaireResponseItem";
import { IQuestionnaireResponseItem } from "..";
import choiceStrategy from "../replyStrategies/choiceStrategy";
import textInputStrategy from "../replyStrategies/textInputStrategy";
import multiChoiceStrategy from "../replyStrategies/multiChoiceStrategy";

export const QuestionResponseFactory = {
    createChoiceResponse(item?: Partial<IQuestionnaireResponseItem>) {
        return new QuestionnaireResponseItem(item, choiceStrategy);
    },
    createTextInputResponse(item?: Partial<IQuestionnaireResponseItem>) {
        return new QuestionnaireResponseItem(item, textInputStrategy);
    },
    createMultiChoiceResponse(item?: Partial<IQuestionnaireResponseItem>) {
        return new QuestionnaireResponseItem(item, multiChoiceStrategy);
    }
}

export default QuestionResponseFactory;