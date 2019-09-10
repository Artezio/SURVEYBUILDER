import { IQuestionnaire, Item } from "..";
import uuid from 'uuid/v1';
import { observable, observableProperty } from '@art-forms/observable';
import ItemByTypeFactory from "../factories/itemByTypeFactory";
import { getObservable } from "@art-forms/observable";

@observable
export class Questionnaire implements IQuestionnaire {
    id!: string;
    description?: string;
    @observableProperty
    items!: Item[];
    title?: string;
    itemIdMap: Map<string, boolean> = new Map();
    itemByTypeFactory = new ItemByTypeFactory(this);

    constructor(questionnaire?: Partial<IQuestionnaire>) {
        this.id = questionnaire && questionnaire.id || uuid();
        this.description = questionnaire && questionnaire.description;
        this.title = questionnaire && questionnaire.title;
        this._completeItems(questionnaire);
        this.items.forEach(item => this.itemIdMap.set(item.id, true));
    }

    private _completeItems(questionnaire?: Partial<IQuestionnaire>) {
        if (questionnaire && questionnaire.items) {
            this.items = questionnaire.items.map(item => this.itemByTypeFactory.createItem(item));
        } else {
            this.items = [];
        }
    }

    updateQuestionnaire(questionnaire: IQuestionnaire) {
        const obs = getObservable(this);
        obs && obs.mute();
        this.description = questionnaire.description;
        this.title = questionnaire.title;
        this.id = questionnaire.id;
        obs && obs.unmute();
        obs && obs.emitChange();
    }

    addItem(item: Item, index?: number) {
        if (this.itemIdMap.has(item.id)) return;
        item.parent = this;
        index = index === undefined ? this.items.length : index;
        this.items.splice(index, 0, item);
        this.itemIdMap.set(item.id, true);
    }

    removeItem(item: Item) {
        this.items.splice(item.position, 1);
        this.itemIdMap.delete(item.id);
    }

    replaceItem(oldItem: Item, newItem: Item) {
        const position = oldItem.position;
        this.items.splice(position, 1, newItem);
        this.itemIdMap.delete(oldItem.id);
        this.itemIdMap.set(newItem.id, true);
    }
}

export default Questionnaire;