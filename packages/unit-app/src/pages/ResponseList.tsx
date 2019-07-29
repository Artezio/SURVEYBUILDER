import * as React from 'react';
import { Link } from 'react-router-dom';

export class ResponseList extends React.Component {
    render() {
        return <div>
            Hello response list!!!
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/questionnaireId">Exact Questionnaire</Link>
                </li>
                <li>
                    <Link to="/response/questionnaireId">Exact Response</Link>
                </li>
            </ul>
        </div>
    }
}

export default ResponseList;