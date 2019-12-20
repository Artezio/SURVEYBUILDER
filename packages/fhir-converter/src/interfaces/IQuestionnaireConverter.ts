import * as Models from '@artezio/models';
import FHIRQuestionnaire from './FHIRModels/Questionnaire';

export interface IQuestionnaireConverter {
    toModel(questionnaire: FHIRQuestionnaire): Models.IQuestionnaire;
    fromModel(questionnaire: Models.IQuestionnaire): FHIRQuestionnaire;
}