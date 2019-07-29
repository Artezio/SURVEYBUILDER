import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import QuestionnaireListPage from '../pages/QuestionnaireListPage';
import QuestionnaireEditor from '../pages/QuestionnaireEditor';
import ResponseList from '../pages/ResponseList';
import ResponseEditor from '../pages/ResponseEditor';
import PageNotFound from '../pages/PageNotFound';

export class MainLayout extends React.Component {

    render() {
        return <div className="main">
            <section className="p-3 bg-secondary">
                <div className="form-group row mb-0 d-flex justify-content-around">
                    <input value=" http://hapi.fhir.org/baseR4/Questionaire" type="text" className="form-control col-10" disabled />
                    <button className="btn btn-light col-1">Search</button>
                </div>
            </section>
            <section className="p-3">
                <Router>
                    <Switch>
                        <Route exact={true} path="/" component={QuestionnaireListPage} />
                        <Route path="/questionnaire/:questionnaireId" component={QuestionnaireEditor} />
                        <Route path="/responses/:questionnaireId" component={ResponseList} />
                        <Route path="/response/questionnaireId" component={ResponseEditor} />
                        <Route component={PageNotFound} />
                    </Switch>
                </Router>
            </section>
        </div>
    }
}

export default MainLayout;