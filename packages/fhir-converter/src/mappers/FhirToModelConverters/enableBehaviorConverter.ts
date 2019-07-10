import * as Models from '@art-forms/models';
import * as FHIREnableBehavior from '../../constants/FHIREnableBehavior';

export const mapEnableBehaviorToModel = (enableBehavior: FHIREnableBehavior.FHIREnableBehavior): Models.EnableBehavior => {
    switch (enableBehavior) {
        case FHIREnableBehavior.ALL: return Models.AND;
        case FHIREnableBehavior.ANY: return Models.OR;
        default: return Models.AND;
    }
}

export default mapEnableBehaviorToModel;