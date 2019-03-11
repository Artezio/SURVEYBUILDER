import * as React from 'react';
import Questionnaire from './Questionnaire';
import { QuestionnaireDesignerProps } from '../interfaces/components/QuestionnaireDesignerProps';


export const QuestionnaireDesigner = (props: QuestionnaireDesignerProps) => {
    return <>
        <Questionnaire {...props} />
    </>
};

export default QuestionnaireDesigner;