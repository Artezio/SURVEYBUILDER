import IQuestionItem from "../interfaces/questionItems/IQuestionItem";
import TextItem from "../models/questionItems/textItem";
import { TEXT, STRING } from "../constants/answerTypes";
import { StringItem } from "../models/questionItems/stringItem";
import { ICollection } from "../interfaces/ICollection";

export function questionItemFactory(item: Omit<IQuestionItem<any>, 'id' | 'type'>, parent?: ICollection<any>) {
    switch (item.answerType) {
        case TEXT: {
            return new TextItem(item, parent);
        }
        case STRING: {
            return new StringItem(item, parent);
        }
        default: {
            return undefined;
        }
    }
}