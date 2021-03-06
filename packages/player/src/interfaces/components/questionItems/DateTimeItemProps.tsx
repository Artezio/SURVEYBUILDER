import * as Models from '@artezio/models';
import QuestionItemProps from "./QuestionItemProps";

export interface DateTimeItemProps extends QuestionItemProps<string> {
    item: Models.IDateTimeItem;
}

export default DateTimeItemProps;