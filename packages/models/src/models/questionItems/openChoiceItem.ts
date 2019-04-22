import { observable, QuestionItem } from "../..";
import { IItemCollection } from "../../interfaces/IItemCollection";
import { IOpenChoiceItem } from "../../interfaces/questionItems/IOpenChoiceItem";
import { OPEN_CHOICE } from "../../constants/itemTypes";
import IChoiceOption from "../../interfaces/IChoiceOption";

@observable
export class OpenChoiceItem extends QuestionItem<any> implements IOpenChoiceItem {
    type: OPEN_CHOICE = OPEN_CHOICE;
    options: IChoiceOption[];

    constructor(item: Partial<Omit<IOpenChoiceItem, 'type'>> | undefined, parent?: IItemCollection<IOpenChoiceItem>) {
        super(item, parent);
        this.options = item && item.options || [];
    }

    addOption(option: IChoiceOption) {
        if (this.options.every(anOption => anOption.id !== option.id)) {
            this.options = [...this.options, option];
        }
    }

    updateOption(option: IChoiceOption) {
        this.options.map(anOption => {
            if (anOption.id === option.id) {
                return option;
            }
            return anOption;
        })
    }

    removeOption(option: any) {
        this.options = this.options.filter(x => x !== option);
    }

    updateItem(item: IOpenChoiceItem) {
        super.updateItem(item);
        this.initialValue = item.initialValue;
        this.options = item.options;
    }
}

export default OpenChoiceItem;