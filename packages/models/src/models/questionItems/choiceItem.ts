import { observable, QuestionItem } from "../..";
import { ICollection } from "../../interfaces/ICollection";
import { IChoiceItem } from "../../interfaces/questionItems/IChoiceItem";
import { CHOICE } from "../..";

@observable
export class ChoiceItem extends QuestionItem<any> implements IChoiceItem {
    type: CHOICE = CHOICE;

    constructor(item: Partial<Omit<IChoiceItem, 'type'>> | undefined, parent?: ICollection<IChoiceItem>) {
        super(item, parent);
    }
}

export default ChoiceItem;