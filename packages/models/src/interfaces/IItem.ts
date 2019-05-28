import { ITEM_TYPE } from "../constants/itemTypes";
import IEnableWhen from "./IEnableWhen";
import { EnableBehavior } from "../constants/enableBehavior";


export interface IItem {
    id: string;
    type: ITEM_TYPE;
    text?: string;
    enableWhen?: IEnableWhen[];
    enableBehavior?: EnableBehavior;
}

export default IItem;