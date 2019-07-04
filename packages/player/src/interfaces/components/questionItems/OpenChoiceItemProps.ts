import QuestionItemProps from "./QuestionItemProps";
import * as Models from '@art-forms/models';


export interface OpenChoiceItemProps extends QuestionItemProps<any> {
    item: Models.IOpenChoiceItem;
}

export default OpenChoiceItemProps;