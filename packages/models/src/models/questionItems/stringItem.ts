import { IStringItem } from "../../interfaces/questionItems/IStringItem";
import { STRING } from "../../constants/answerTypes";
import { QuestionItem } from "./questionItem";
import { ICollection } from "../../interfaces/ICollection";

export class StringItem extends QuestionItem<string> implements IStringItem {
    answerType: STRING;

    constructor(item: Omit<IStringItem, 'id' | 'answerType' | 'type'> | undefined = {}, parent?: ICollection<IStringItem>) {
        super(item, parent);
        this.answerType = STRING;
    }

}