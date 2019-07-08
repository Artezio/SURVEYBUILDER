import { IQuestionnaire, IItem, Item } from "..";
import uuid from 'uuid/v1';
import { observable, observableProperty } from '@art-forms/observable';

@observable
export class Questionnaire implements IQuestionnaire {
    id!: string;
    description?: string;
    @observableProperty
    items!: Item[];
    title?: string;
    itemIdMap: Map<string, boolean> = new Map();

    constructor(questionnaire?: Partial<IQuestionnaire>) {
        Object.assign(this, { id: uuid(), items: [] }, questionnaire);
        this.items.forEach(item => this.itemIdMap.set(item.id, true));
    }

    updateQuestionnaire(questionnaire: IQuestionnaire) {
        Object.assign(this, questionnaire);
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

export default Questionnaire;