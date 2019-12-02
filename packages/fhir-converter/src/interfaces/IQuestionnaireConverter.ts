import * as Models from '@surveybuilder/models';
import FHIRQuestionnaire from './FHIRModels/Questionnaire';

export interface IQuestionnaireConverter {
    toModel(questionnaire: FHIRQuestionnaire): Models.IQuestionnaire;
    fromModel(questionnaire: Models.IQuestionnaire): FHIRQuestionnaire;
}