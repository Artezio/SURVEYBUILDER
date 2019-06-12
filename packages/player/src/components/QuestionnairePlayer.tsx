import * as React from 'react';
import Questionnaire from './Questionnaire';
import QuestionnaireProps from '../interfaces/components/QuestionnaireProps'
import completeResponse from '../mappers/completeResponse';


export const QuestionnairePlayer = (props: QuestionnaireProps) => {
    completeResponse(props.questionnaire, props.questionnaireResponse);
    return <>
        <Questionnaire {...props} />
    </>
}

export default QuestionnairePlayer;