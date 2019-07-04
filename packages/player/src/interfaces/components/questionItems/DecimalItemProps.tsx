import * as Models from '@art-forms/models';
import QuestionItemProps from "./QuestionItemProps";

export interface DecimalItemProps extends QuestionItemProps<number> {
    item: Models.IDecimalItem;
}

export default DecimalItemProps;