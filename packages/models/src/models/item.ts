import { IItem, ITEM_TYPE, DISPLAY } from "..";
import { observable, observableProperty } from '@art-forms/observable';
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

    constructor(item: Partial<Omit<IItem, 'type'>> | undefined, parent?: IItemCollection<IItem>) {
        Object.assign(this, { id: uuid() }, item);
        this.parent = parent;
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
        ///check existing logic to be implemented!!!
        this.enableWhen.push(enableWhen);
    }

    removeEnableWhen(enableWhen: IEnableWhen) {
        let position;
        this.enableWhen.find((EW, i) => {
            if (EW.id === enableWhen.id) {
                position = i;
                return true;
            }
        })
        position !== undefined && this.enableWhen.splice(position, 1);
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