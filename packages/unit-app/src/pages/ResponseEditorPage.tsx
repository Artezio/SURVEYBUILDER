import * as React from 'react';
import { Link } from 'react-router-dom';

export class ResponseEditorPage extends React.Component {
    render() {
        return <div>
            hello ResponseEditor
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/questionnaireId">Exact Questionnaire</Link>
                </li>
                <li>
                    <Link to="/responses">Responses</Link>
                </li>
            </ul>
        </div>
    }
}

export default ResponseEditorPage;