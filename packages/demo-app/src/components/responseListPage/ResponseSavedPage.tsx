import * as React from 'react';
import { Link } from 'react-router-dom';


export const ResponseSavedPage = () => {
    return <div className="alert alert-success">
        <h4 className="alert-heading">Thanks for the work done</h4>
        <p>{`Your response was saved`}</p>
        <hr />
        <div className="d-flex justify-content-center align-items-center">
            <Link className="btn btn-primary" to="/">Home</Link>
        </div>
    </div>
}