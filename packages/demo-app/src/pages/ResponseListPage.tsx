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
import { questionnaireListPageActions } from '../redux/actions/questionnaireListPageActions';
import { withRouter } from 'react-router-dom';

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

    onClick() {
        const { dispatch, questionnaire, history } = this.props;
        dispatch(questionnaireListPageActions.deleteQuestionnaireConfirmed(questionnaire.id))
            .then(({ data, error }) => {
                if (error) {
                    alert(error.message);
                } else {
                    history.push('/');
                }
            })
        // if (questionnaire.immortal) {
        //     alert('Impossible to delete this questionnaire!');
        //     return;
        // }
        // if (confirm('Are you sure you want to delete this questionnaire?')) {
        //     dispatch(questionnaireListPageActions.deleteQuestionnaire(questionnaire.id))
        //         .then(({ data, error }) => {
        //             if (error) {
        //                 alert(error.message);
        //             } else {
        //                 history.push('/');
        //             }
        //         })
        // }
    }

    renderSpinner() {
        const { status } = this.props;
        if (status.loadingResponseList === STATUS_RESPONSE_LIST_LOADING.fetching || status.loadingQuestionnaire === STATUS_QUESTIONNAIRE_LOADING.fetching) {
            return <Spinner />
        }
    }

    renderResponseList() {
        const { status, responseList, questionnaire } = this.props;
        if (status.loadingQuestionnaire === STATUS_QUESTIONNAIRE_LOADING.error) return;

        if (status.loadingResponseList === STATUS_RESPONSE_LIST_LOADING.error) {
            return <ResponseListLoadError />
        }
        if (status.loadingResponseList === STATUS_RESPONSE_LIST_LOADING.loaded) {
            return <ResponseList responseList={responseList} questionnaire={questionnaire} />
        }
    }


    renderHeadLine() {
        const { match, status, questionnaire } = this.props;
        const questionnaireId = match && match.params.questionnaireId;
        const publisher = questionnaire && questionnaire.publisher;
        const date = questionnaire && questionnaire.date && new Date(questionnaire.date).toLocaleString();
        if (status.loadingQuestionnaire === STATUS_QUESTIONNAIRE_LOADING.loaded) {
            return questionnaire && <div>
                <div className="d-flex align-items-baseline justify-content-between mb-3">
                    <div>
                        <h1>{questionnaire && questionnaire.title || 'Untitled Questionnaire'}</h1>
                        {(!!publisher || !!date) && <div className="mr-3">
                            {!!publisher && <div><span className="font-weight-bold">Publisher:</span> <span>{publisher}</span></div>}
                            {!!date && <div><span className="font-weight-bold">Last updated:</span> <span>{date}</span></div>}
                        </div>}
                    </div>
                    <div>
                        <button className="btn btn-outline-secondary mr-2" onClick={this.onClick.bind(this)}>
                            <i className="fas fa-trash"></i>
                        </button>
                        <Link to={`/questionnaire/${questionnaire.id}`} className="btn btn-outline-secondary" title="Edit questionnaire">
                            <i className="fas fa-pencil-alt" />
                        </Link>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">The list of responses:</h5>
                    <Link className="btn btn-outline-secondary" to={`/questionnaire/${questionnaireId}/response`} title="Pass questionnaire">
                        Add response
                    </Link>
                </div>
                <hr />
            </div>
        }
        if (status.loadingQuestionnaire === STATUS_QUESTIONNAIRE_LOADING.error) {
            return <LoadingQuestionnaireError />
        }
    }

    render() {
        return <div className="container">
            {this.renderSpinner()}
            {this.renderHeadLine()}
            {this.renderResponseList()}
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return { ...state.responseListPage, questionnaireList: state.questionnaireListPage.questionnaireList }
}

export default connect(mapStateToProps)(withRouter(ResponseListPage));