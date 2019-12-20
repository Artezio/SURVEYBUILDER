import QuestionItemProps from "./QuestionItemProps";
import * as Models from '@artezio/models';


export interface OpenChoiceItemProps extends QuestionItemProps<any> {
    item: Models.IOpenChoiceItem;
}

export default OpenChoiceItemProps;