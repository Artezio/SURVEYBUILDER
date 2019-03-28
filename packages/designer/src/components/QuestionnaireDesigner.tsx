import * as React from 'react';
import Questionnaire from './Questionnaire';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import * as Models from '@art-forms/models';


export const QuestionnaireDesigner = (props: QuestionnaireProps) => {
    const questionnaire = new Models.Questionnaire(props.questionnaire);
    return <>
        <Questionnaire {...props} questionnaire={questionnaire} />
    </>
};

export default QuestionnaireDesigner;