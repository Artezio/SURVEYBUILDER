import IQuestionItem from "../interfaces/questionItems/IQuestionItem";
import TextItem from "../models/questionItems/textItem";
import { TEXT, STRING } from "../constants/answerTypes";
import { StringItem } from "../models/questionItems/stringItem";
import { ICollection } from "../interfaces/ICollection";
import { QuestionItem } from "..";

export function questionItemFactory(item: Partial<Omit<IQuestionItem<any>, 'type'>>, parent?: ICollection<any>): QuestionItem<any> {
    switch (item.answerType) {
        case TEXT: {
            return new TextItem(item, parent);
        }
        case STRING: {
            return new StringItem(item, parent);
        }
        default: {
            return new StringItem(item, parent);
        }
    }
}

export default questionItemFactory;