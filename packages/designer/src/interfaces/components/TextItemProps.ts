import * as Models from '@art-forms/models';


export interface TextItemOwnProps {
    item: Models.TextItem;
}

export interface TextItemActions {
    removeItem(item: Models.Item): void;
    updateTextItem(item: Models.TextItem): void;
}

export type TextItemProps = TextItemOwnProps & AssignToActions<TextItemActions>;

export default TextItemProps;