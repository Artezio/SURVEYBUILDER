import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { questionnaireListPageActions } from '../redux/actions/questionnaireListPageActions';
import { QuestionnaireList } from '../components/questionnaireListPage/QuestionnaireList';
import { STATUS_LOADING, STATUS_DELETING } from '../constants/questionnaireListPage';
import { Spinner } from '../components/Spinner';
import { QuestionnaireListProps } from '../interface/questionnaireListPage/QuestionnaireListProps';

class QuestionnaireListPageClass extends React.Component<QuestionnaireListProps> {

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

    renderQuestionnaireList() {
        const { status, questionnaireList } = this.props;
        if (status.loading === STATUS_LOADING.loaded) {
            return questionnaireList && <QuestionnaireList questionnaireList={questionnaireList} />
        }
    }

    render() {
        return <div className="container">
            {this.renderSpinner()}
            <div className="row justify-content-start mb-3">
                <div className="col">
                    <Link to="/questionnaire" className="btn btn-outline-secondary">Create new Questionnaire</Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {this.renderQuestionnaireList()}
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return { ...state.questionnaireListPage };
}

const QuestionnaireListPage = connect(mapStateToProps)(QuestionnaireListPageClass);
export { QuestionnaireListPage };
export default QuestionnaireListPage;