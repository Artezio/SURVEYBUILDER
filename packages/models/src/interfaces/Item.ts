import { QUESTIONNAIRE_ITEM_TYPES } from "../enums";


export interface Item {
    id: string;
    type: QUESTIONNAIRE_ITEM_TYPES;
    text?: string;
}