import * as Models from '@art-forms/models';
import { removeItem, updateItem } from '../../actions/item';


export interface ItemOwnProps {
    item: Models.Item
}

export interface ItemActions {
    removeItem: typeof removeItem;
    updateItem: typeof updateItem;
}

export type ItemProps = ItemOwnProps & AssignToActions<ItemActions>;

export default ItemProps;