import { QUESTIONNAIRE_ITEM_TYPES } from '../enums';
import { Item } from './Item';

export interface QuestionItem<T> extends Item {
    initialValue?: T;
    required?: boolean;
    value?: T,
    type: QUESTIONNAIRE_ITEM_TYPES.QUESTION
}


export default QuestionItem;