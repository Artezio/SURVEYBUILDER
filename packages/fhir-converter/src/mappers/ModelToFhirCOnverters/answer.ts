import * as Models from '@art-forms/models';
import questionnaireResponseItemConverter from '../questionnaireResponseItem';

export const answerFromModelConverter = (answer: Models.IAnswer<any>): any => {
    const newAnswer = {
        id: answer.id,
        valueString: answer.value,
        item: answer.items && answer.items.map(item => questionnaireResponseItemConverter.fromModel(item))
    }

    return newAnswer;
}

export default answerFromModelConverter;