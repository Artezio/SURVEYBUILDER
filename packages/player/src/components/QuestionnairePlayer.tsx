import * as React from 'react';
import Questionnaire from './Questionnaire';
import QuestionnaireProps from '../interfaces/components/QuestionnaireProps'


export const QuestionnairePlayer = (props: QuestionnaireProps) => {
    return <>
        <Questionnaire {...props} />
    </>
}

export default QuestionnairePlayer;