import * as Models from '@artezio/models';
import QuestionItemProps from "./QuestionItemProps";

export interface AttachmentItemProps extends QuestionItemProps<void> {
    item: Models.IAttachmentItem;
}

export default AttachmentItemProps;