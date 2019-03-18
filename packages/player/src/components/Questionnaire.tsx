import * as React from 'react';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import ItemProvider from './ItemProvider';

export class Questionnaire extends React.Component<QuestionnaireProps> {

    componentWillMount() {
        const { actions } = this.props;
        actions.createQuestionnaireResponse();
    }

    render() {
        const { questionnaire, actions, className = '' } = this.props;
        return <div className={`questionnaire border border-secondary ${className}`}>
            <h2>{questionnaire && questionnaire.title}</h2>
            <h3>{questionnaire && questionnaire.description}</h3>
            <div className="item-list row my-3">
                {questionnaire && questionnaire.items && questionnaire.items.map(item =>
                    <div className="col-12" key={item.id}>
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