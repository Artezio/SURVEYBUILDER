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

    moveItem(oldItem: Item, newPlace: number) {
        if (newPlace >= this.items.length) return;
        let position;
        const item = this.items.find((item, index) => {
            if (item.id === oldItem.id) {
                position = index;
                return true;
            }
            return false;
        })
        if (position === undefined || item === undefined || position === newPlace) return;
        this.items.splice(position, 1);
        this.items.splice(newPlace, 0, item);
        this.items = [...this.items];
    }
}

export default Questionnaire;