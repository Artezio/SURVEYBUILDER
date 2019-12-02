import QuestionItemProps from "./QuestionItemProps";
import * as Models from '@surveybuilder/models';


export interface OpenChoiceItemProps extends QuestionItemProps<any> {
    item: Models.IOpenChoiceItem;
}

export default OpenChoiceItemProps;