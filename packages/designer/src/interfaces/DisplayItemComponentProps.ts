import { DisplayItem, Item } from '@art-forms/models';
import { REMOVE_ITEM, UPDATE_DISPLAY_ITEM } from '../constants/questionnaireActions';
import { Action } from './Action';

export interface DisplayItemComponentOwnProps {
    item: DisplayItem
}

export type RemoveItem = (item: Item) => Action<REMOVE_ITEM, Item>;
export type UpdateDisplayItem = (item: DisplayItem) => Action<UPDATE_DISPLAY_ITEM, Item>;

export interface DisplayItemComponentActions {
    removeItem: RemoveItem;
    updateDisplayItem: UpdateDisplayItem;
}

export type DisplayItemComponentProps = DisplayItemComponentOwnProps & AssignToActions<DisplayItemComponentActions>;
export default DisplayItemComponentProps;