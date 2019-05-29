import * as Models from '@art-forms/models';
import QuestionItemProps from "./QuestionItemProps";

export interface BooleanItemProps extends QuestionItemProps<boolean> {
    item: Models.BooleanItem;
}

export default BooleanItemProps;