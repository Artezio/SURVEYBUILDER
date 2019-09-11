import IItemCollection from "../interfaces/IItemCollection";
import { ItemFactory } from './itemFactory';
import IItem from "../interfaces/IItem";
import Item from "../models/item";
import { ATTACHMENT, BOOLEAN, CHOICE, DATE, DATE_TIME, DECIMAL, DISPLAY, GROUP, MULTI_CHOICE, OPEN_CHOICE, STRING, TEXT, TIME } from "../constants/itemTypes";

export class ItemByTypeFactory {
    itemFactory: ItemFactory;

    constructor(parent?: IItemCollection<IItem>) {
        this.itemFactory = new ItemFactory(parent);
    }

    createItem(item: IItem): Item {
        switch (item.type) {
            case ATTACHMENT: {
                return this.itemFactory.createAttachmentItem(item);
            }
            case BOOLEAN: {
                return this.itemFactory.createBooleanItem(item);
            }
            case CHOICE: {
                return this.itemFactory.createChoiceItem(item);
            }
            case DATE: {
                return this.itemFactory.createDateItem(item);
            }
            case DATE_TIME: {
                return this.itemFactory.createDateTimeItem(item);
            }
            case DECIMAL: {
                return this.itemFactory.createDecimalItem(item);
            }
            case DISPLAY: {
                return this.itemFactory.createItem(item);
            }
            case GROUP: {
                return this.itemFactory.createGroupItem(item);
            }
            case MULTI_CHOICE: {
                return this.itemFactory.createMultiChoiceItem(item);
            }
            case OPEN_CHOICE: {
                return this.itemFactory.createOpenChoiceItem(item);
            }
            case STRING: {
                return this.itemFactory.createStringItem(item);
            }
            case TEXT: {
                return this.itemFactory.createTextItem(item);
            }
            case TIME: {
                return this.itemFactory.createTimeItem(item);
            }
            default: {
                return this.itemFactory.createItem(item);
            }
        }
    }

}

export default ItemByTypeFactory;