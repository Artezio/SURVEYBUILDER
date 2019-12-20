import * as Models from '@artezio/models';
import QuestionnaireResponse from './FHIRModels/QuestionnaireResponse';

export interface IQuestionnaireResponseConverter {
    toModel(questionnaireResponse: QuestionnaireResponse): Models.IQuestionnaireResponse;
    fromModel(questionnaireResponse: Models.IQuestionnaireResponse): QuestionnaireResponse;
}