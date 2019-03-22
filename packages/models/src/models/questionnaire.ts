import { IQuestionnaire, IItem, observable } from "..";
// import uuid from "uuid/v1";


@observable
export class Questionnaire implements IQuestionnaire {
    id: string;
    description?: string;
    items: IItem[];
    title?: string;

    constructor(questionnaire: Partial<IQuestionnaire> | undefined = {}) {
        this.id = questionnaire.id || 'uuid()';
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

    addItem(item: IItem) {
        this.items.push(item);
    }

    removeItem(item: IItem) {
        this.items = this.items.filter(x => x !== item);
    }
}

export default Questionnaire;