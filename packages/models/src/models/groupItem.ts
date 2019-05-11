import { IGroupItem, Item, observable, IItem, GROUP } from "..";
import { IItemCollection } from "../interfaces/IItemCollection";

@observable
export class GroupItem extends Item implements IGroupItem {
    items!: Item[];
    type: GROUP = GROUP;

    constructor(item: Partial<Omit<IGroupItem, 'type'>> | undefined, parent?: IItemCollection<IGroupItem>) {
        super(item, parent);
        Object.assign(this, { items: [] }, item);
    }

    addItem(item: Item, index?: number) {
        if (this.items.every((itm, i) => itm.id !== item.id || i !== index)) {
            item.parent = this;
            if (index !== undefined && typeof index === 'number') {
                this.items.splice(index, 0, item);
            }
            else {
                this.items.push(item);
            }
            this.items = [...this.items]
        }
    }

    removeItem(item: IItem) {
        this.items = this.items.filter(x => x.id !== item.id);
    }

    updateItem(item: IGroupItem) {
        super.updateItem(item);
        if (!!item.items) {
            this.items = item.items;
        }
    }

    replaceItem(oldItem: Item, newItem: Item) {
        let position;
        this.items.forEach((item, index) => {
            if (item.id === oldItem.id) {
                position = index;
            }
        })
        position !== undefined && this.items.splice(position, 1, newItem);
        this.items = [...this.items];
    }
}

export default GroupItem;