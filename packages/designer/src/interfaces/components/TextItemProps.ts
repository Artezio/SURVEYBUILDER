import * as Models from '@art-forms/models';
import { removeItem } from '../../actions/item';
import { updateTextItem } from '../../actions/textItem';


export interface TextItemOwnProps {
    item: Models.TextItem;
}

export interface TextItemActions {
    removeItem: typeof removeItem;
    updateTextItem: typeof updateTextItem;
}

export type TextItemProps = TextItemOwnProps & AssignToActions<TextItemActions>;

export default TextItemProps;