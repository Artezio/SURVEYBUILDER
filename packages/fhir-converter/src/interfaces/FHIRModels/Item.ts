import { FHIRItemType } from '../../constants/FHIRItemType';
import FHIREnableWhen from './EnableWhen';
import { FHIREnableBehavior } from '../../constants/FHIREnableBehavior';
import FHIRInitialAnswer from './InitialAnswer';

export interface FHIRItem {
    linkId: string;
    text?: string;
    type: FHIRItemType;
    required?: boolean;
    item?: FHIRItem[];
    enableWhen?: FHIREnableWhen[];
    enableBehavior?: FHIREnableBehavior;
    initial?: FHIRInitialAnswer[];
    repeats?: boolean;
    answerOption?: any[];
}

export default FHIRItem;