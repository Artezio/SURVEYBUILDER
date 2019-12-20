import * as Models from '@artezio/models';
import QuestionItemProps from "./QuestionItemProps";

export interface TextItemProps extends QuestionItemProps<string> {
    item: Models.ITextItem;
}

export default TextItemProps;