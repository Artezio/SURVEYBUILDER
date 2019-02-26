import { DisplayItem, TextItem } from '@art-forms/models';
import { REMOVE_ITEM } from '../constants/questionnaireActions';
import { Action } from './Action';
import { updateTextItem } from './QuestionnaireComponentProps';

export interface TextItemComponentOwnProps {
    item: TextItem
}

export type removeItem = (item: DisplayItem) => Action<REMOVE_ITEM, DisplayItem>;

export interface TextItemComponentActions {
    removeItem: removeItem;
    updateTextItem: updateTextItem;
}

export type TextItemComponentProps = TextItemComponentOwnProps & AssignToActions<TextItemComponentActions>;
export default TextItemComponentProps;