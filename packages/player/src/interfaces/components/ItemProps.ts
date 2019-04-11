import * as Models from '@art-forms/models';


export interface ItemState {
    item: Models.Item;
    className?: string;
}

export type ItemProps = ItemState;