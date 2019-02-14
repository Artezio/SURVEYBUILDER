import QuestionItem from './QuestionItem';
import { QUESTIONNAIRE_ITEM_TYPES } from '../enums/index';

export interface TextItem extends QuestionItem<string> {
    type: QUESTIONNAIRE_ITEM_TYPES.QUESTION
}

export default TextItem;