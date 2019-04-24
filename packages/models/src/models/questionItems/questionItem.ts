import IQuestionItem from "../../interfaces/questionItems/IQuestionItem";
import { Item } from "../..";
import { QUESTION_TYPE } from "../../constants/itemTypes";
import { IItemCollection } from "../../interfaces/IItemCollection";
import { IItem } from "../../interfaces/IItem";

export abstract class QuestionItem<T> extends Item implements IQuestionItem<T> {
    initialValue?: T;
    type!: QUESTION_TYPE;
    repeats: boolean = false;

    constructor(item: Partial<Omit<IQuestionItem<T>, 'type'>> | undefined, parent?: IItemCollection<IQuestionItem<T>>) {
        super(item, parent);
        this.initialValue = item && item.initialValue;
        // this.repeats = !!(item && item.repeats);
    }

    updateItem(item: IItem) {
        super.updateItem(item);
        this.repeats = (item as IQuestionItem<T>).repeats;
    }
}

export default QuestionItem;