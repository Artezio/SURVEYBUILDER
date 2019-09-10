import { QuestionnaireResponseItem } from "../models/questionnaireResponseItem";
import { IQuestionnaireResponseItem, IItem } from "..";
import choiceStrategy from "../replyStrategies/choiceStrategy";
import textInputStrategy from "../replyStrategies/textInputStrategy";
import multiChoiceStrategy from "../replyStrategies/multiChoiceStrategy";
import { ATTACHMENT, BOOLEAN, CHOICE, DATE, TIME, DATE_TIME, TEXT, STRING, DECIMAL, OPEN_CHOICE, MULTI_CHOICE } from "../constants/itemTypes";
import validators from "../validators/validators";
import attachmentStrategy from "../replyStrategies/attachmentStrategy";
import AnswerCollection from "../models/answersCollection";

export const questionResponseFactory = {
    createResponse: (questionItem: IItem, answerCollection: AnswerCollection, responseItem?: Partial<IQuestionnaireResponseItem>): QuestionnaireResponseItem => {
        const validationRules = [];
        questionItem.required && validationRules.push(validators.required);
        switch (questionItem.type) {
            case STRING: {
                validationRules.push(validators.stringRegExp);
                return new QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy, validationRules, answerCollection);
            }
            case TEXT: {
                validationRules.push(validators.textRegExp)
                return new QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy, validationRules, answerCollection);
            }
            case DECIMAL: {
                validationRules.push(validators.decimalRegExp)
                return new QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy, validationRules, answerCollection);
            }
            case BOOLEAN: {
                validationRules.push(validators.booleanRegExp)
                return new QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy, validationRules, answerCollection);
            }
            case DATE: {
                validationRules.push(validators.dateRegExp)
                return new QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy, validationRules, answerCollection);
            }
            case TIME: {
                validationRules.push(validators.timeRegExp)
                return new QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy, validationRules, answerCollection);
            }
            case DATE_TIME: {
                validationRules.push(validators.dateTimeRegExp)
                return new QuestionnaireResponseItem(responseItem, questionItem, textInputStrategy, validationRules, answerCollection);
            }
            case CHOICE: {
                return new QuestionnaireResponseItem(responseItem, questionItem, choiceStrategy, validationRules, answerCollection);
            }
            case OPEN_CHOICE: {
                return new QuestionnaireResponseItem(responseItem, questionItem, choiceStrategy, validationRules, answerCollection);
            }
            case MULTI_CHOICE: {
                return new QuestionnaireResponseItem(responseItem, questionItem, multiChoiceStrategy, validationRules, answerCollection);
            }
            case ATTACHMENT: {
                return new QuestionnaireResponseItem(responseItem, questionItem, attachmentStrategy, validationRules, answerCollection);
            }
            default: {
                return new QuestionnaireResponseItem(responseItem, questionItem, undefined, validationRules, answerCollection);
            }
        }
    }
}


export default questionResponseFactory;