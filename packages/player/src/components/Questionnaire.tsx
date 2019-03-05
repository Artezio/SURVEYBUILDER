import * as React from 'react';
import { QuestionnaireProps } from '../interfaces/components/Questionnaire';


export class Questionnaire extends React.Component<QuestionnaireProps> {
    render() {
        return <div className="col-11 border border-secondary">
            <h2>My Title</h2>
            <h3>My Description</h3>
            <div className="item-list row justify-items-center">
                
            </div>
        </div>
    }
}

export default Questionnaire;