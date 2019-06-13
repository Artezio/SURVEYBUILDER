import * as React from 'react';
import Questionnaire from './Questionnaire';
import QuestionnaireProps from '../interfaces/components/QuestionnaireProps'
import completeResponse from '../mappers/completeResponse';
import { getObservable } from '@art-forms/observable';


// export const QuestionnairePlayer = (props: QuestionnaireProps) => {
//     const { questionnaire, questionnaireResponse } = props;
//     const observableQuestionnaire = getObservable(questionnaire);
//     const observableResponse = getObservable(questionnaireResponse);
//     observableQuestionnaire && observableQuestionnaire.mute();
//     observableResponse && observableResponse.mute();
//     completeResponse(questionnaire, questionnaireResponse);
//     observableQuestionnaire && observableQuestionnaire.unmute();
//     observableResponse && observableResponse.unmute();
//     return <Questionnaire {...props} />
// }

export class QuestionnairePlayer extends React.Component<QuestionnaireProps> {

    componentWillMount() {
        const { questionnaire, questionnaireResponse } = this.props;
        const observableQuestionnaire = getObservable(questionnaire);
        const observableResponse = getObservable(questionnaireResponse);
        observableQuestionnaire && observableQuestionnaire.mute();
        observableResponse && observableResponse.mute();
        completeResponse(questionnaire, questionnaireResponse);
    }

    componentDidMount() {
        const { questionnaire, questionnaireResponse } = this.props;
        const observableQuestionnaire = getObservable(questionnaire);
        const observableResponse = getObservable(questionnaireResponse);
        setTimeout(() => {
            observableQuestionnaire && observableQuestionnaire.unmute();
            observableResponse && observableResponse.unmute();
        });
    }

    render() {
        return <Questionnaire {...this.props} />
    }
}

export default QuestionnairePlayer;