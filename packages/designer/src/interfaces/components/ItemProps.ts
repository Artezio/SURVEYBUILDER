import * as Models from '@art-forms/models';
import { RemoveItem, UpdateItem } from '../actions/Item';


export interface ItemOwnProps {
    item: Models.Item
}

export interface ItemActions {
    removeItem: RemoveItem;
    updateItem: UpdateItem;
}

export type ItemProps = ItemOwnProps & AssignToActions<ItemActions>;

export default ItemProps;