import * as Models from '@art-forms/models';
import mapOperatorToModel from './operatorConverter';

export const mapEnableWhenToModel = (enableWhen: any): Models.IEnableWhen => {
    const mappedEnableWhen: Models.IEnableWhen = {
        id: enableWhen.id,
        questionId: enableWhen.question,
        answer: enableWhen.answerBoolean || enableWhen.answerDecimal || enableWhen.answerInteger || enableWhen.answerDate || enableWhen.answerDateTime || enableWhen.answerTime || enableWhen.answerString,
        operator: mapOperatorToModel(enableWhen.operator)
    }
    return mappedEnableWhen;
}

export default mapEnableWhenToModel;