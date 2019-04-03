import IQuestionItem from "../../interfaces/questionItems/IQuestionItem";
import { Item } from "../..";
import { QUESTION, ANSWER_TYPE } from "../../constants/itemTypes";
import { ICollection } from "../../interfaces/ICollection";

export abstract class QuestionItem<T> extends Item implements IQuestionItem<T> {
    initialValue?: T;
    type!: ANSWER_TYPE;

    constructor(item: Partial<Omit<IQuestionItem<T>, 'type'>> | undefined, parent?: ICollection<IQuestionItem<T>>) {
        super(item, parent);
        this.initialValue = item && item.initialValue;
    }
}

export default QuestionItem;