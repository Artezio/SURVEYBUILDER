import { IItem, DISPLAY, GROUP, QUESTION, IQuestionItem } from "..";
import Item from "../models/item";
import { GroupItem } from "../models/groupItem";
import { questionItemFactory } from "./questionItemFactory";
import { ICollection } from "../interfaces/ICollection";

export function itemFactory(item: Omit<IItem, 'id'> | Omit<IQuestionItem<any>, 'id'>, parent?: ICollection<any>) {
    switch (item.type) {
        case DISPLAY: {
            return new Item(item, parent)
        }
        case GROUP: {
            return new GroupItem(item, parent)
        }
        case QUESTION: {
            return questionItemFactory(item as IQuestionItem<any>, parent);
        }
        default: {
            return undefined;
        }
    }
}

export default itemFactory;