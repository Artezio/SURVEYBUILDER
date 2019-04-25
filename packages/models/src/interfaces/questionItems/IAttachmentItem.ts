import IQuestionItem from "./IQuestionItem";
import { ATTACHMENT } from "../../constants/itemTypes";


export interface IAttachmentItem extends IQuestionItem<void> {
    type: ATTACHMENT;
    multipleFiles: boolean;
}

export default IAttachmentItem;