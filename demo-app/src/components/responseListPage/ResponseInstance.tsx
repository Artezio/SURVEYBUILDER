import * as React from 'react';
import { ResponseInstanceProps } from '../../interface/components/ResponseInstanceProps';
import { Link } from 'react-router-dom';

export const ResponseInstance = (props: ResponseInstanceProps) => {
    const { response, orderIndex } = props;
    const date = !!response.authored && new Date(response.authored).toLocaleString();
    return <li className="list-group-item list-group-item-action">
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <h4 className="mb-0">№{orderIndex}</h4>
                {date && <div>
                    <small>Last update: </small>
                    <small>{date}</small>
                </div>
                }
            </div>
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