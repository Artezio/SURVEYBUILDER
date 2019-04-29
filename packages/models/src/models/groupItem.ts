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

    addItem(item: Item) {
        if (this.items.every(itm => itm.id !== item.id)) {
            this.items = [...this.items, item]
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

    moveItem(oldItem: Item, newPlace: number) {
        let position;
        const item = this.items.find((item, index) => {
            if (item.id === oldItem.id) {
                position = index;
                return true;
            }
            return false;
        })
        if (position === undefined || item === undefined || position === newPlace) return;
        this.items.splice(position, 1);
        this.items.splice(newPlace, 0, item);
        this.items = [...this.items];
    }
}

export default GroupItem;