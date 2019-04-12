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

    addItem(item: Item) {
        if (this.items.every(itm => itm.id !== item.id)) {
            this.items = [...this.items, item]
        }
    }

    removeItem(item: IItem) {
        this.items = this.items.filter(x => x.id !== item.id);
    }
}

export default Questionnaire;