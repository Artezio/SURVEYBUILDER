import * as Models from '@art-forms/models';
import { ItemActions } from './ItemProps';


export interface TextItemOwnProps {
    item: Models.TextItem;
}

export interface TextItemActions extends ItemActions {

}

export type TextItemProps = TextItemOwnProps & AssignToActions<TextItemActions>;

export default TextItemProps;