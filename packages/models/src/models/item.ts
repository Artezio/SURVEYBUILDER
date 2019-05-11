import { IItem, ITEM_TYPE, DISPLAY } from "..";
import { observable } from "../decorators/temporaryObservable";
import uuid from "uuid/v1";
import { IItemCollection } from "../interfaces/IItemCollection";

@observable
export class Item implements IItem {
    id!: string;
    text?: string;
    type: ITEM_TYPE = DISPLAY;
    parent?: IItemCollection<IItem>;
    position!: number;

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
            },
            set() {

            }
        })
    }

    updateItem(item: IItem) {
        this.id = item.id;
        this.text = item.text;
    }

    remove() {
        this.parent && this.parent.removeItem(this);
    }

    replace(newItem: Item) {
        this.parent && this.parent.replaceItem(this, newItem);
    }
}

export default Item;