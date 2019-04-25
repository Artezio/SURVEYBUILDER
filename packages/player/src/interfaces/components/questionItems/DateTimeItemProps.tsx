import * as Models from '@art-forms/models';
import QuestionItemProps from "../QuestionItemProps";

export interface DateTimeItemProps extends QuestionItemProps<string> {
    item: Models.DateTimeItem;
}

export default DateTimeItemProps;