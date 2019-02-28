import * as Models from '@art-forms/models';
import { RemoveItemAction, UpdateDisplayItem } from '../actions/DisplayItem';


export interface DisplayItemOwnProps {
    item: Models.DisplayItem
}

export interface DisplayItemActions {
    removeItem: RemoveItemAction;
    updateDisplayItem: UpdateDisplayItem;
}

export type DisplayItemProps = DisplayItemOwnProps & AssignToActions<DisplayItemActions>;

export default DisplayItemProps;