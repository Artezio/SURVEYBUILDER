import { IItem, DISPLAY, GROUP, QUESTION } from "..";
import Item from "../models/item";
import { GroupItem } from "../models/groupItem";

export function itemFactory(item: Pick<IItem, 'type'>) {
    switch (item.type) {
        case DISPLAY: {
            return new Item(item)
        }
        case GROUP: {
            return new GroupItem(item)
        }
        case QUESTION: {
            return questionItemFactory(item);
        }
        default: {
            return undefined;
        }
    }
}