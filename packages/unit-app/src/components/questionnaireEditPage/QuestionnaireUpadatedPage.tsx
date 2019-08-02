import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { questionnaireEditorPageActions } from '../../redux/actions/questionnaireEditorPageActions';


export const QuestionnaireUpdatedPage = ({ questionnaire }: any) => {
    return <div className="alert alert-success">
        <h4 className="alert-heading">Thanks for the work done</h4>
        <p>Questionnaire {!!questionnaire && !!questionnaire.title && questionnaire.title} was successfully updated</p>
        <hr />
        <div className="d-flex justify-content-center align-items-center">
            <Link className="btn btn-primary mx-3" to="/">Home</Link>
            {questionnaire && <Link to={`/questionnaire/${questionnaire.id}/response`} className="btn btn-warning mx-3"><i className="fas fa-play"></i></Link>}
        </div>
    </div>
}