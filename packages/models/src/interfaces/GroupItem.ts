import DisplayItem from './DisplayItem';
import { GROUP_ITEM } from '../constants';

export interface GroupItem extends DisplayItem {
    items: DisplayItem[];
    type: GROUP_ITEM;
}

export default GroupItem;