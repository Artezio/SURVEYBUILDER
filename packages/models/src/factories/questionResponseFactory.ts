import { QuestionnaireResponseItem } from "../models/questionnaireResponseItem";
import { IQuestionnaireResponseItem } from "..";
import choiceStrategy from "../replyStrategies/choiceStrategy";
import textInputStrategy from "../replyStrategies/textInputStrategy";
import multiChoiceStrategy from "../replyStrategies/multiChoiceStrategy";
import { ITEM_TYPE, ATTACHMENT, BOOLEAN, CHOICE, DATE, TIME, DATE_TIME, TEXT, STRING, DECIMAL, OPEN_CHOICE, MULTI_CHOICE } from "../constants/itemTypes";
import validators from "../validators/validators";

const DEFAULT_VALIDATOR = () => true;

export const questionResponseFactory = {
    createResponseByType: (type: ITEM_TYPE, item?: Partial<IQuestionnaireResponseItem>): QuestionnaireResponseItem => {
        switch (type) {
            case STRING: {
                return new QuestionnaireResponseItem(item, textInputStrategy, validators.string);
            }
            case TEXT: {
                return new QuestionnaireResponseItem(item, textInputStrategy, validators.text);
            }
            case DECIMAL: {
                return new QuestionnaireResponseItem(item, textInputStrategy, validators.decimal);
            }
            case BOOLEAN: {
                return new QuestionnaireResponseItem(item, textInputStrategy, validators.boolean);
            }
            case DATE: {
                return new QuestionnaireResponseItem(item, textInputStrategy, validators.date);
            }
            case TIME: {
                return new QuestionnaireResponseItem(item, textInputStrategy, validators.time);
            }
            case DATE_TIME: {
                return new QuestionnaireResponseItem(item, textInputStrategy, validators.dateTime);
            }
            case CHOICE: {
                return new QuestionnaireResponseItem(item, choiceStrategy, DEFAULT_VALIDATOR);
            }
            case OPEN_CHOICE: {
                return new QuestionnaireResponseItem(item, choiceStrategy, DEFAULT_VALIDATOR);
            }
            case MULTI_CHOICE: {
                return new QuestionnaireResponseItem(item, multiChoiceStrategy, DEFAULT_VALIDATOR);
            }
            case ATTACHMENT: {
                return new QuestionnaireResponseItem(item, textInputStrategy, DEFAULT_VALIDATOR);
            }
            default: {
                return new QuestionnaireResponseItem(item, textInputStrategy, DEFAULT_VALIDATOR);
            }
        }
    }
}


export default questionResponseFactory;