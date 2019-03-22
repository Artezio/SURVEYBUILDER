import * as Models from '@art-forms/models';


export interface TextItemOwnProps {
    item: Models.ITextItem;
}

export interface TextItemActions {
    removeItem(item: Models.IItem): void;
    updateTextItem(item: Models.ITextItem): void;
}

export type TextItemProps = TextItemOwnProps & AssignToActions<TextItemActions>;

export default TextItemProps;