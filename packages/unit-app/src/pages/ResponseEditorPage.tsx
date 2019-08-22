import * as React from 'react';
import * as Models from '@art-forms/models';
import { ResponseEditorPageProps } from '../interface/responseERditorPage/ResponseEditorPageProps';
import { Spinner } from '../components/Spinner';
import { STATUS_QUESTIONNAIRE_LOADING, STATUS_RESPONSE_LOADING, STATUS_SAVING_RESPONSE, STATUS_UPDATING_RESPONSE } from '../constants/responseEditorPage';
import { QuestionnairePlayer } from '@art-forms/player';
import { connect } from 'react-redux';
import { responseEditorPageActions } from '../redux/actions/responseEditorPageActions';
import { ResponseSavedPage } from '../components/responseListPage/ResponseSavedPage';

export class ResponseEditorPage extends React.Component<ResponseEditorPageProps> {

    componentWillMount() {
        const { match, dispatch } = this.props;
        const questionnaireId = match && match.params.questionnaireId;
        const responseId = match && match.params.responseId;
        if (!questionnaireId) return;
        dispatch(responseEditorPageActions.loadQuestionnaireById(questionnaireId))
            .then(() => {
                if (responseId) {
                    dispatch(responseEditorPageActions.loadResponseById(responseId))
                } else {
                    dispatch(responseEditorPageActions.createNewResponse())
                }
            })
    }

    renderSpinner() {
        const { status } = this.props;
        if (status.loadingQuestionnaire === STATUS_QUESTIONNAIRE_LOADING.fetching ||
            status.loadingResponse === STATUS_RESPONSE_LOADING.fetching ||
            status.savingResponse === STATUS_SAVING_RESPONSE.saving ||
            status.updatingResponse === STATUS_UPDATING_RESPONSE.updating) {
            return <Spinner />
        }
    }

    putQuestionnaireResponse(questionnaireResponse: Models.IQuestionnaireResponse) {
        const { dispatch } = this.props;
        dispatch(responseEditorPageActions.saveResponse(questionnaireResponse));
    }

    renderQuestionnairePlayer() {
        const { status, questionnaire, responseModel } = this.props;
        if (status.loadingQuestionnaire === STATUS_QUESTIONNAIRE_LOADING.error) {
            return <div>
                <span className="text-danger">This Questionnaire does not exist any more</span>
            </div>
        }
        if (status.loadingQuestionnaire === STATUS_QUESTIONNAIRE_LOADING.loaded) {
            return responseModel && questionnaire && <QuestionnairePlayer key={responseModel.id} provider={{ putQuestionnaireResponse: this.putQuestionnaireResponse.bind(this) }} questionnaire={questionnaire} questionnaireResponse={responseModel} />
        }
        if (status.savingResponse === STATUS_SAVING_RESPONSE.saved) {
            return <ResponseSavedPage />;
        }
    }

    render() {
        return <div className="container">
            {this.renderSpinner()}
            {this.renderQuestionnairePlayer()}
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return { ...state.responseEditorPage }
}

// const ResponseEditorPage = connect(mapStateToProps)(ResponseEditorPageClass);
// export { ResponseEditorPage };
export default connect(mapStateToProps)(ResponseEditorPage);