import * as Models from '@art-forms/models';
import { TextItemActions } from './TextItemProps';
import { createQuestionnaireResponse } from '../../actions/questionnaireResponse';


export interface QuestionnaireState {
    questionnaire?: Models.Questionnaire;
}

export interface QuestionnaireActions extends TextItemActions {
    createQuestionnaireResponse: typeof createQuestionnaireResponse;
}

export type QuestionnaireProps = QuestionnaireState & AssignToActions<QuestionnaireActions>;