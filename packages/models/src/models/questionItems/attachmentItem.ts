import { ATTACHMENT } from "../../constants/itemTypes";
import { observable, QuestionItem } from "../..";
import { IItemCollection } from "../../interfaces/IItemCollection";
import IAttachmentItem from "../../interfaces/questionItems/IAttachmentItem";

@observable
export class AttachmentItem extends QuestionItem<void> implements IAttachmentItem {
    type: ATTACHMENT = ATTACHMENT;
    multipleFiles: boolean;

    constructor(item: Partial<Omit<IAttachmentItem, 'type'>> | undefined, parent?: IItemCollection<IAttachmentItem>) {
        super(item, parent);
        this.multipleFiles = !!(item && item.multipleFiles);
    }

    updateItem(item: IAttachmentItem) {
        super.updateItem(item);
        this.multipleFiles = item.multipleFiles;
    }
}

export default AttachmentItem;