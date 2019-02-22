import { DisplayItem } from '@art-forms/models';

export interface TextItemActions {
    removeItem: (item: DisplayItem) => void;
}

export default TextItemActions;