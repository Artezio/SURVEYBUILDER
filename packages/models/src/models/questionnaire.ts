import { IQuestionnaire, IItem, observable, Item } from "..";
import uuid from 'uuid/v1';


@observable
export class Questionnaire implements IQuestionnaire {
    id!: string;
    description?: string;
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
            this.items = [...this.items]
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
        this.items = [...this.items];
    }
}

export default Questionnaire;