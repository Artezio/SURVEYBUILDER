import { IGroupItem, Item, IItem, GROUP } from "..";
import { IItemCollection } from "../interfaces/IItemCollection";
import { observable, observableProperty, getObservable } from '@art-forms/observable';


@observable
export class GroupItem extends Item implements IGroupItem {
    @observableProperty
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
        }
    }

    removeItem(item: Item) {
        this.items.splice(item.position, 1);
        // this.items = this.items.filter(x => x.id !== item.id);
    }

    updateItem(item: IGroupItem) {
        const obs = getObservable(item);
        obs && obs.mute();
        super.updateItem(item);
        if (Array.isArray(item.items)) {
            this.items = item.items;
        }
        obs && obs.unmute();
        obs && obs.emitChange();
    }

    replaceItem(oldItem: Item, newItem: Item) {
        let position;
        this.items.find((item, index) => {
            if (item.id === oldItem.id) {
                position = index;
                return true
            }
        })
        position !== undefined && this.items.splice(position, 1, newItem);
    }
}

export default GroupItem;