import * as Models from '@art-forms/models';
import * as FHIREnableWhenOperator from '../../constants/FHIREnableWhenOperator';

export const operatorFromModelConverter = (operator: Models.EnableWhenOperator): FHIREnableWhenOperator.FHIREnableWhenOperator => {
    switch (operator) {
        case Models.EXISTS: return FHIREnableWhenOperator.EXISTS;
        case Models.EQUAL: return FHIREnableWhenOperator.EQUAL;
        case Models.LESS: return FHIREnableWhenOperator.LESS;
        case Models.LESS_OR_EQUAL: return FHIREnableWhenOperator.LESS_OR_EQUAL;
        case Models.MORE: return FHIREnableWhenOperator.MORE;
        case Models.MORE_OR_EQUAL: return FHIREnableWhenOperator.MORE_OR_EQUAL;
        case Models.NOT_EQUAL: return FHIREnableWhenOperator.NOT_EQUAL;
        default: return FHIREnableWhenOperator.EQUAL;
    }
}

export default operatorFromModelConverter;