import * as React from 'react';
import { Link } from 'react-router-dom';


export const QuestionnaireSavedPage = ({ questionnaire }: any) => {

    return <div className="alert alert-success">
        <h4 className="alert-heading">Thanks for the work done</h4>
        <p>Questionnaire {} was successfully saved</p>
        <hr />
        <div className="d-flex justify-content-center align-items-center">
            <Link className="btn btn-primary mx-3" to="/" title="Return to home page">Home</Link>
            {questionnaire && <Link to={`/questionnaire/${questionnaire.id}/response`} className="btn btn-warning mx-3"><i className="fas fa-play"></i></Link>}
        </div>
    </div>
}