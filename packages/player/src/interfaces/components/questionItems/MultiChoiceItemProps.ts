import QuestionItemProps from "./QuestionItemProps";
import * as Models from '@artezio/models';


export interface MultiChoiceItemProps extends QuestionItemProps<any> {
    item: Models.IMultiChoiceItem;
}

export default MultiChoiceItemProps;