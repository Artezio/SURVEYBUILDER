import * as React from 'react';
import Questionnaire from './Questionnaire';
import { QuestionnairePlayerProps } from '../interfaces/componentProps/QuestionnairePlayerProps'


export const QuestionnairePlayer = (props: QuestionnairePlayerProps) => {
    return <>
        <Questionnaire {...props} />
    </>
}

export default QuestionnairePlayer;