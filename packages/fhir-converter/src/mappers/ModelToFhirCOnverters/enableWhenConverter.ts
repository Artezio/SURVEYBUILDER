import * as Models from '@art-forms/models';
import mapOperatorFromModel from './operatorConverter';

export const mapEnableWhenFromModel = (enableWhen: Models.IEnableWhen): any => {
    const mappedEnableWhen: any = {
        id: enableWhen.id,
        question: enableWhen.questionId,
        answerString: enableWhen.answer,
        operator: mapOperatorFromModel(enableWhen.operator)
    }
    return mappedEnableWhen;
}

export default mapEnableWhenFromModel;