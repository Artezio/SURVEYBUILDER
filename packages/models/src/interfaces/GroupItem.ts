import { QUESTIONNAIRE_ITEM_TYPES } from '../enums';
import { Item } from './Item';

export interface GroupItem extends Item {
    items: Item[];
    type: QUESTIONNAIRE_ITEM_TYPES.GROUP;
}

export default GroupItem;