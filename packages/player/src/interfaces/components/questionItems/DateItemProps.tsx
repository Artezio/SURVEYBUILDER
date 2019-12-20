import * as Models from '@artezio/models';
import QuestionItemProps from "./QuestionItemProps";

export interface DateItemProps extends QuestionItemProps<string> {
    item: Models.IDateItem;
}

export default DateItemProps;