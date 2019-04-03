import { ITextItem, observable } from "../..";
import { ICollection } from "../../interfaces/ICollection";
import { TEXT } from "../../constants/itemTypes";
import { QuestionItem } from "./questionItem";


@observable
export class TextItem extends QuestionItem<string> implements ITextItem {
    type: TEXT = TEXT;

    constructor(item: Partial<Omit<ITextItem, 'type'>> | undefined, parent?: ICollection<ITextItem>) {
        super(item, parent);
    }
}

export default TextItem;