import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import QuestionnaireListPage from '../pages/QuestionnaireListPage';
import QuestionnaireEditor from '../pages/QuestionnaireEditor';
import ResponseListPage from '../pages/ResponseListPage';
import ResponseEditorPage from '../pages/ResponseEditorPage';
import PageNotFound from '../pages/PageNotFound';

export class MainLayout extends React.Component {

    render() {
        return <div className="main">
            <Router>
                <section className="p-3 bg-secondary">
                    <div className="form-group row mb-0 d-flex justify-content-around">
                        <Link to="/" className="btn btn-light col-1">Home</Link>
                        <input value=" http://hapi.fhir.org/baseR4/Questionaire" type="text" className="form-control col-10" disabled />
                    </div>
                </section>
                <section className="p-3">
                    <Switch>
                        <Route exact={true} path="/" component={QuestionnaireListPage} />
                        <Route exact={true} path="/questionnaire" component={QuestionnaireEditor} />
                        <Route exact={true} path="/questionnaire/:questionnaireId" component={QuestionnaireEditor} />
                        <Route path="/responses/:questionnaireId" component={ResponseListPage} />
                        <Route exact={true} path="/questionnaire/:questionnaireId/response" component={ResponseEditorPage} />
                        <Route path="/questionnaire/:questionnaireId/response/:responseId" component={ResponseEditorPage} />
                        <Route component={PageNotFound} />
                    </Switch>
                </section>
            </Router>
        </div>
    }
}

export default MainLayout;