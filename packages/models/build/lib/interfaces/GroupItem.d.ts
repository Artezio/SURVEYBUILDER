import { GROUP } from '../constants';
import { Item } from './Item';
export interface GroupItem extends Item {
    items: Item[];
    type: GROUP;
}
export default GroupItem;
