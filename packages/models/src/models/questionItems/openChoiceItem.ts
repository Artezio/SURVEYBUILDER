import { observable, QuestionItem } from "../..";
import { ICollection } from "../../interfaces/ICollection";
import { IOpenChoiceItem } from "../../interfaces/questionItems/IOpenChoiceItem";
import { OPEN_CHOICE } from "../../constants/itemTypes";

@observable
export class OpenChoiceItem extends QuestionItem<any> implements IOpenChoiceItem {
    type: OPEN_CHOICE = OPEN_CHOICE;

    constructor(item: Partial<Omit<IOpenChoiceItem, 'type'>> | undefined, parent?: ICollection<IOpenChoiceItem>) {
        super(item, parent);
    }
}

export default OpenChoiceItem;