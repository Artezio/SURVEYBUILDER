import * as React from 'react';
import * as Models from '@art-forms/models';
import Questionnaire from './Questionnaire';
import QuestionnaireDesignerProps from '../interfaces/components/QuestionnaireDesignerProps';


export const QuestionnaireDesigner = (props: QuestionnaireDesignerProps) => {
    return <Questionnaire className={props.className} questionnaire={new Models.Questionnaire(props.questionnaire)} />
};

export default QuestionnaireDesigner;