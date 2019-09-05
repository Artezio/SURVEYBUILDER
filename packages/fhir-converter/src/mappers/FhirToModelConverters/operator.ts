import * as Models from '@art-forms/models';
import * as FHIREnableWhenOperator from '../../constants/FHIREnableWhenOperator';

export const operatorToModelConverter = (operator: FHIREnableWhenOperator.FHIREnableWhenOperator): Models.EnableWhenOperator => {
    switch (operator) {
        case FHIREnableWhenOperator.EXISTS: return Models.EXISTS;
        case FHIREnableWhenOperator.EQUAL: return Models.EQUAL;
        case FHIREnableWhenOperator.LESS: return Models.LESS;
        case FHIREnableWhenOperator.LESS_OR_EQUAL: return Models.LESS_OR_EQUAL;
        case FHIREnableWhenOperator.MORE: return Models.MORE;
        case FHIREnableWhenOperator.MORE_OR_EQUAL: return Models.MORE_OR_EQUAL;
        case FHIREnableWhenOperator.NOT_EQUAL: return Models.NOT_EQUAL;
        default: return Models.EQUAL;
    }
}

export default operatorToModelConverter;