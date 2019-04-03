import { IItem, TextItem } from "..";
import Item from "../models/item";
import { GroupItem } from "../models/groupItem";
import { ICollection } from "../interfaces/ICollection";
import StringItem from "../models/questionItems/stringItem";
import IGroupItem from "../interfaces/IGroupItem";
import ITextItem from "../interfaces/questionItems/ITextItem";
import { IStringItem } from "../interfaces/questionItems/IStringItem";


export class ItemFactory {
    parent?: ICollection<IItem>;

    constructor(parent?: ICollection<IItem>) {
        this.parent = parent;
    }

    createItem(item?: Partial<Omit<IItem, 'type'>>) {
        return new Item(item, this.parent)
    }

    createGroupItem(item?: Partial<Omit<IGroupItem, 'type'>>) {
        return new GroupItem(item, this.parent);
    }

    createTextItem(item?: Partial<Omit<ITextItem, 'type'>>) {
        return new TextItem(item, this.parent);
    }

    createStringItem(item?: Partial<Omit<IStringItem, 'type'>>) {
        return new StringItem(item, this.parent);
    }
}

export default ItemFactory;