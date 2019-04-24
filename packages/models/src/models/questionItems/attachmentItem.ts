import { ATTACHMENT } from "../../constants/itemTypes";
import { observable, QuestionItem } from "../..";
import { IItemCollection } from "../../interfaces/IItemCollection";
import IAttachmentItem from "../../interfaces/questionItems/IAttachmentItem";

@observable
export class AttachmentItem extends QuestionItem<void> implements IAttachmentItem {
    type: ATTACHMENT = ATTACHMENT;

    constructor(item: Partial<Omit<IAttachmentItem, 'type'>> | undefined, parent?: IItemCollection<IAttachmentItem>) {
        super(item, parent);
        this.repeats = !!(item && item.repeats);
    }
}

export default AttachmentItem;