import * as Models from '@art-forms/models';


export interface TextItemState {
    item: Models.ITextItem;
}

export interface TextItemActions {
    addQuestionnaireResponseItem(item?: Partial<Models.IQuestionnaireResponseItem>): void;
    updateQuestionnaireResponseItem(item: Partial<Models.IQuestionnaireResponseItem>): void;
}

export type TextItemProps = TextItemState & AssignToActions<TextItemActions>;