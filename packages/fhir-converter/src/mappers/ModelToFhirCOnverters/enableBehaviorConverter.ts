import * as Models from '@art-forms/models';
import * as FHIREnableBehavior from '../../constants/FHIREnableBehavior';

export const mapEnableBehaviorFromModel = (enableBehavior: Models.EnableBehavior): FHIREnableBehavior.FHIREnableBehavior => {
    switch (enableBehavior) {
        case Models.AND: return FHIREnableBehavior.ALL;
        case Models.OR: return FHIREnableBehavior.ANY;
        default: return FHIREnableBehavior.ALL;
    }
}

export default mapEnableBehaviorFromModel;