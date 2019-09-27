import * as React from 'react';
import { Link } from 'react-router-dom';

export class PageNotFound extends React.Component {
    render() {
        return <div className="d-flex flex-column justify-content-center align-items-center font-weight-bold">
            <p className="mb-0">404</p>
            <p>Page not found</p>
            <Link className="btn btn-link btn-lg btn-block" to="/">Home</Link>
        </div>
    }
}

export default PageNotFound;