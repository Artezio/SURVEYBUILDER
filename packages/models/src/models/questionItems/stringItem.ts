import { IStringItem } from "../../interfaces/questionItems/IStringItem";
import { STRING } from "../../constants/answerTypes";
import { QuestionItem } from "./questionItem";
import { ICollection } from "../../interfaces/ICollection";
import { observable } from "../../decorators/temporaryObservable";


@observable
export class StringItem extends QuestionItem<string> implements IStringItem {
    answerType: STRING = STRING;

    constructor(item: Partial<Omit<IStringItem, 'answerType' | 'type'>> | undefined, parent?: ICollection<IStringItem>) {
        super(item, parent);
    }

}

export default StringItem;