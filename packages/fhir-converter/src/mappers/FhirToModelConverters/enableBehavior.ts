import * as Models from '@art-forms/models';
import { FHIREnableBehavior, ALL, ANY } from '../../constants/FHIREnableBehavior';

export const enableBehaviorToModelConverter = (enableBehavior: FHIREnableBehavior): Models.EnableBehavior => {
    switch (enableBehavior) {
        case ALL: return Models.AND;
        case ANY: return Models.OR;
        default: return Models.AND;
    }
}

export default enableBehaviorToModelConverter;