import * as React from 'react';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import * as Models from '@art-forms/models';
import ItemProvider from './ItemProvider';
import useObservableModel from '../HOCs/useObservableModel';

export class Questionnaire extends React.Component<QuestionnaireProps> {
    questionnaireResponse?: Models.QuestionnaireResponse;

    constructor(props: QuestionnaireProps) {
        super(props);
        props.questionnaire && props.questionnaire.items && props.questionnaire.items.forEach(x => {    //////////// CREATE ANOTHER SOLUTION!!!!
            props.questionnaireResponse && props.questionnaireResponse.addQuestionnaireResponseItem({ id: x.id, value: (x as Models.ITextItem).initialValue })
        })
    }

    render() {
        const { questionnaire, questionnaireResponse, className = '' } = this.props;
        return <div className={`card card-sm ${className}`}>
            <div className="card-header">
                <h2>{questionnaire && questionnaire.title}</h2>
                <h5>{questionnaire && questionnaire.description}</h5>
            </div>
            <div className="item-list card-body">
                {questionnaire && questionnaire.items && questionnaire.items.map(item => {
                    return <div key={item.id}>
                        {ItemProvider({ item, questionnaireResponseItem: questionnaireResponse && questionnaireResponse.items.find(x => x.id === item.id) })}
                    </div>
                }
                )}
            </div>
        </div>
    }
}

export default useObservableModel<QuestionnaireProps>(Questionnaire);