import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import QuestionnaireListPage from '../pages/QuestionnaireListPage';
import QuestionnaireEditor from '../pages/QuestionnaireEditor';
import ResponseListPage from '../pages/ResponseListPage';
import ResponseEditorPage from '../pages/ResponseEditorPage';
import PageNotFound from '../pages/PageNotFound';

type Theme = { id: number, node: HTMLLinkElement, name: string };
interface Props {
    themes?: { href: string, name: string }[];
}
export class MainLayout extends React.Component<Props> {
    themes: Theme[];
    currentThemeLink?: HTMLLinkElement;

    constructor(props: Props) {
        super(props);
        this.themes;
        if (Array.isArray(props.themes)) {
            this.themes = props.themes.map((theme, i) => this.prepareLinkForTheme(theme.href, i + 1, theme.name));
        } else {
            this.themes = [];
        }
    }

    prepareLinkForTheme(href: string, index, name): Theme {
        const link = document.createElement('link');
        link.setAttribute('type', 'text/css');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', href);
        return { id: index, node: link, name: name };
    }

    renderThemeList() {
        return this.themes.map(theme => <option value={theme.id}>{theme.name}</option>)
    }

    onChange(e) {
        const index = +e.target.value;
        if (index === 0) {
            this.removeCurrentTheme();
        } else {
            this.setTheme(index);
        }
    }

    setTheme(id: number) {
        const theme = this.themes.find(theme => theme.id === id);
        if (!theme) return;
        this.removeCurrentTheme(theme.node);
        document.body.appendChild(theme.node);
    }

    removeCurrentTheme(newTheme?: HTMLLinkElement) {
        this.currentThemeLink && document.body.removeChild(this.currentThemeLink);
        this.currentThemeLink = newTheme;
    }

    render() {
        return <div className="main">
            <Router>
                <section className="p-3 bg-secondary">
                    <div className="form-group mb-0 d-flex justify-content-between">
                        <div>
                            <Link to="/" className="btn btn-light">Home</Link>
                        </div>
                        <div className="d-flex justify-content-end align-items-center">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="bootstrapThemesToggler">Choose bootstrap theme: </label>
                                </div>
                                <select id="bootstrapThemesToggler" className="custom-select" onChange={this.onChange.bind(this)}>
                                    <option value={0}>Without theme</option>
                                    {this.renderThemeList()}
                                </select>
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