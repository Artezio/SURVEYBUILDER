import * as Models from '@art-forms/models';
import responseItem from '../responseItem';

export const mapAnswerFromModel = (answer: Models.IAnswer<any>): any => {
    const newAnswer = {
        id: answer.id,
        valueString: answer.value,
        item: answer.items && answer.items.map(item => responseItem.fromModel(item))
    }

    return newAnswer;
}

export default mapAnswerFromModel;