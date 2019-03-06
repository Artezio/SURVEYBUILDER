import * as Models from '@art-forms/models';


export interface TextItemState {
    item: Models.TextItem;
}

export interface TextItemActions {

}

export type TextItemProps = TextItemState & TextItemActions;