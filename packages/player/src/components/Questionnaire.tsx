import * as React from 'react';
import { QuestionnaireProps } from '../interfaces/componentProps/Questionnaire';
import ItemProvider from './ItemProvider';

export class Questionnaire extends React.Component<QuestionnaireProps> {

    componentWillMount() {
        const { actions } = this.props;
        actions.createQuestionnaireResponse();
    }

    render() {
        const { questionnaire, actions } = this.props;
        return <div className="col-11 border border-secondary">
            <h2>{questionnaire && questionnaire.title}</h2>
            <h3>{questionnaire && questionnaire.description}</h3>
            <div className="item-list row d-flex justify-content-center my-3">
                {questionnaire && questionnaire.items && questionnaire.items.map(item => ItemProvider({
                    item, key: item.id, actions: { ...{ addQuestionnaireResponseItem: actions.addQuestionnaireResponseItem, updateQuestionnaireResponseItem: actions.updateQuestionnaireResponseItem } }
                }))}
            </div>
        </div>
    }
}

export default Questionnaire;