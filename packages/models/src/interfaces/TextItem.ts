import QuestionItem from './QuestionItem';
import { QUESTIONNAIRE_ITEM_TYPES } from '../enums/index';

export interface TextItem extends QuestionItem<boolean> {
    type: QUESTIONNAIRE_ITEM_TYPES.QUESTION,
}

export default TextItem;