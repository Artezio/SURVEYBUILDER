import * as Models from '@art-forms/models';


export interface ItemOwnProps {
    item: Models.IItem
}

export interface ItemActions {
    removeItem(item: Models.IItem): void;
    updateItem(item: Models.IItem): void;
}

export type ItemProps = ItemOwnProps & AssignToActions<ItemActions>;

export default ItemProps;