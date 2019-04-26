import { GROUP } from '../constants/itemTypes';
import { IItem } from './IItem';
import { Item } from '..';


export interface IGroupItem extends IItem {
    items?: Item[];
    type: GROUP;
}

export default IGroupItem;