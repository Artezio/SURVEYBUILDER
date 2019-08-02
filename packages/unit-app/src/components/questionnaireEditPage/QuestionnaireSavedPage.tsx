import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { questionnaireEditorPageActions } from '../../redux/actions/questionnaireEditorPageActions';


export const QuestionnaireSavedPage = () => {

    return <div className="alert alert-success">
        <h4 className="alert-heading">Thanks for the work done</h4>
        <p>{`Questionnaire was successfully saved`}</p>
        <hr />
        <div className="d-flex justify-content-center align-items-center">
            <Link className="btn btn-primary" to="/">Home</Link>
        </div>
    </div>
}