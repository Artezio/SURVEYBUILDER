import * as React from 'react';
import { Link } from 'react-router-dom';

export class PageNotFound extends React.Component {
    render() {
        return <div>
            404
            <br />
            <Link to="/">Home</Link>
        </div>
    }
}

export default PageNotFound;