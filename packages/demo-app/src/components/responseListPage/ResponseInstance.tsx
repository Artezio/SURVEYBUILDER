import * as React from 'react';
import { ResponseInstanceProps } from '../../interface/components/ResponseInstanceProps';
import { Link } from 'react-router-dom';

export const ResponseInstance = (props: ResponseInstanceProps) => {
    const { response, orderIndex } = props;
    let date = response.meta && response.meta.lastUpdated;
    date = date ? new Date(date).toLocaleString() : 'Response time not set';
    return <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
            <h4>№{orderIndex}</h4>
            <div className="d-flex justify-content-end">
                <Link className="btn btn-outline-secondary"
                    to={`/questionnaire/${response.questionnaire.slice(14)}/response/${response.id}`}
                    title="Edit response">
                    <i className="fas fa-pencil-alt"></i>
                </Link>
            </div>
        </div>
    </li>
}