import DisplayItem from './DisplayItem';
import { QUESTIONNAIRE_ITEM_TYPES } from '../enums';

export interface GroupItem extends DisplayItem {
    items: DisplayItem[];
    type: QUESTIONNAIRE_ITEM_TYPES.GROUP;
}

export default GroupItem;