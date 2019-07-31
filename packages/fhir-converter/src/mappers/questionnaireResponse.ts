import * as Models from '@art-forms/models';
import QuestionnaireResponse from "../interfaces/FHIRModels/QuestionnaireResponse";
import { responseItem } from './responseItem';

export const questionnaireResponseMapper = {
    toModel(questionnaireResponse: QuestionnaireResponse): Models.IQuestionnaireResponse {
        const newQuestionnaireResponse: Models.IQuestionnaireResponse = {
            id: questionnaireResponse.id,
            questionnaireId: questionnaireResponse.resourceType.slice(14), //// Questionnaire/ = 14 symbols
            items: questionnaireResponse.item.map(item => responseItem.toModel(item))
        }
        return newQuestionnaireResponse;
    },
    fromModel(questionnaireResponse: Models.IQuestionnaireResponse): QuestionnaireResponse {
        const newQuestionnaireResponse: QuestionnaireResponse = {
            id: questionnaireResponse.id,
            questionnaire: {
                reference: questionnaireResponse.questionnaireId
            },
            resourceType: 'QuestionnaireResponse',
            item: questionnaireResponse.items && questionnaireResponse.items.map(item => responseItem.fromModel(item))
        }
        return newQuestionnaireResponse;
    }
}

export default questionnaireResponseMapper;