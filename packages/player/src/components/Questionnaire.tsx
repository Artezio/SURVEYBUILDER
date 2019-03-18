import * as React from 'react';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import ItemProvider from './ItemProvider';

export class Questionnaire extends React.Component<QuestionnaireProps> {

    componentWillMount() {
        const { actions } = this.props;
        actions.createQuestionnaireResponse();
    }

    render() {
        const { questionnaire, actions } = this.props;
        return <div className="container-fluid questionnaire border border-secondary">
            <h2>{questionnaire && questionnaire.title}</h2>
            <h3>{questionnaire && questionnaire.description}</h3>
            <div className="item-list row justify-content-center my-3">
                {questionnaire && questionnaire.items && questionnaire.items.map(item =>
                    <div className="col-11 justify-content-center" key={item.id}>
                        {ItemProvider({
                            item, actions: { ...{ addQuestionnaireResponseItem: actions.addQuestionnaireResponseItem, updateQuestionnaireResponseItem: actions.updateQuestionnaireResponseItem } }
                        })}
                    </div>
                )}
            </div>
        </div>
    }
}

export default Questionnaire;