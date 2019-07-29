import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { questionnaireListPageActions } from '../redux/actions/questionnaireListPageActions';
import { QuestionnaireList } from '../components/questionnaireListPage/QuestionnaireList';
import { STATUS } from '../constants/questionnaireListPage';

class QuestionnaireListPageClass extends React.Component<any> {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(questionnaireListPageActions.loadQuestionnaireList());
    }

    renderContent() {
        console.log(this.props)
        const { questionnaireListPage: { status, questionnaireList } } = this.props;
        if (status === STATUS.fetchingQuestionnaireList) {
            return <div>
                Спинер!
            </div>
        }
        if (status === STATUS.loadedQuestionnaireList) {
            return questionnaireList && <QuestionnaireList questionnaireList={questionnaireList} />
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
    return { questionnaireListPage: state.questionnaireListPage };
}

const QuestionnaireListPage = connect(mapStateToProps)(QuestionnaireListPageClass);
export { QuestionnaireListPage };
export default QuestionnaireListPage;