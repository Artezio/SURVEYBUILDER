import { IGroupItem, Item, ITextItem, observable, IItem, GROUP, TextItem } from "..";
import { ICollection } from "../interfaces/ICollection";

@observable
export class GroupItem extends Item implements IGroupItem {
    items!: IItem[];
    type: GROUP;

    constructor(item: Partial<IGroupItem> | undefined = {}, parent?: ICollection<IGroupItem>) {
        super(item, parent);
        this.type = GROUP;
        this.items = item.items || [];
    }

    addItem(item?: Partial<IItem>) {
        if ((item && this.items.every(itm => itm.id !== item.id)) || !item) {
            this.items = [...this.items, new Item(item, this)]
        }
    }

    addTextItem(item?: Partial<ITextItem>) {
        if ((item && this.items.every(itm => itm.id !== item.id)) || !item) {
            this.items = [...this.items, new TextItem(item, this)]
        }
    }

    addGroupItem(item?: Partial<IGroupItem>) {
        if ((item && this.items.every(itm => itm.id !== item.id)) || !item) {
            this.items = [...this.items, new GroupItem(item, this)];
        }
    }

    removeItem(item: IItem) {
        this.items = this.items.filter(x => x.id !== item.id);
    }
}