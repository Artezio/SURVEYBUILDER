import { ATTACHMENT } from "../../constants/itemTypes";
import { QuestionItem } from "../..";
import { observable, getObservable } from '@art-forms/observable';
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
        const obs = getObservable(item);
        obs && obs.mute();
        this.multipleFiles = item.multipleFiles;
        super.updateItem(item);
    }
}

export default AttachmentItem;