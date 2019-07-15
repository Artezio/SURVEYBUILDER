import * as Models from '@art-forms/models';
import ResponseItem from '../interfaces/FHIRModels/ResponseItem';
import mapAnswerToModel from './FhirToModelConverters/answerConverter';
import mapAnswerFromModel from './ModelToFhirCOnverters/answerConverter';

export const responseItem = {
    toModel(item: ResponseItem): Models.IQuestionnaireResponseItem {
        const newQuestionnaireResponseItem: Models.IQuestionnaireResponseItem = {
            id: item.id,
            text: item.text,
            questionId: item.linkedId,
            items: item.item && item.item.map(itm => responseItem.toModel(itm)),
            answers: item.answer && item.answer.map(answer => mapAnswerToModel(answer))
        }
        return newQuestionnaireResponseItem;
    },
    fromModel(item: Models.IQuestionnaireResponseItem): ResponseItem {
        const newQuestionnaireResponseItem: ResponseItem = {
            id: item.id,
            linkedId: item.questionId,
            text: item.text,
            answer: item.answers && item.answers.map(answer => mapAnswerFromModel(answer)),
            item: item.items && item.items.map(item => responseItem.fromModel(item))
        }
        return newQuestionnaireResponseItem;
    }
}

export default responseItem;