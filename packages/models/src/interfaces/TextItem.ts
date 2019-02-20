import QuestionItem from './QuestionItem';
import { QUESTIONNAIRE_ITEM_TYPES } from '../enums';

export interface TextItem extends QuestionItem<string> {
    type: QUESTIONNAIRE_ITEM_TYPES.QUESTION
}

export default TextItem;