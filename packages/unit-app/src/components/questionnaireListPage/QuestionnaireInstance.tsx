import * as React from 'react';
import { Link } from 'react-router-dom';

export const QuestionnaireInstance = (props: any) => {
    const { questionnaire } = props;
    return <li className="list-group-item">
        <div className="row">
            <div className="col-4">
                <Link to={`/questionnaire/${questionnaire.id}`}>{questionnaire.title || 'Untitled Questionnaire'}</Link>
            </div>
            <div className="col-2">
                <button className="btn btn-outline-danger"><i className="fas fa-trash"></i></button>
            </div>
            <div className="col-4">
                <Link to={`/responses/${questionnaire.id}`}>Responses</Link>
            </div>
            <div className="col-2">
                <button className="btn btn-outline-success"><i className="fas fa-play"></i></button>
            </div>
        </div>
    </li>
}