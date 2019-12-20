import QuestionItemProps from "./QuestionItemProps";
import * as Models from '@artezio/models';


export interface ChoiceItemProps extends QuestionItemProps<any> {
    item: Models.IChoiceItem;
}

export default ChoiceItemProps;