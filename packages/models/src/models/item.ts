import { IItem, ITEM_TYPE, DISPLAY } from "..";
import { observable } from '@art-forms/observable';
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
    enableWhen: IEnableWhen[] = [];
    enableBehavior: EnableBehavior = AND;

    constructor(item: Partial<Omit<IItem, 'type'>> | undefined, parent?: IItemCollection<IItem>) {
        Object.assign(this, { id: uuid() }, item);
        this.parent = parent;
        Object.defineProperty((this as any).__proto__, 'position', {
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
                    return false;
                })
                this.parent.items
                return position;
            }
        })
    }

    updateItem(item: IItem) {
        this.id = item.id;
        this.text = item.text;
        this.required = !!item.required;
    }

    remove() {
        this.parent && this.parent.removeItem(this);
    }

    replace(newItem: Item) {
        this.parent && this.parent.replaceItem(this, newItem);
    }
}

export default Item;