import IQuestionItem from "./IQuestionItem";
import { CHOICE } from "../../constants/itemTypes";
import IChoiceOption from "../IChoiceOption";


export interface IChoiceItem extends IQuestionItem<any> {
    type: CHOICE;
    options: IChoiceOption[];
    initialValue?: IChoiceOption;
    repeats: false;
}

export default IChoiceItem;