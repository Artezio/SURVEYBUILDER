import { ATTACHMENT } from "../../constants/itemTypes";
import { observable, getObservable } from '@artezio/observable';
import { IItemCollection } from "../../interfaces/IItemCollection";
import IAttachmentItem from "../../interfaces/questionItems/IAttachmentItem";
import QuestionItem from "./questionItem";

@observable
export class AttachmentItem extends QuestionItem<void> implements IAttachmentItem {
    type: ATTACHMENT = ATTACHMENT;
    multipleFiles: boolean;

    constructor(item: Partial<Omit<IAttachmentItem, 'type'>> | undefined, parent?: IItemCollection) {
        super(item, parent);
        this.multipleFiles = !!(item && item.multipleFiles);
    }

    updateItem(item: IAttachmentItem) {
        const obs = getObservable(item);
        obs && obs.mute();
        this.multipleFiles = item.multipleFiles;
        obs && obs.unmute();
        super.updateItem(item);
    }
}

export default AttachmentItem;