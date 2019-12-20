import { IItemCollection } from "../interfaces/IItemCollection";
import { observable, observableProperty } from '@artezio/observable';
import ItemByTypeFactory from "../factories/itemByTypeFactory";
import Item from "./item";
import IGroupItem from "../interfaces/IGroupItem";
import { GROUP } from "../constants/itemTypes";


@observable
export class GroupItem extends Item implements IGroupItem, IItemCollection {
    @observableProperty
    items!: Item[];
    type: GROUP = GROUP;
    itemIdMap: Map<string, boolean> = new Map();
    itemByTypeFactory: ItemByTypeFactory = new ItemByTypeFactory(this);

    constructor(item: Partial<Omit<IGroupItem, 'type'>> | undefined, parent?: IItemCollection) {
        super(item, parent);
        this.completeItems(item);
        this.items.forEach(item => this.itemIdMap.set(item.id, true));
    }

    addDescendantItemAfter(thisItem: Item, newItem: Item) {
        this.addItem(newItem, thisItem.position + 1);
    }

    completeItems(item?: Partial<Omit<IGroupItem, 'type'>>) {
        if (item && item.items) {
            this.items = item.items.map(item => this.itemByTypeFactory.createItem(item));
        } else {
            this.items = [];
        }
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