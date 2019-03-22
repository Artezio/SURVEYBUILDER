import { GROUP } from '../constants';
import { IItem } from './IItem';


export interface IGroupItem extends IItem {
    items: IItem[];
    type: GROUP;
}

export default IGroupItem;