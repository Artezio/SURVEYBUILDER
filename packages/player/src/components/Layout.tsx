import * as React from 'react';
import QuestionnaireProps from '../interfaces/components/QuestionnaireProps';
import QuestionnairePlayer from './QuestionnairePlayer';

export class Layout extends React.Component<QuestionnaireProps> {

    render() {
        const { questionnaire, questionnaireResponse, className } = this.props;
        return <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
                <div className="navbar-collapse">
                    <a className="navbar-brand" href="#">Questionnaire</a>
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link disabled" href="javascript:void(0)">Design mode</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="javascript:void(0)">Play mode</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="main-area row">
                    <div className="col-12">
                        {questionnaire && <QuestionnairePlayer questionnaire={questionnaire} questionnaireResponse={questionnaireResponse} className={className} />}
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Layout;