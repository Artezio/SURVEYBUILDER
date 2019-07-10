import { FHIREnableWhenOperator } from '../../constants/FHIREnableWhenOperator';

export interface FHIREnableWhen {
    id: string;
    question: string;
    operator: FHIREnableWhenOperator;
    answer: any;
}

export default FHIREnableWhen;