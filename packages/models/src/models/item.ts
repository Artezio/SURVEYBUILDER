import { IItem, ITEM_TYPE, DISPLAY } from "..";
import { observable, observableProperty, getObservable } from '@art-forms/observable';
import uuid from "uuid/v1";
import { IItemCollection } from "../interfaces/IItemCollection";
import IEnableWhen from "../interfaces/IEnableWhen";
import { EnableBehavior, AND } from "../constants/enableBehavior";

@observable
export class Item implements IItem {
    id!: string;
    text?: string;
    type: ITEM_TYPE = DISPLAY;
    parent?: IItemCollection<IItem>;
    position!: number;
    required?: boolean;
    @observableProperty
    enableWhen: IEnableWhen[] = [];
    enableWhenIds: any = {};
    enableBehavior: EnableBehavior = AND;
    enableWhenIdMap: Map<string, boolean> = new Map();

    constructor(item: Partial<Omit<IItem, 'type'>> | undefined, parent?: IItemCollection<IItem>) {
        Object.assign(this, { id: uuid() }, item);
        this.parent = parent;
        item && item.enableWhen && item.enableWhen.forEach(enableWhen => {
            this.enableWhenIdMap.set(enableWhen.id, true);
        })
        Object.defineProperty(Item.prototype, 'position', {
            enumerable: true,
            configurable: true,
            get() {
                if (!this.parent) return;
                let position;
                this.parent.items.find((item: Item, index: number) => {
                    if (item.id === this.id) {
                        position = index;
                        return true;
                    }
                })
                return position;
            }
        })
    }

    addEnableWhen(enableWhen: IEnableWhen) {
        if (this.enableWhenIdMap.has(enableWhen.id)) return;
        this.enableWhen.push(enableWhen);
        this.enableWhenIdMap.set(enableWhen.id, true);
    }

    removeEnableWhen(enableWhen: IEnableWhen) {
        let position;
        this.enableWhen.find((EW, i) => {
            if (EW.id === enableWhen.id) {
                position = i;
                return true;
            }
        })
        if (position !== undefined) {
            this.enableWhen.splice(position, 1);
            this.enableWhenIdMap.delete(enableWhen.id);
        }
    }

    updateItem(item: IItem) {
        const obs = getObservable(item);
        obs && obs.mute();
        this.id = item.id;
        this.text = item.text;
        this.required = !!item.required;
        obs && obs.unmute();
        obs && obs.emitChange();
    }

    remove() {
        this.parent && this.parent.removeItem(this);
    }

    replace(newItem: Item) {
        this.parent && this.parent.replaceItem(this, newItem);
    }
}

export default Item;