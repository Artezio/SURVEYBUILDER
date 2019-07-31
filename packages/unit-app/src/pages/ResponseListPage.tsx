import * as React from 'react';
import { Link } from 'react-router-dom';
import { ResponseListPageProps } from '../interface/reponseListPage/ResponseListPageProps';
import { ResponseList } from '../components/responseListPage/ResponseList';
import { STATUS_LOADING } from '../constants/responseListPage';
import { connect } from 'react-redux';
import { responseListPageActions } from '../redux/actions/responseListPageActions';
import { Spinner } from '../components/Spinner';

export class ResponseListPageClass extends React.Component<ResponseListPageProps> {

    componentWillMount() {
        const { dispatch, match } = this.props;
        const questionnaireId = match && match.params.questionnaireId;
        if (questionnaireId) {
            dispatch(responseListPageActions.loadResponseListByQuestionnaireId(questionnaireId))
        }
    }

    renderSpinner() {
        const { status } = this.props;
        if (status.loading === STATUS_LOADING.fetching) {
            return <Spinner />
        }
    }

    renderResponseList() {
        const { status, responseList } = this.props;
        if (status.loading === STATUS_LOADING.loaded) {
            return responseList && <ResponseList responseList={responseList} />
        }
    }

    render() {
        return <div>
            {this.renderSpinner()}
            {this.renderResponseList()}
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return { ...state.responseListPage }
}

const ResponseListPage = connect(mapStateToProps)(ResponseListPageClass);

export default ResponseListPage;