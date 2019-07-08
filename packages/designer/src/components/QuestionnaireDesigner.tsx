import * as React from 'react';
import Questionnaire from './Questionnaire';
import QuestionnaireProps from '../interfaces/components/QuestionnaireProps';


export const QuestionnaireDesigner = (props: QuestionnaireProps) => {
    return <Questionnaire className={props.className} questionnaire={props.questionnaire} />
};

export default QuestionnaireDesigner;