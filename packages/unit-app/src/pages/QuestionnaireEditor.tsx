import * as React from 'react';
import * as Models from '@art-forms/models';
import { QuestionnaireDesigner } from '@art-forms/designer';
import { Link } from 'react-router-dom';
import { questionnaireEditorPageActions } from '../redux/actions/questionnaireEditorPageActions';
import { connect } from 'react-redux';
import { STATUS_LOADING, MODE, STATUS_SAVING, STATUS_UPDATING } from '../constants/questionnaireEditorPage';
import { Spinner } from '../components/Spinner';
import { QuestionnaireEditorProps } from '../interface/questionnaireEditorPage/QuestionnaireEditorProps';
import { QuestionnaireLoadError } from '../components/questionnaireEditPage/QuestionnaireLoadError';
import { questionnaireMapper } from '@art-forms/fhir-converter';
import { QuestionnaireSavedPage } from '../components/questionnaireEditPage/QuestionnaireSavedPage';
import { QuestionnaireUpdatedPage } from '../components/questionnaireEditPage/QuestionnaireUpadatedPage';


class QuestionnaireEditorClass extends React.Component<QuestionnaireEditorProps> {
    mode?: string;
    questionnaire?: Models.Questionnaire;

    componentWillMount() {
        const { match, dispatch } = this.props;
        const questionnaireId = match && match.params && match.params.questionnaireId;
        if (questionnaireId === undefined) {
            dispatch(questionnaireEditorPageActions.createNewQuestionnaire());
        } else {
            dispatch(questionnaireEditorPageActions.loadQuestionnaire(questionnaireId));
        }
    }

    setQuestionnaire(questionnaire?: any) {
        if (questionnaire && (!this.questionnaire || questionnaire.id !== this.questionnaire.id)) {
            const mappedQuestionnaire = questionnaireMapper.toModel(questionnaire);
            this.questionnaire = new Models.Questionnaire(mappedQuestionnaire);
            this.forceUpdate();
        }
    }

    componentDidMount() {
        const { questionnaire } = this.props;
        this.setQuestionnaire(questionnaire);
    }

    componentDidUpdate() {
        const { questionnaire } = this.props;
        this.setQuestionnaire(questionnaire);
    }

    componentWillUnmount() {
        const { dispatch } = this.props;
        this.questionnaire = undefined;
        dispatch(questionnaireEditorPageActions.resetSavingStatus());
        dispatch(questionnaireEditorPageActions.resetUpdatingStatus());
    }

    renderSpinner() {
        const { status } = this.props;
        if (status.loading === STATUS_LOADING.fetching || status.saving === STATUS_SAVING.saving || status.updating === STATUS_UPDATING.updating) {
            return <Spinner />
        }
    }

    renderQuestionnaireDesigner() {
        const { status } = this.props;
        if (status.saving === STATUS_SAVING.saved) {
            return <QuestionnaireSavedPage />
        }
        if (status.updating === STATUS_UPDATING.updated) {
            return <QuestionnaireUpdatedPage />
        }
        if (status.loading === STATUS_LOADING.loaded) {
            return this.questionnaire && <QuestionnaireDesigner key={this.questionnaire.id} questionnaire={this.questionnaire} />
        }
        if (status.loading === STATUS_LOADING.error) {
            return <QuestionnaireLoadError />
        }
    }

    onClick() {
        const { mode, dispatch } = this.props;
        if (this.questionnaire) {
            const mappedQuestionnaire = questionnaireMapper.fromModel(this.questionnaire);
            if (mode === MODE.creating) {
                dispatch(questionnaireEditorPageActions.saveNewQuestionnaire(mappedQuestionnaire))
            }
            if (mode === MODE.updating && this.questionnaire) {
                dispatch(questionnaireEditorPageActions.updateQuestionnaireById(this.questionnaire.id, mappedQuestionnaire))
            }
        }
    }

    renderButtons() {
        const { status, mode } = this.props;
        const primaryButtonText = mode === MODE.creating ? 'Save' : 'Update and Save';
        if (status.loading === STATUS_LOADING.loaded && status.saving !== STATUS_SAVING.saved && status.updating !== STATUS_UPDATING.updated) {
            return <div className="d-flex justify-content-between">
                <Link to="/" className="btn btn-outline-danger">Cancel</Link>
                <button onClick={this.onClick.bind(this)} className="btn btn-outline-primary">{primaryButtonText}</button>
            </div>
        }
    }

    render() {
        return <div>
            {this.renderSpinner()}
            {this.renderQuestionnaireDesigner()}
            {this.renderButtons()}
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return { ...state.questionnaireEditorPage };
}

const QuestionnaireEditor = connect(mapStateToProps)(QuestionnaireEditorClass);
export { QuestionnaireEditor };
export default QuestionnaireEditor;