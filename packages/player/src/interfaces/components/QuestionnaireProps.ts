import * as Models from '@art-forms/models';
import { TextItemActions } from './TextItemProps';


export interface QuestionnaireState {
    questionnaire?: Models.Questionnaire;
    className?: string;
}

export interface QuestionnaireActions extends TextItemActions {
    createQuestionnaireResponse(questionnaireResponse?: Partial<Models.QuestionnaireResponse>): void;
}

export type QuestionnaireProps = QuestionnaireState & AssignToActions<QuestionnaireActions>;