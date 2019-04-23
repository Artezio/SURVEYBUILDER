import QuestionItem from "./questionItem";
import IMultiChoiceItem from "../../interfaces/questionItems/IMultiChoiceItem";
import { MULTI_CHOICE } from "../../constants/itemTypes";
import { IChoiceOption, IChoiceItem } from "../..";
import IItemCollection from "../../interfaces/IItemCollection";

export class MultiChoiceItem extends QuestionItem<any> implements IMultiChoiceItem {
    type: MULTI_CHOICE = MULTI_CHOICE;
    options: IChoiceOption[];

    constructor(item: Partial<Omit<IMultiChoiceItem, 'type'>> | undefined, parent?: IItemCollection<IMultiChoiceItem>) {
        super(item, parent);
        this.options = item && item.options || [];
    }

    addOption(option: IChoiceOption) {
        if (this.options.every(anOption => anOption.id !== option.id)) {
            this.options = [...this.options, option];
        }
    }

    updateOption(option: IChoiceOption) {
        this.options = this.options.map(anOption => {
            if (anOption.id === option.id) {
                return option;
            }
            return anOption;
        })
    }

    removeOption(option: any) {
        this.options = this.options.filter(x => x !== option);
    }

    updateItem(item: IChoiceItem) {
        super.updateItem(item);
        this.initialValue = item.initialValue;
        this.options = item.options;
    }
}

export default MultiChoiceItem;