import * as React from 'react';
import { QuestionnaireDesigner } from '@art-forms/designer';
import { Link } from 'react-router-dom';
import { questionnaireEditorPageActions } from '../redux/actions/questionnaireEditorPageActions';
import { connect } from 'react-redux';
import { STATUS_LOADING, MODE, STATUS_SAVING, STATUS_UPDATING } from '../constants/questionnaireEditorPage';
import { Spinner } from '../components/Spinner';
import { QuestionnaireEditorPageProps } from '../interface/questionnaireEditorPage/QuestionnaireEditorPageProps';
import { QuestionnaireLoadError } from '../components/questionnaireEditPage/QuestionnaireLoadError';
import { questionnaireConverter } from '@art-forms/fhir-converter';
import { QuestionnaireSavedPage } from '../components/questionnaireEditPage/QuestionnaireSavedPage';
import { QuestionnaireUpdatedPage } from '../components/questionnaireEditPage/QuestionnaireUpadatedPage';


export class QuestionnaireEditor extends React.Component<QuestionnaireEditorPageProps> {

    componentWillMount() {
        const { match, dispatch } = this.props;
        const questionnaireId = match && match.params && match.params.questionnaireId;
        if (questionnaireId === undefined) {
            dispatch(questionnaireEditorPageActions.createNewQuestionnaire());
        } else {
            dispatch(questionnaireEditorPageActions.loadQuestionnaire(questionnaireId));
        }
    }

    renderSpinner() {
        const { status } = this.props;
        if (status.loading === STATUS_LOADING.fetching ||
            status.saving === STATUS_SAVING.saving ||
            status.updating === STATUS_UPDATING.updating) {
            return <Spinner />
        }
    }

    renderQuestionnaireDesigner() {
        const { status, questionnaireModel } = this.props;
        if (status.loading === STATUS_LOADING.loaded) {
            return questionnaireModel && <QuestionnaireDesigner key={questionnaireModel.id} questionnaireModel={questionnaireModel} />
        }
        if (status.loading === STATUS_LOADING.error) {
            return <QuestionnaireLoadError />
        }
        if (!status.loading) {
            if (status.saving === STATUS_SAVING.saved) {
                return <QuestionnaireSavedPage questionnaire={questionnaireModel} />
            }
            if (status.updating === STATUS_UPDATING.updated) {
                return <QuestionnaireUpdatedPage questionnaire={questionnaireModel} />
            }
        }
    }

    onClick() {
        const { mode, dispatch, questionnaireModel } = this.props;
        if (questionnaireModel) {
            const mappedQuestionnaire = questionnaireConverter.fromModel(questionnaireModel);
            if (mode === MODE.creating) {
                dispatch(questionnaireEditorPageActions.saveNewQuestionnaire(mappedQuestionnaire))
            }
            if (mode === MODE.updating && questionnaireModel) {
                dispatch(questionnaireEditorPageActions.updateQuestionnaireById(questionnaireModel.id, mappedQuestionnaire))
            }
        }
    }

    renderButtons() {
        const { status } = this.props;
        if (status.loading === STATUS_LOADING.loaded) {
            return <div className="d-flex justify-content-between">
                <Link to="/" className="btn btn-outline-danger">Cancel</Link>
                <button onClick={this.onClick.bind(this)} className="btn btn-outline-primary">Save</button>
            </div>
        }
    }

    render() {
        return <div className="container">
            {this.renderSpinner()}
            {this.renderQuestionnaireDesigner()}
            {this.renderButtons()}
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return { ...state.questionnaireEditorPage };
}

// const QuestionnaireEditor = connect(mapStateToProps)(QuestionnaireEditorClass);
// export { QuestionnaireEditor };
export default connect(mapStateToProps)(QuestionnaireEditor);