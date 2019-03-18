import * as Models from '@art-forms/models';
import { updateQuestionnaireResponseItem } from '../../actions/questionnaireResponseItem';


export interface TextItemState {
    item: Models.TextItem;
}

export interface TextItemActions {
    addQuestionnaireResponseItem(item?: Partial<Models.QuestionnaireResponseItem>): void;
    updateQuestionnaireResponseItem(item: Partial<Models.QuestionnaireResponseItem>): void;
}

export type TextItemProps = TextItemState & AssignToActions<TextItemActions>;