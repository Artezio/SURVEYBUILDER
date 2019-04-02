import { IStringItem } from "../../interfaces/questionItems/IStringItem";
import { Item } from "../..";
import { STRING } from "../../constants/answerTypes";
import { QUESTION } from "../../constants/itemTypes";

export class StringItem extends Item implements IStringItem {
    answerType: STRING;
    initialValue?: string;
    type: QUESTION;

    constructor(item: IStringItem) {
        super(item);
        this.id = item.id;
        this.answerType = STRING;
        this.initialValue = item.initialValue;
        this.type = QUESTION;
    }
    
}