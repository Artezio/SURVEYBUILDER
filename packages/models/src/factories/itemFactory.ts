import TextItem from "../models/questionItems/textItem";
import BooleanItem from "../models/questionItems/booleanItem";
import Item from "../models/item";
import GroupItem from "../models/groupItem";
import IItemCollection from "../interfaces/IItemCollection";
import StringItem from "../models/questionItems/stringItem";
import IGroupItem from "../interfaces/IGroupItem";
import ITextItem from "../interfaces/questionItems/ITextItem";
import IStringItem from "../interfaces/questionItems/IStringItem";
import IDecimalItem from "../interfaces/questionItems/IDecimalItem";
import DecimalItem from "../models/questionItems/decimalItem";
import IBooleanItem from "../interfaces/questionItems/IBooleanItem";
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
import IItem from "../interfaces/IItem";
import IMultiChoiceItem from "../interfaces/questionItems/IMultiChoiceItem";
import MultiChoiceItem from "../models/questionItems/multiChoiceItem";

export class ItemFactory {
    parent?: IItemCollection;

    constructor(parent?: IItemCollection) {
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
        return new BooleanItem(item, this.parent);
    }

    createTimeItem(item?: Partial<Omit<ITimeItem, 'type'>>) {
        return new TimeItem(item, this.parent);
    }

    createDateItem(item?: Partial<Omit<IDateItem, 'type'>>) {
        return new DateItem(item, this.parent);
    }

    createDateTimeItem(item?: Partial<Omit<IDateTimeItem, 'type'>>) {
        return new DateTimeItem(item, this.parent);
    }

    createAttachmentItem(item?: Partial<Omit<IAttachmentItem, 'type'>>) {
        return new AttachmentItem(item, this.parent);
    }

    createChoiceItem(item?: Partial<Omit<IChoiceItem, 'type'>>) {
        return new ChoiceItem(item, this.parent);
    }

    createOpenChoiceItem(item?: Partial<Omit<IOpenChoiceItem, 'type'>>) {
        return new OpenChoiceItem(item, this.parent);
    }

    createMultiChoiceItem(item?: Partial<Omit<IMultiChoiceItem, 'type'>>) {
        return new MultiChoiceItem(item, this.parent);
    }
}

export default ItemFactory;