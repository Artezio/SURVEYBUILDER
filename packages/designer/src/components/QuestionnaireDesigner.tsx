import * as React from 'react';
import Questionnaire from './Questionnaire';
import { QuestionnaireDesignerProps } from '../interfaces/components/QuestionnaireDesignerProps';


export const QuestionnaireDesigner = (props: QuestionnaireDesignerProps) => {
    return <div>
        <Questionnaire {...props} />
    </div>
};

export default QuestionnaireDesigner;