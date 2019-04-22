import IQuestionItem from "../../interfaces/questionItems/IQuestionItem";
import { Item } from "../..";
import { QUESTION_TYPE } from "../../constants/itemTypes";
import { ICollection } from "../../interfaces/ICollection";
import { IItem } from "../../interfaces/IItem";

export abstract class QuestionItem<T> extends Item implements IQuestionItem<T> {
    initialValue?: T;
    type!: QUESTION_TYPE;
    repeats: boolean;

    constructor(item: Partial<Omit<IQuestionItem<T>, 'type'>> | undefined, parent?: ICollection<IQuestionItem<T>>) {
        super(item, parent);
        this.initialValue = item && item.initialValue;
        this.repeats = !!(item && item.repeats);
    }

    updateItem(item: IItem) {
        super.updateItem(item);
        this.repeats = (item as IQuestionItem<T>).repeats;
    }
}

export default QuestionItem;