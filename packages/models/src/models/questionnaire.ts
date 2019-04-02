import { IQuestionnaire, IItem, observable, TextItem, Item, IQuestionItem } from "..";
import ITextItem from "../interfaces/questionItems/ITextItem";
import uuid from 'uuid/v1';
import IGroupItem from "../interfaces/IGroupItem";
import { GroupItem } from "./groupItem";
import { itemFactory } from "../factories/itemFactory";


@observable
export class Questionnaire implements IQuestionnaire {
    id: string;
    description?: string;
    items!: IItem[];
    title?: string;

    constructor(questionnaire: Omit<IQuestionnaire, 'id'> | undefined = {}) {
        this.id = uuid();
        this.description = questionnaire.description;
        this.title = questionnaire.title;
        this.items = questionnaire.items || [];
    }

    setDescription(description: string) {
        this.description = description;
    }

    setTitle(title: string) {
        this.title = title;
    }

    updateQuestionnaire(questionnaire: IQuestionnaire) {
        this.id = questionnaire.id;
        this.description = questionnaire.description;
        this.title = questionnaire.title;
        this.items = questionnaire.items || [];
    }

    addTextItem(item?: Partial<ITextItem>) {
        if ((item && this.items.every(itm => itm.id !== item.id)) || !item) {
            this.items = [...this.items, new TextItem(item, this)];
        }
    }

    addItem(item?: Partial<IItem>) {
        if ((item && this.items.every(itm => itm.id !== item.id)) || !item) {
            this.items = [...this.items, new Item(item, this)];
        }
    }

    addGroupItem(item?: Partial<IGroupItem>) {
        if ((item && this.items.every(itm => itm.id !== item.id)) || !item) {
            this.items = [...this.items, new GroupItem(item, this)];
        }
    }

    removeItem(item: IItem) {
        this.items = this.items.filter(x => x.id !== item.id);
    }
}

export default Questionnaire;