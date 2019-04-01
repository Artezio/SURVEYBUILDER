import { IQuestionnaire, IItem, observable, TextItem, Item } from "..";
import ITextItem from "../interfaces/ITextItem";
import uuid from 'uuid/v1';
import IGroupItem from "../interfaces/IGroupItem";
import { GroupItem } from "./groupItem";


@observable
export class Questionnaire implements IQuestionnaire {
    id: string;
    description?: string;
    items!: IItem[];
    title?: string;

    constructor(questionnaire: Partial<IQuestionnaire> | undefined = {}) {
        this.id = questionnaire.id || uuid();
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

    addTextItem(item?: ITextItem) {
        if ((item && this.items.every(itm => itm.id !== item.id)) || !item) {
            this.items = [...this.items, new TextItem(item, this)];
        }
    }

    addItem(item?: IItem) {
        if ((item && this.items.every(itm => itm.id !== item.id)) || !item) {
            this.items = [...this.items, new Item(item, this)];
        }
    }

    addGroupItem(item?: IGroupItem) {
        if ((item && this.items.every(itm => itm.id !== item.id)) || !item) {
            this.items = [...this.items, new GroupItem(item, this)];
        }
    }

    removeItem(item: IItem) {
        this.items = this.items.filter(x => x.id !== item.id);
    }
}

export default Questionnaire;