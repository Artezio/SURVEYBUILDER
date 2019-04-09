import { IItem, TextItem } from "..";
import Item from "../models/item";
import { GroupItem } from "../models/groupItem";
import { ICollection } from "../interfaces/ICollection";
import StringItem from "../models/questionItems/stringItem";
import IGroupItem from "../interfaces/IGroupItem";
import ITextItem from "../interfaces/questionItems/ITextItem";
import { IStringItem } from "../interfaces/questionItems/IStringItem";
import { IDecimalItem } from "../interfaces/questionItems/IDecimalItem";
import DecimalItem from "../models/questionItems/decimalItem";
import IBooleanItem from "../interfaces/questionItems/IBooleanItem";
import { BooleanItem } from "../../build";
import TimeItem from "../models/questionItems/timeItem";
import ITimeItem from "../interfaces/questionItems/ITimeItem";
import IDateItem from "../interfaces/questionItems/IDateItem";
import DateItem from "../models/questionItems/dateItem";
import IDateTimeItem from "../interfaces/questionItems/IDateTimeItem";
import DateTimeItem from "../models/questionItems/dateTimeItem";
import IAttachmentItem from "../interfaces/questionItems/IAttachmentItem";
import AttachmentItem from "../models/questionItems/attachmentItem";
import OpenChoiceItem from "../models/questionItems/openChoiceItem";
import IChoiceItem from "../interfaces/questionItems/IChoiceItem";
import ChoiceItem from "../models/questionItems/choiceItem";
import IOpenChoiceItem from "../interfaces/questionItems/IOpenChoiceItem";


export class ItemFactory {
    parent?: ICollection<IItem>;

    constructor(parent?: ICollection<IItem>) {
        this.parent = parent;
    }

    createItem(item?: Partial<Omit<IItem, 'type'>>) {
        return new Item(item, this.parent)
    }

    createGroupItem(item?: Partial<Omit<IGroupItem, 'type'>>) {
        return new GroupItem(item, this.parent);
    }

    createTextItem(item?: Partial<Omit<ITextItem, 'type'>>) {
        return new TextItem(item, this.parent);
    }

    createStringItem(item?: Partial<Omit<IStringItem, 'type'>>) {
        return new StringItem(item, this.parent);
    }

    createDecimalItem(item?: Partial<Omit<IDecimalItem, 'type'>>) {
        return new DecimalItem(item, this.parent);
    }

    createBooleanItem(item?: Partial<Omit<IBooleanItem, 'type'>>) {
        return new BooleanItem(item);
    }

    createTimeItem(item?: Partial<Omit<ITimeItem, 'type'>>) {
        return new TimeItem(item);
    }

    createDateItem(item?: Partial<Omit<IDateItem, 'type'>>) {
        return new DateItem(item);
    }

    createDateTimeItem(item?: Partial<Omit<IDateTimeItem, 'type'>>) {
        return new DateTimeItem(item);
    }

    createAttachmentItem(item?: Partial<Omit<IAttachmentItem, 'type'>>) {
        return new AttachmentItem(item);
    }

    createChoiceItem(item?: Partial<Omit<IChoiceItem, 'type'>>) {
        return new ChoiceItem(item);
    }

    createOpenChoiceItem(item?: Partial<Omit<IOpenChoiceItem, 'type'>>) {
        return new OpenChoiceItem(item);
    }
}

export default ItemFactory;