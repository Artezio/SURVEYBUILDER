import * as Models from '@art-forms/models';
import { TextItemActions } from './TextItemProps';


export interface QuestionnaireState {
    questionnaire?: Models.IQuestionnaire;
    className?: string;
}

export interface QuestionnaireActions extends TextItemActions {
    createQuestionnaireResponse(questionnaireResponse?: Partial<Models.IQuestionnaireResponse>): void;
}

export type QuestionnaireProps = QuestionnaireState & AssignToActions<QuestionnaireActions>;