import * as React from 'react';
import { QuestionnaireProps } from '../interfaces/components/QuestionnaireProps';
import * as Models from '@art-forms/models';
import ItemProvider from './ItemProvider';
import useObservableModel from '../HOCs/useObservableModel';

export class Questionnaire extends React.Component<QuestionnaireProps> {
    constructor(props: QuestionnaireProps) {
        super(props);
        props.questionnaire && props.questionnaire.items && props.questionnaire.items.forEach(item => {    //////////// CREATE ANOTHER SOLUTION!!!!
            props.questionnaireResponse && props.questionnaireResponse.addQuestionnaireResponseItem({ id: item.id, value: (item as Models.ITextItem).initialValue, text: item.text })
        })
    }

    renderItemList() {
        const { questionnaire, questionnaireResponse } = this.props;
        return <div className="item-list card-body">
            {questionnaire && questionnaire.items && questionnaire.items.map(item => {
                return <div key={item.id}>
                    <ItemProvider {...{ item, questionnaireResponseItem: questionnaireResponse && questionnaireResponse.items.find(item => item.id === item.id) }} />
                </div>
            }
            )}
        </div>
    }

    render() {
        const { questionnaireResponse, questionnaire, className = '' } = this.props;
        return <div className={`card card-sm ${className}`}>
            <div className="card-header">
                <h2>{questionnaire && questionnaire.title}</h2>
                <h5>{questionnaire && questionnaire.description}</h5>
            </div>
            {this.renderItemList()}
            <button onClick={e => console.log(JSON.stringify(questionnaireResponse, null, 2))}>To console</button>
        </div>
    }
}

export default useObservableModel<QuestionnaireProps>(Questionnaire);