import * as React from 'react';
import * as Models from '@art-forms/models';
import { ResponseEditorPageProps } from '../interface/responseERditorPage/ResponseEditorPageProps';
import { Spinner } from '../components/Spinner';
import { STATUS_QUESTIONNAIRE_LOADING, STATUS_RESPONSE_LOADING, MODE } from '../constants/responseEditorPage';
import { QuestionnairePlayer } from '@art-forms/player';
import { connect } from 'react-redux';
import { responseEditorPageActions } from '../redux/actions/responseEditorPageActions';
import { questionnaireMapper, questionnaireResponseMapper } from '@art-forms/fhir-converter';

export class ResponseEditorPageClass extends React.Component<ResponseEditorPageProps> {
    questionnaireResponse?: Models.QuestionnaireResponse;
    questionnaire?: Models.IQuestionnaire;

    componentWillMount() {
        const { match, dispatch } = this.props;
        const questionnaireId = match && match.params.questionnaireId;
        const responseId = match && match.params.responseId;
        if (responseId) {
            dispatch(responseEditorPageActions.setModeToUpdating())
        }
        else {
            dispatch(responseEditorPageActions.setModeToCreating())
        }
        if (questionnaireId) {
            dispatch(responseEditorPageActions.loadQuestionnaireById(questionnaireId))
        }
        if (responseId) {
            dispatch(responseEditorPageActions.loadResponseId(responseId))
        }
    }

    componentDidMount() {
        const { questionnaire, response } = this.props;
        this.setQuestionnaire(questionnaire);
        this.setResponse(response);
    }

    componentDidUpdate() {
        const { questionnaire, response } = this.props;
        this.setQuestionnaire(questionnaire);
        this.setResponse(response);
    }

    setQuestionnaire(questionnaire: any) {
        if (questionnaire && (!this.questionnaire || this.questionnaire.id !== questionnaire.id)) {
            const mappedQuestionnaire = questionnaireMapper.toModel(questionnaire);
            this.questionnaire = mappedQuestionnaire;
            this.forceUpdate();
        }
    }

    setResponse(response: any) {
        const { mode } = this.props;
        if (mode === MODE.creating) {
            if (this.questionnaire && !this.questionnaireResponse) {
                this.questionnaireResponse = new Models.QuestionnaireResponse(this.questionnaire);
                this.forceUpdate();
            }
        }
        if (mode === MODE.updating) {

        }
    }

    renderSpinner() {
        const { status } = this.props;
        if (status.loadingQuestionnaire === STATUS_QUESTIONNAIRE_LOADING.fetching || status.loadingResponse === STATUS_RESPONSE_LOADING.fetching) {
            return <Spinner />
        }
    }

    putQuestionnaireResponse(questionnaireResponse: Models.IQuestionnaireResponse) {
        const { dispatch } = this.props;
        const mappedResponse = questionnaireResponseMapper.fromModel(questionnaireResponse);
        dispatch(responseEditorPageActions.saveResponse(mappedResponse));
    }

    renderQuestionnairePlayer() {
        const { mode, status } = this.props;
        if (mode === MODE.creating) {
            if (status.loadingQuestionnaire === STATUS_QUESTIONNAIRE_LOADING.loaded) {
                return this.questionnaireResponse && this.questionnaire && <QuestionnairePlayer provider={{ putQuestionnaireResponse: this.putQuestionnaireResponse.bind(this) }} questionnaire={this.questionnaire} questionnaireResponse={this.questionnaireResponse} />
            }
        }
        if (mode === MODE.updating) {

        }
    }

    render() {
        return <div>
            {this.renderSpinner()}
            {this.renderQuestionnairePlayer()}
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return { ...state.responseEditorPage }
}

const ResponseEditorPage = connect(mapStateToProps)(ResponseEditorPageClass);
export { ResponseEditorPage };
export default ResponseEditorPage;