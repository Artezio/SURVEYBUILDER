import QuestionItemProps from "./QuestionItemProps";
import * as Models from '@art-forms/models';


export interface MultiChoiceItemProps extends QuestionItemProps<any> {
    item: Models.IMultiChoiceItem;
}

export default MultiChoiceItemProps;