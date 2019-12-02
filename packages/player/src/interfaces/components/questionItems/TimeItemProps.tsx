import * as Models from '@surveybuilder/models';
import QuestionItemProps from "./QuestionItemProps";

export interface TimeItemProps extends QuestionItemProps<string> {
    item: Models.ITimeItem;
}

export default TimeItemProps;