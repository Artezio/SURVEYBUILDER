import * as Models from '@surveybuilder/models';
import QuestionItemProps from "./QuestionItemProps";

export interface AttachmentItemProps extends QuestionItemProps<void> {
    item: Models.IAttachmentItem;
}

export default AttachmentItemProps;