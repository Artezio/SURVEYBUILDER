import * as React from 'react';
import { Link } from 'react-router-dom';
import { ResponseListPageProps } from '../interface/reponseListPage/ResponseListPageProps';
import { ResponseList } from '../components/responseListPage/ResponseList';
import { STATUS_RESPONSE_LIST_LOADING, STATUS_QUESTIONNAIRE_LOADING } from '../constants/responseListPage';
import { connect } from 'react-redux';
import { responseListPageActions } from '../redux/actions/responseListPageActions';
import { Spinner } from '../components/Spinner';
import { ResponseListLoadError } from '../components/responseListPage/ResponseListLoadError';
import LoadingQuestionnaireError from '../components/responseListPage/LoadingQuestionnaireError';


export class ResponseListPage extends React.Component<ResponseListPageProps> {
    questionnaire: any;

    componentWillMount() {
        const { dispatch, match } = this.props;
        const questionnaireId = match && match.params.questionnaireId;
        if (questionnaireId) {
            dispatch(responseListPageActions.loadQuestionnaireById(questionnaireId))
            dispatch(responseListPageActions.loadResponseListByQuestionnaireId(questionnaireId))
        }
    }

    renderSpinner() {
        const { status } = this.props;
        if (status.loadingResponseList === STATUS_RESPONSE_LIST_LOADING.fetching || status.loadingQuestionnaire === STATUS_QUESTIONNAIRE_LOADING.fetching) {
            return <Spinner />
        }
    }

    renderResponseList() {
        const { status, responseList } = this.props;
        if (status.loadingQuestionnaire === STATUS_QUESTIONNAIRE_LOADING.error) return;

        if (status.loadingResponseList === STATUS_RESPONSE_LIST_LOADING.error) {
            return <ResponseListLoadError />
        }
        if (status.loadingResponseList === STATUS_RESPONSE_LIST_LOADING.loaded) {
            return responseList && <ResponseList responseList={responseList} />
        }
    }

    renderHeadLine() {
        const { match, status, questionnaire } = this.props;
        const questionnaireId = match && match.params.questionnaireId;
        if (status.loadingQuestionnaire === STATUS_QUESTIONNAIRE_LOADING.loaded) {
            return questionnaire && <div>
                <h2>{questionnaire.title || 'Untitled Questionnaire'}</h2>
                <div className="d-flex justify-content-center">
                    <Link className="btn btn-outline-secondary" to={`/questionnaire/${questionnaireId}/response`} title="Start questionnaire">
                        <i className="fas fa-play"></i>
                        </Link>
                </div>
            </div>
        }
        if (status.loadingQuestionnaire === STATUS_QUESTIONNAIRE_LOADING.error) {
            return <LoadingQuestionnaireError />
        }
    }

    render() {
        return <div className="container">
            <h1>List of responses</h1>
            <hr />
            {this.renderSpinner()}
            {this.renderHeadLine()}
            {this.renderResponseList()}
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return { ...state.responseListPage, questionnaireList: state.questionnaireListPage.questionnaireList }
}

// const ResponseListPage = connect(mapStateToProps)(ResponseListPageClass);
// export { ResponseListPage };
export default connect(mapStateToProps)(ResponseListPage);