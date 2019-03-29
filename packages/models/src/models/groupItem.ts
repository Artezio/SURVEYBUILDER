import { IGroupItem, Item, ITextItem } from "..";
import { IItem } from "../interfaces/IItem";
import { ICollection } from "../interfaces/ICollection";
import { GROUP } from "../constants";
import TextItem from "./textItem";
import { observable } from "../decorators/temporaryObservable";

@observable
export class GroupItem extends Item implements IGroupItem {
    items: IItem[];
    type: GROUP;

    constructor(item: Partial<IGroupItem> | undefined = {}, parent?: ICollection<IGroupItem>) {
        super(item, parent);
        this.type = GROUP;
        this.items = item.items || [];
    }

    addItem(item?: Partial<IItem>) {
        this.items = [...this.items, new Item(item, this)]
    }

    addTextItem(item?: Partial<ITextItem>) {
        this.items = [...this.items, new TextItem(item, this)]
    }

    addGroupItem(item?: IGroupItem) {
        this.items = [...this.items, new GroupItem(item, this)];
    }

    remove() {
        this.parent && this.parent.removeItem(this);
    }

    removeItem(item?: IItem) {
        this.items = this.items.filter(x => x !== item);
    }
}