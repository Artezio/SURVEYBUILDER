import { observable, observableProperty, getObservable } from '@surveybuilder/observable';
import uuid from "uuid/v1";
import { IItemCollection } from "../interfaces/IItemCollection";
import { EnableBehavior, AND } from "../constants/enableBehavior";
import EnableWhenFactory from '../factories/enableWhenFactory';
import IItem from '../interfaces/IItem';
import { ITEM_TYPE, DISPLAY } from '../constants/itemTypes';
import EnableWhen from './enableWhen';

@observable
export class Item implements IItem {
    id!: string;
    text?: string;
    type: ITEM_TYPE = DISPLAY;
    parent?: IItemCollection;
    position!: number;
    required?: boolean;
    @observableProperty
    enableWhen: EnableWhen[];
    enableBehavior: EnableBehavior;
    enableWhenIdMap: Map<string, boolean> = new Map();
    enableWhenFactory: EnableWhenFactory = new EnableWhenFactory(this);

    constructor(item: Partial<Omit<IItem, 'type'>> | undefined, parent?: IItemCollection) {
        this.id = item && item.id || uuid();
        this.required = !!item && !!item.required;
        this.text = item && item.text;
        this.enableWhen = (item && item.enableWhen) ? item.enableWhen.map(enableWhen => this.enableWhenFactory.createEnableWhen(enableWhen)) : [];
        this.enableBehavior = (item && item.enableBehavior) ? item.enableBehavior : AND;
        this.parent = parent;
        this.enableWhen.forEach(enableWhen => this.enableWhenIdMap.set(enableWhen.id, true));
        this.definePrototypeProperties();
    }

    private definePrototypeProperties() {
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

    addSiblingItemAfter(item: Item) {
        this.parent && this.parent.addDescendantItemAfter(this, item);
    }

    addEnableWhen(enableWhen: EnableWhen) {
        if (this.enableWhenIdMap.has(enableWhen.id)) return;
        this.enableWhen.push(enableWhen);
        this.enableWhenIdMap.set(enableWhen.id, true);
    }

    removeEnableWhen(enableWhen: EnableWhen) {
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