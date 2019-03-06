import * as React from 'react';
import { QuestionnaireProps } from '../interfaces/components/Questionnaire';


export class Questionnaire extends React.Component<QuestionnaireProps> {
    render() {
        const { questionnaire } = this.props;
        return <div className="col-11 border border-secondary">
            <h2>{questionnaire.title}</h2>
            <h3>{questionnaire.description}</h3>
            <div className="item-list row justify-items-center">
                {questionnaire.items && questionnaire.items.length}
            </div>
        </div>
    }
}

export default Questionnaire;