import { GROUP } from '../constants/itemTypes';
import { IItem } from './IItem';


export interface IGroupItem extends IItem {
    items?: IItem[];
    type: GROUP;
}

export default IGroupItem;