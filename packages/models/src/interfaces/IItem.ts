import { ITEM_TYPE } from "../constants/itemTypes";


export interface IItem {
    id: string;
    type: ITEM_TYPE;
    text?: string;
}