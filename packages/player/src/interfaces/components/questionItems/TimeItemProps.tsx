import * as Models from '@art-forms/models';
import QuestionItemProps from "./QuestionItemProps";

export interface TimeItemProps extends QuestionItemProps<string> {
    item: Models.TimeItem;
}

export default TimeItemProps;