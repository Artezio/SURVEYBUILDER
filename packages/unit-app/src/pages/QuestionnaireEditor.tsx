import * as React from 'react';
import * as Models from '@art-forms/models';
import { QuestionnaireDesigner } from '@art-forms/designer';
import { Link } from 'react-router-dom';
import { questionnaireEditorPageActions } from '../redux/actions/questionnaireEditorPageActions';
import { connect } from 'react-redux';
import { STATUS } from '../constants/questionnaireEditorPage';


class QuestionnaireEditorClass extends React.Component<any> {
    questionnaireId?: string;
    mode?: string;

    componentWillMount() {
        const { match, dispatch } = this.props;
        this.questionnaireId = match.params.questionnaireId;
        dispatch(questionnaireEditorPageActions.loadQuestionnaire(this.questionnaireId));
    }

    renderContent() {
        const { questionnaireEditorPage: { status, questionnaire } } = this.props;
        if (status === STATUS.fetchingQuestionnaire) {
            return <div>Спинер!</div>
        }
        if (status === STATUS.loadedQuestionnaire) {
            return questionnaire && <QuestionnaireDesigner questionnaire={new Models.Questionnaire(questionnaire)} />
        }
        return <div>Error</div>
    }

    render() {
        return <div>
            {this.renderContent()}
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return { questionnaireEditorPage: state.questionnaireEditorPage };
}

const QuestionnaireEditor = connect(mapStateToProps)(QuestionnaireEditorClass);
export { QuestionnaireEditor };
export default QuestionnaireEditor;