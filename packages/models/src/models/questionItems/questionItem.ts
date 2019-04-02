import IQuestionItem from "../../interfaces/questionItems/IQuestionItem";
import { Item } from "../..";
import { ANSWER_TYPE } from "../../constants/answerTypes";
import { QUESTION } from "../../constants/itemTypes";

export abstract class QuestionItem extends Item implements IQuestionItem<any> {
    initialValue: any;
    answerType!: ANSWER_TYPE;
    type: QUESTION;

    constructor(item: Partial<IQuestionItem<any>>) {
        super(item);
        this.type = QUESTION;
    }

    updateItem() {
        // super.updateItem();
    }
}