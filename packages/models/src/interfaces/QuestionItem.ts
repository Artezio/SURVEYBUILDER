import DisplayItem from './DisplayItem';
import { QUESTIONNAIRE_ITEM_TYPES } from '../enums';

export interface QuestionItem<T> extends DisplayItem {
    initialValue?: T;
    required?: boolean;
    value?: T,
    type: QUESTIONNAIRE_ITEM_TYPES.QUESTION
}


export default QuestionItem;