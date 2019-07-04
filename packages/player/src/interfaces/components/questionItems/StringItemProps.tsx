import * as Models from '@art-forms/models';
import QuestionItemProps from "./QuestionItemProps";

export interface StringItemProps extends QuestionItemProps<string> {
    item: Models.IStringItem;
}

export default StringItemProps;