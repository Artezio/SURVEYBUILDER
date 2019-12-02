import QuestionItemProps from "./QuestionItemProps";
import * as Models from '@surveybuilder/models';


export interface MultiChoiceItemProps extends QuestionItemProps<any> {
    item: Models.IMultiChoiceItem;
}

export default MultiChoiceItemProps;