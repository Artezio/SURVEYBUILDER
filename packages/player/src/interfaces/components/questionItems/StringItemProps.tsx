import * as Models from '@art-forms/models';
import QuestionItemProps from "../QuestionItemProps";

export interface StringItemProps extends QuestionItemProps<string> {
    item: Models.StringItem;
}

export default StringItemProps;