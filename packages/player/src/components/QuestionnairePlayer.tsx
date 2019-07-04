import * as React from 'react';
import * as Models from '@art-forms/models';
import Questionnaire from './Questionnaire';
import QuestionnairePlayerProps from '../interfaces/components/QuestionnairePlayerProps'
import completeResponse from '../mappers/completeResponse';
import { getObservable } from '@art-forms/observable';


export class QuestionnairePlayer extends React.Component<QuestionnairePlayerProps> {

    questionnaireResponse: Models.QuestionnaireResponse = new Models.QuestionnaireResponse(this.props.initialQuestionnaireResponse);

    componentWillMount() {
        const { questionnaire } = this.props;
        const observableQuestionnaire = getObservable(questionnaire);
        observableQuestionnaire && observableQuestionnaire.mute();
        completeResponse(questionnaire, this.questionnaireResponse);
    }

    componentDidMount() {
        const { questionnaire } = this.props;
        const observableQuestionnaire = getObservable(questionnaire);
        setTimeout(() => {
            observableQuestionnaire && observableQuestionnaire.unmute();
        });
    }

    render() {
        const { questionnaire } = this.props;
        return <Questionnaire questionnaireResponse={this.questionnaireResponse} questionnaire={questionnaire} />
    }
}

export default QuestionnairePlayer;