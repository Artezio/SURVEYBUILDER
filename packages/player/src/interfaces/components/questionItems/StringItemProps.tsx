import * as Models from '@artezio/models';
import QuestionItemProps from "./QuestionItemProps";

export interface StringItemProps extends QuestionItemProps<string> {
    item: Models.IStringItem;
}

export default StringItemProps;