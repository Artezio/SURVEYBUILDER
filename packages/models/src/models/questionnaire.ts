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
    }

    updateQuestionnaire(questionnaire: IQuestionnaire) {
        Object.assign(this, questionnaire);
    }

    addItem(item: Item, index?: number) {
        item.parent = this;
        index = index || this.items.length;
        this.items.splice(index, 0, item);
    }

    removeItem(item: Item) {
        this.items.splice(item.position, 1);
        // this.items = this.items.filter(x => x.id !== item.id);
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

export default Questionnaire;