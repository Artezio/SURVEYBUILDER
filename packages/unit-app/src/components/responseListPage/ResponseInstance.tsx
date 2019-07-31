import * as React from 'react';
import { ResponseInstanceProps } from '../../interface/components/ResponseInstanceProps';

export const ResponseInstance = (props: ResponseInstanceProps) => {

    return <li className="list-group-item">
        <div className="row">
            <div className="col-4">

            </div>
            <div className="col">
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-success">
                        <i className="fas fa-play"></i>
                    </button>
                </div>
            </div>
        </div>
    </li>
}