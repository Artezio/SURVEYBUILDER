import * as Models from '@art-forms/models';
import QuestionItemProps from "../QuestionItemProps";

export interface TextItemProps extends QuestionItemProps<string> {
    item: Models.TextItem;
}

export default TextItemProps;