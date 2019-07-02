import { EnableWhenOperator } from "../constants/enableWhenOperators";

export interface IEnableWhen {
    id: string;
    questionId?: string;
    operator: EnableWhenOperator;
    answer?: any;
}

export default IEnableWhen;