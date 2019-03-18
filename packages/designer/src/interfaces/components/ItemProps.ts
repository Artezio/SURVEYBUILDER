import * as Models from '@art-forms/models';


export interface ItemOwnProps {
    item: Models.Item
}

export interface ItemActions {
    removeItem(item: Models.Item): void;
    updateItem(item: Models.Item): void;
}

export type ItemProps = ItemOwnProps & AssignToActions<ItemActions>;

export default ItemProps;