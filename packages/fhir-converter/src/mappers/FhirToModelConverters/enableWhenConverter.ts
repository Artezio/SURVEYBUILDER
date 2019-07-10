import * as Models from '@art-forms/models';
import { FHIREnableWhen } from '../../interfaces/FHIRModels/EnableWhen';
import mapOperatorToModel from './operatorConverter';

export const mapEnableWhenToModel = (enableWhen: FHIREnableWhen): Models.IEnableWhen => {
    const mappedEnableWhen: Models.IEnableWhen = {
        id: enableWhen.id,
        questionId: enableWhen.question,
        answer: enableWhen.answer,
        operator: mapOperatorToModel(enableWhen.operator)
    }
    return mappedEnableWhen;
}

export default mapEnableWhenToModel;