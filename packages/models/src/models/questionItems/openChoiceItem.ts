import { observable, QuestionItem } from "../..";
import { ICollection } from "../../interfaces/ICollection";
import { IOpenChoiceItem } from "../../interfaces/questionItems/IOpenChoiceItem";
import { OPEN_CHOICE } from "../../constants/itemTypes";

@observable
export class OpenChoiceItem extends QuestionItem<any> implements IOpenChoiceItem {
    type: OPEN_CHOICE = OPEN_CHOICE;
    options: any[];

    constructor(item: Partial<Omit<IOpenChoiceItem, 'type'>> | undefined, parent?: ICollection<IOpenChoiceItem>) {
        super(item, parent);
        this.options = item && item.options || [];
    }

    addOption(option: any) {
        if (this.options.indexOf(option) === -1) {
            this.options = [...this.options, option];
        }
    }
    removeOption(option: any) {
        this.options = this.options.filter(x => x !== option);
    }
}

export default OpenChoiceItem;