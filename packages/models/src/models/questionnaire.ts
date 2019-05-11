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

    constructor(questionnaire?: Partial<IQuestionnaire>) {
        Object.assign(this, { id: uuid(), items: [] }, questionnaire);
    }

    updateQuestionnaire(questionnaire: IQuestionnaire) {
        Object.assign(this, questionnaire);
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

    removeItem(item: IItem) {
        this.items = this.items.filter(x => x.id !== item.id);
    }

    replaceItem(oldItem: Item, newItem: Item) {
        let position;
        this.items.forEach((item, index) => {
            if (item.id === oldItem.id) {
                position = index;
            }
        })
        position !== undefined && this.items.splice(position, 1, newItem);
    }
}

export default Questionnaire;