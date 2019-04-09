import { observable, QuestionItem } from "../..";
import { ICollection } from "../../interfaces/ICollection";
import { IChoiceItem } from "../../interfaces/questionItems/IChoiceItem";
import { CHOICE } from "../..";

@observable
export class ChoiceItem extends QuestionItem<any> implements IChoiceItem {
    type: CHOICE = CHOICE;
    options: any[];

    constructor(item: Partial<Omit<IChoiceItem, 'type'>> | undefined, parent?: ICollection<IChoiceItem>) {
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

export default ChoiceItem;