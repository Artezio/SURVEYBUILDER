import * as Models from '@art-forms/models';
import operatorFromModelConverter from './operator';

export const enableWhenFromModelConverter = (enableWhen: Models.IEnableWhen): any => {
    const mappedEnableWhen: any = {
        id: enableWhen.id,
        question: enableWhen.questionId,
        answerString: enableWhen.answer,
        operator: operatorFromModelConverter(enableWhen.operator)
    }
    return mappedEnableWhen;
}

export default enableWhenFromModelConverter;