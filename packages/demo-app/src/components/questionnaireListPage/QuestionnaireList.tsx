import * as React from 'react';
import { QuestionnaireInstance } from './QuestionnaireInstance';
interface QuestionnaireListProps {
    questionnaireList: any[];
}
export class QuestionnaireList extends React.Component<QuestionnaireListProps> {

    render() {
        const { questionnaireList } = this.props;
        return <div>
            <ul className="list-group list-group-flush">
                {questionnaireList.map(questionnaire => <QuestionnaireInstance key={questionnaire.id} questionnaire={questionnaire} />)}
            </ul>
        </div>
    }
}