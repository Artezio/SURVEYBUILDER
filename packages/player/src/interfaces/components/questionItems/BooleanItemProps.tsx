import * as Models from '@artezio/models';
import QuestionItemProps from "./QuestionItemProps";

export interface BooleanItemProps extends QuestionItemProps<boolean> {
    item: Models.IBooleanItem;
}

export default BooleanItemProps;