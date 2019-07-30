import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { questionnaireListPageActions } from '../redux/actions/questionnaireListPageActions';
import { QuestionnaireList } from '../components/questionnaireListPage/QuestionnaireList';
import { STATUS_LOADING, STATUS_DELETING } from '../constants/questionnaireListPage';
import { Spinner } from '../components/Spinner';

class QuestionnaireListPageClass extends React.Component<any> {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(questionnaireListPageActions.loadQuestionnaireList());
    }

    renderSpinner() {
        const { status } = this.props;
        if (status.loading === STATUS_LOADING.fetching || status.deleting === STATUS_DELETING.deleting) {
            return <Spinner />
        }
    }

    componentDidUpdate() {  ///// КОСТЫЛЬ MUST TO BE REMOVED!!!!
        const { dispatch, status, questionnaireList } = this.props;
        if (status.loading !== STATUS_LOADING.fetching && status.deleting === STATUS_DELETING.deletingEnded && questionnaireList.length !== 10) {
            dispatch(questionnaireListPageActions.loadQuestionnaireList());
        }
    }

    renderQuestionnaireList() {
        const { status, questionnaireList } = this.props;
        if (status.loading === STATUS_LOADING.loaded) {
            return questionnaireList && <QuestionnaireList questionnaireList={questionnaireList} />
        }
    }

    render() {
        return <div>
            {this.renderSpinner()}
            <div className="d-flex justify-content-end mb-1">
                <Link to="/questionnaire" className="btn btn-outline-secondary">Create new Questionnaire</Link>
            </div>
            {this.renderQuestionnaireList()}
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return { ...state.questionnaireListPage };
}

const QuestionnaireListPage = connect(mapStateToProps)(QuestionnaireListPageClass);
export { QuestionnaireListPage };
export default QuestionnaireListPage;