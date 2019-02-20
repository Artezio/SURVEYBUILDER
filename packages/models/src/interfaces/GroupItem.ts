import DisplayItem from './DisplayItem';

export interface GroupItem extends DisplayItem {
    items: DisplayItem[];
}

export default GroupItem;