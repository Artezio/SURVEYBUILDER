import IQuestionItem from "../interfaces/questionItems/IQuestionItem";
import TextItem from "../models/questionItems/textItem";
import { TEXT } from "../constants/answerTypes";

export function questionItemFactory(item: IQuestionItem<any>) {
    switch (item.answerType) {
        case TEXT: {
            return new TextItem(item);
        }
        default: {
            return undefined;
        }
    }
}