import { QuestionnaireResponseItem } from "../models/questionnaireResponseItem";
import { IQuestionnaireResponseItem } from "..";
import choiceStrategy from "../replyStrategies/choiceStrategy";
import textInputStrategy from "../replyStrategies/textInputStrategy";
import multiChoiceStrategy from "../replyStrategies/multiChoiceStrategy";
import { ATTACHMENT, BOOLEAN, CHOICE, DATE, TIME, DATE_TIME, TEXT, STRING, DECIMAL, OPEN_CHOICE, MULTI_CHOICE } from "../constants/itemTypes";
import validators from "../validators/validators";
import Item from "../models/item";
import attachmentStrategy from "../replyStrategies/attachmentStrategy";

export const questionResponseFactory = {
    createResponse: (item: Item, responseItem?: Partial<IQuestionnaireResponseItem>): QuestionnaireResponseItem => {
        const validationRules = [];
        item.required && validationRules.push(validators.required);
        switch (item.type) {
            case STRING: {
                validationRules.push(validators.stringRegExp);
                return new QuestionnaireResponseItem(responseItem, textInputStrategy, validationRules);
            }
            case TEXT: {
                validationRules.push(validators.textRegExp)
                return new QuestionnaireResponseItem(responseItem, textInputStrategy, validationRules);
            }
            case DECIMAL: {
                validationRules.push(validators.decimalRegExp)
                return new QuestionnaireResponseItem(responseItem, textInputStrategy, validationRules);
            }
            case BOOLEAN: {
                validationRules.push(validators.booleanRegExp)
                return new QuestionnaireResponseItem(responseItem, textInputStrategy, validationRules);
            }
            case DATE: {
                validationRules.push(validators.dateRegExp)
                return new QuestionnaireResponseItem(responseItem, textInputStrategy, validationRules);
            }
            case TIME: {
                validationRules.push(validators.timeRegExp)
                return new QuestionnaireResponseItem(responseItem, textInputStrategy, validationRules);
            }
            case DATE_TIME: {
                validationRules.push(validators.dateTimeRegExp)
                return new QuestionnaireResponseItem(responseItem, textInputStrategy, validationRules);
            }
            case CHOICE: {
                return new QuestionnaireResponseItem(responseItem, choiceStrategy, validationRules);
            }
            case OPEN_CHOICE: {
                return new QuestionnaireResponseItem(responseItem, choiceStrategy, validationRules);
            }
            case MULTI_CHOICE: {
                return new QuestionnaireResponseItem(responseItem, multiChoiceStrategy, validationRules);
            }
            case ATTACHMENT: {
                return new QuestionnaireResponseItem(responseItem, attachmentStrategy, validationRules);
            }
            default: {
                return new QuestionnaireResponseItem(responseItem, textInputStrategy, validationRules);
            }
        }
    }
}


export default questionResponseFactory;