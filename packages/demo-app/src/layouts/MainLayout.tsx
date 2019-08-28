import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import QuestionnaireListPage from '../pages/QuestionnaireListPage';
import QuestionnaireEditor from '../pages/QuestionnaireEditor';
import ResponseListPage from '../pages/ResponseListPage';
import ResponseEditorPage from '../pages/ResponseEditorPage';
import PageNotFound from '../pages/PageNotFound';

export class MainLayout extends React.Component {
    darkThemeLink: HTMLLinkElement;

    constructor(props: any) {
        super(props);
        this.darkThemeLink = document.createElement('link');
        this.darkThemeLink.setAttribute('rel', 'stylesheet');
        this.darkThemeLink.setAttribute('type', 'text/css');
        this.darkThemeLink.setAttribute('href', 'https://bootswatch.com/4/cyborg/bootstrap.css');
    }

    toggleTheme(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.checked) {
            this.addDarkTheme();
        } else {
            this.removeDarkTheme();
        }
    }

    addDarkTheme() {
        document.body.appendChild(this.darkThemeLink);
    }

    removeDarkTheme() {
        document.body.removeChild(this.darkThemeLink);
    }

    render() {
        return <div className="main">
            <Router>
                <section className="p-3 bg-secondary">
                    <div className="form-group row mb-0 d-flex justify-content-around">
                        <div className="col-1">
                            <Link to="/" className="btn btn-light">Home</Link>
                        </div>
                        <div className="col">
                            <input value="http://hapi.fhir.org/baseR4" type="text" className="form-control" disabled />
                        </div>
                        <div className="col d-flex justify-content-end align-items-center">
                            <div className="custom-control custom-checkbox">
                                <input id="themeTrigger" type="checkbox" className="custom-control-input" onChange={this.toggleTheme.bind(this)} />
                                <label htmlFor="themeTrigger" className="custom-control-label text-light">Dark theme</label>
                            </div>
                        </div>
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