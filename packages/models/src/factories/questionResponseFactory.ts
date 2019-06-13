import { QuestionnaireResponseItem } from "../models/questionnaireResponseItem";
import { IQuestionnaireResponseItem } from "..";
import choiceStrategy from "../replyStrategies/choiceStrategy";
import textInputStrategy from "../replyStrategies/textInputStrategy";
import multiChoiceStrategy from "../replyStrategies/multiChoiceStrategy";
import { ATTACHMENT, BOOLEAN, CHOICE, DATE, TIME, DATE_TIME, TEXT, STRING, DECIMAL, OPEN_CHOICE, MULTI_CHOICE } from "../constants/itemTypes";
import validators from "../validators/validators";
import Item from "../models/item";
import attachmentStrategy from "../replyStrategies/attachmentStrategy";

const DEFAULT_VALIDATOR = () => true;

export const questionResponseFactory = {
    createResponse: (item: Item, responseItem?: Partial<IQuestionnaireResponseItem>): QuestionnaireResponseItem => {
        switch (item.type) {
            case STRING: {
                return new QuestionnaireResponseItem(responseItem, item, textInputStrategy, validators.string);
            }
            case TEXT: {
                return new QuestionnaireResponseItem(responseItem, item, textInputStrategy, validators.text);
            }
            case DECIMAL: {
                return new QuestionnaireResponseItem(responseItem, item, textInputStrategy, validators.decimal);
            }
            case BOOLEAN: {
                return new QuestionnaireResponseItem(responseItem, item, textInputStrategy, validators.boolean);
            }
            case DATE: {
                return new QuestionnaireResponseItem(responseItem, item, textInputStrategy, validators.date);
            }
            case TIME: {
                return new QuestionnaireResponseItem(responseItem, item, textInputStrategy, validators.time);
            }
            case DATE_TIME: {
                return new QuestionnaireResponseItem(responseItem, item, textInputStrategy, validators.dateTime);
            }
            case CHOICE: {
                return new QuestionnaireResponseItem(responseItem, item, choiceStrategy, DEFAULT_VALIDATOR);
            }
            case OPEN_CHOICE: {
                return new QuestionnaireResponseItem(responseItem, item, choiceStrategy, DEFAULT_VALIDATOR);
            }
            case MULTI_CHOICE: {
                return new QuestionnaireResponseItem(responseItem, item, multiChoiceStrategy, DEFAULT_VALIDATOR);
            }
            case ATTACHMENT: {
                return new QuestionnaireResponseItem(responseItem, item, attachmentStrategy, DEFAULT_VALIDATOR);
            }
            default: {
                return new QuestionnaireResponseItem(responseItem, item, textInputStrategy, DEFAULT_VALIDATOR);
            }
        }
    }
}


export default questionResponseFactory;