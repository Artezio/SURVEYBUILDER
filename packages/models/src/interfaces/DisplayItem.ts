import { QUESTIONNAIRE_ITEM_TYPES } from '../enums';

export interface DisplayItem {
    id: string;
    type: QUESTIONNAIRE_ITEM_TYPES;
    text?: string;
}

export default DisplayItem;