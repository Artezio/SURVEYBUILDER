import { IGroupItem, Item, GROUP } from "..";
import { IItemCollection } from "../interfaces/IItemCollection";
import { observable, observableProperty, getObservable } from '@art-forms/observable';


@observable
export class GroupItem extends Item implements IGroupItem {
    @observableProperty
    items!: Item[];
    type: GROUP = GROUP;
    itemIdMap: Map<string, boolean> = new Map();

    constructor(item: Partial<Omit<IGroupItem, 'type'>> | undefined, parent?: IItemCollection<IGroupItem>) {
        super(item, parent);
        Object.assign(this, { items: [] }, item);
        this.items.forEach(item => this.itemIdMap.set(item.id, true));
    }

    addItem(item: Item, index?: number) {
        if (this.itemIdMap.has(item.id)) return;
        item.parent = this;
        index = index === undefined ? this.items.length : index;
        this.items.splice(index, 0, item);
        this.itemIdMap.set(item.id, true);
    }

    removeItem(item: Item) {
        this.items.splice(item.position, 1);
        this.itemIdMap.delete(item.id);
    }

    replaceItem(oldItem: Item, newItem: Item) {
        const position = oldItem.position;
        this.items.splice(position, 1, newItem);
        this.itemIdMap.delete(oldItem.id);
        this.itemIdMap.set(newItem.id, true);
    }
}

export default GroupItem;