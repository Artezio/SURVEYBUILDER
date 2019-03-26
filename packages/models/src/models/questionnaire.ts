import { IQuestionnaire, IItem, observable, TextItem, Item } from "..";
import ITextItem from "../interfaces/ITextItem";
import uuid from 'uuid/v1';


@observable
export class Questionnaire implements IQuestionnaire {
    id: string;
    description?: string;
    items: IItem[];
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

    addTextItem(textItem?: ITextItem) {
        this.items = [...this.items, new TextItem(textItem, { ...this })];
    }

    addItem(item?: IItem) {
        this.items = [...this.items, new Item(item, { ...this })];
    }

    removeItem(item?: IItem) {
        this.items = this.items.filter(x => item && x.id !== item.id);
    }
}

export default Questionnaire;