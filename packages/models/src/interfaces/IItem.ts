import { QUESTIONNAIRE_ITEM_TYPES } from "../constants";


export interface IItem {
    id: string;
    type: QUESTIONNAIRE_ITEM_TYPES;
    text?: string;
}