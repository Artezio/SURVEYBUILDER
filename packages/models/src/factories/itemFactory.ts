import { IItem, DISPLAY, GROUP, QUESTION, IQuestionItem } from "..";
import Item from "../models/item";
import { GroupItem } from "../models/groupItem";
import { questionItemFactory } from "./questionItemFactory";
import { ICollection } from "../interfaces/ICollection";

export function itemFactory(item: Partial<IItem> | Partial<IQuestionItem<any>>, parent?: ICollection<any>): Item {
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
            return new Item(item, parent);
        }
    }
}

export default itemFactory;