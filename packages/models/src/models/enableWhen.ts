import IEnableWhen from "../interfaces/IEnableWhen";
import { EnableWhenOperator } from "../constants/enableWhenOperators";
import uuid from 'uuid/v1';
import QuestionnaireResponseItem from "./questionnaireResponseItem";

export class EnableWhen implements IEnableWhen {
    id!: string;
    questionId!: string;
    operator!: EnableWhenOperator;
    answer?: any;
    questionItem?: QuestionnaireResponseItem;

    constructor(enableWhen: Omit<IEnableWhen, 'id'>) {
        Object.assign(this, { id: uuid() }, enableWhen);
    }

    findResponseItemById(id: string): QuestionnaireResponseItem {
        return {} as any;
    }

    decideEnabling() {
        const responseItem = this.questionItem && this.findResponseItemById(this.questionId);
        // responseItem.find
    }

}