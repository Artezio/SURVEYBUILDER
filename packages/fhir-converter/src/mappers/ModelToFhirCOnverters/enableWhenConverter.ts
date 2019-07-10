import * as Models from '@art-forms/models';
import { FHIREnableWhen } from '../../interfaces/FHIRModels/EnableWhen';
import mapOperatorFromModel from './operatorConverter';

export const mapEnableWhenFromModel = (enableWhen: Models.IEnableWhen): FHIREnableWhen => {
    const mappedEnableWhen: FHIREnableWhen = {
        id: enableWhen.id,
        question: enableWhen.questionId,
        answer: enableWhen.answer,
        operator: mapOperatorFromModel(enableWhen.operator)
    }
    return mappedEnableWhen;
}

export default mapEnableWhenFromModel;