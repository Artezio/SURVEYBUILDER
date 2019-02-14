import DisplayItem from './displayItem';

export interface GroupItem extends DisplayItem {
    items: DisplayItem[];
}

export default GroupItem;