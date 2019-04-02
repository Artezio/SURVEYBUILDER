import { IQuestionnaire, IItem, observable, TextItem, Item, IQuestionItem } from "..";
import uuid from 'uuid/v1';


@observable
export class Questionnaire implements IQuestionnaire {
    id: string;
    description?: string;
    items: IItem[];
    title?: string;

    constructor(questionnaire: Omit<IQuestionnaire, 'id'> | undefined = {}) {
        this.id = uuid();
        this.description = questionnaire.description;
        this.title = questionnaire.title;
        this.items = questionnaire.items || [];
    }

    updateQuestionnaire(questionnaire: IQuestionnaire) {
        this.id = questionnaire.id;
        this.description = questionnaire.description;
        this.title = questionnaire.title;
        this.items = questionnaire.items || [];
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