import { IItem, DISPLAY, GROUP, QUESTION, IQuestionItem } from "..";
import Item from "../models/item";
import { GroupItem } from "../models/groupItem";
import { questionItemFactory } from "./questionItemFactory";
import IGroupItem from "../interfaces/IGroupItem";

export function itemFactory(item: IItem) {
    switch (item.type) {
        case DISPLAY: {
            return new Item(item)
        }
        case GROUP: {
            return new GroupItem(item as IGroupItem)
        }
        case QUESTION: {
            return questionItemFactory(item as IQuestionItem<any>);
        }
        default: {
            return undefined;
        }
    }
}