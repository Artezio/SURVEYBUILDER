import { IGroupItem, Item, ITextItem, observable, IItem, GROUP, TextItem } from "..";
import { ICollection } from "../interfaces/ICollection";

@observable
export class GroupItem extends Item implements IGroupItem {
    items: IItem[];
    type: GROUP = GROUP;

    constructor(item: Omit<IGroupItem, 'id' | 'type'> | undefined = {}, parent?: ICollection<IGroupItem>) {
        super(item, parent);
        this.items = item.items || [];
    }

    addItem(item: Item) {
        if (this.items.every(itm => itm.id !== item.id)) {
            this.items = [...this.items, item]
        }
    }

    removeItem(item: IItem) {
        this.items = this.items.filter(x => x.id !== item.id);
    }
}