import { Item } from './Item';

export interface DisplayItem extends Item {
    text?: string;
}

export default DisplayItem;