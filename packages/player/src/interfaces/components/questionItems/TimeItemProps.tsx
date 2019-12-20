import * as Models from '@artezio/models';
import QuestionItemProps from "./QuestionItemProps";

export interface TimeItemProps extends QuestionItemProps<string> {
    item: Models.ITimeItem;
}

export default TimeItemProps;