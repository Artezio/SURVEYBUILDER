import { DisplayItem, TextItem } from '@art-forms/models';
import { REMOVE_ITEM } from '../constants/actions';
import { Action } from './Action';

export interface TextItemComponentOwnProps {
    item: TextItem
}

export type removeItem = (item: DisplayItem) => Action<REMOVE_ITEM, DisplayItem>;

export interface TextItemComponentActions {
    removeItem: removeItem;
}

export type TextItemComponentProps = TextItemComponentOwnProps & AssignToActions<TextItemComponentActions>;
export default TextItemComponentProps;