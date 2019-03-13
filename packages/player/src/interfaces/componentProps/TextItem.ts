import * as Models from '@art-forms/models';
import { addQuestionnaireResponseItem } from '../../actions/questionnaireResponse';
import { updateQuestionnaireResponseItem } from '../../actions/questionnaireResponseItem';


export interface TextItemState {
    item: Models.TextItem;
}

export interface TextItemActions {
    addQuestionnaireResponseItem: typeof addQuestionnaireResponseItem;
    updateQuestionnaireResponseItem: typeof updateQuestionnaireResponseItem;
}

export type TextItemProps = TextItemState & AssignToActions<TextItemActions>;