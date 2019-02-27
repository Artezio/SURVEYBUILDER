import { Item } from './Item';
import { QUESTIONNAIRE_ITEM_TYPES } from '../enums';

export interface DisplayItem extends Item {
    text?: string;
    type: QUESTIONNAIRE_ITEM_TYPES.DISPLAY;
}

export default DisplayItem;