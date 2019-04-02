import * as React from 'react';
import LayoutProps from '../interfaces/components/LayoutProps';
import QuestionnairePlayer from './QuestionnairePlayer';

export class Layout extends React.Component<LayoutProps> {

    render() {
        const { questionnaire, questionnaireResponse, className } = this.props;
        return <div className="container-fluid">
            <nav className="row navbar navbar-expand-sm navbar-light bg-light">
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
            <div className="main-area row py-5 justify-content-center">
                <div className="col-10">
                    {questionnaire && <QuestionnairePlayer questionnaire={questionnaire} questionnaireResponse={questionnaireResponse} className={className} />}
                </div>
            </div>
        </div>
    }
}

export default Layout;