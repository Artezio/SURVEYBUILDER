import * as React from 'react';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import * as Models from '@art-forms/models';
import ItemProvider from './ItemProvider';
import useObservableModel from '../HOCs/useObservableModel';

export class Questionnaire extends React.Component<QuestionnaireProps> {
    questionnaireResponse?: Models.QuestionnaireResponse;

    constructor(props: QuestionnaireProps) {
        super(props);
        props.questionnaire && props.questionnaire.items.forEach(x => {    //////////// CREATE ANOTHER SOLUTION!!!!
            props.questionnaireResponse && (!props.questionnaireResponse.items.some(item => item.id === x.id)) && props.questionnaireResponse.addQuestionnaireResponseItem({ id: x.id })
        })
    }

    render() {
        const { questionnaire, questionnaireResponse, className = '' } = this.props;
        return <div className={`questionnaire border border-secondary ${className}`}>
            <h2>{questionnaire && questionnaire.title}</h2>
            <h3>{questionnaire && questionnaire.description}</h3>
            <div className="item-list row my-3">
                {questionnaire && questionnaire.items && questionnaire.items.map(item => {
                    return <div className="col-12" key={item.id}>
                        {ItemProvider({ item, questionnaireResponseItem: questionnaireResponse && questionnaireResponse.items.find(x => x.id === item.id) })}
                    </div>
                }
                )}
            </div>
        </div>
    }
}

export default useObservableModel<QuestionnaireProps>(Questionnaire);