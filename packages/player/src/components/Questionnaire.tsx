import * as React from 'react';
import { QuestionnaireProps } from '../interfaces/componentProps/Questionnaire';
import ItemProvider from './ItemProvider';


export class Questionnaire extends React.Component<QuestionnaireProps> {
    render() {
        const { questionnaire } = this.props;
        return <div className="col-11 border border-secondary">
            <h2>{questionnaire.title}</h2>
            <h3>{questionnaire.description}</h3>
            <div className="item-list row d-flex justify-content-center my-3">
                {questionnaire.items && questionnaire.items.map(item => <ItemProvider key={item.id} item={item} />)}
            </div>
        </div>
    }
}

export default Questionnaire;