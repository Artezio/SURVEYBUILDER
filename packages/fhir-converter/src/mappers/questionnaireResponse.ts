import * as Models from '@surveybuilder/models';
import QuestionnaireResponse from "../interfaces/FHIRModels/QuestionnaireResponse";
import { questionnaireResponseItemConverter } from './questionnaireResponseItem';
import { IQuestionnaireResponseConverter } from '../interfaces/IQuestionnaireResponseConverter';

export const questionnaireResponseConverter: IQuestionnaireResponseConverter = {
    toModel(questionnaireResponse: QuestionnaireResponse): Models.IQuestionnaireResponse {
        const newQuestionnaireResponse: Models.IQuestionnaireResponse = {
            id: questionnaireResponse.id,
            questionnaireId: questionnaireResponse.resourceType.slice(14), //// Questionnaire/ = 14 symbols
            items: questionnaireResponse.item.map(item => questionnaireResponseItemConverter.toModel(item))
        }
        return newQuestionnaireResponse;
    },
    fromModel(questionnaireResponse: Models.IQuestionnaireResponse): QuestionnaireResponse {
        const newQuestionnaireResponse: QuestionnaireResponse = {
            id: questionnaireResponse.id,
            questionnaire: `Questionnaire/${questionnaireResponse.questionnaireId}`,
            resourceType: 'QuestionnaireResponse',
            item: questionnaireResponse.items && questionnaireResponse.items.map(item => questionnaireResponseItemConverter.fromModel(item))
        }
        return newQuestionnaireResponse;
    }
}

export default questionnaireResponseConverter;