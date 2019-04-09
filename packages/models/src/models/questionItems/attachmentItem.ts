import { ATTACHMENT } from "../../constants/itemTypes";
import { observable, QuestionItem } from "../..";
import { ICollection } from "../../interfaces/ICollection";
import IAttachmentItem from "../../interfaces/questionItems/IAttachmentItem";

@observable
export class AttachmentItem extends QuestionItem<void> implements IAttachmentItem {
    type: ATTACHMENT = ATTACHMENT;

    constructor(item: Partial<Omit<IAttachmentItem, 'type'>> | undefined, parent?: ICollection<IAttachmentItem>) {
        super(item, parent);
    }
}

export default AttachmentItem;