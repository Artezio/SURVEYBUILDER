import * as Models from '@artezio/models';
import QuestionItemProps from "./QuestionItemProps";

export interface DecimalItemProps extends QuestionItemProps<number> {
    item: Models.IDecimalItem;
}

export default DecimalItemProps;