import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import QuestionnaireListPage from '../pages/QuestionnaireListPage';
import QuestionnaireEditor from '../pages/QuestionnaireEditor';
import ResponseListPage from '../pages/ResponseListPage';
import ResponseEditorPage from '../pages/ResponseEditorPage';
import PageNotFound from '../pages/PageNotFound';
import { MainLayoutProps, Theme, MainLayoutStore, MainLayoutOwnProps } from '../interface/layouts/MainLayoutProps';
import { Store } from '../interface/Store';
import { connect } from 'react-redux';
import { mainLayoutActions } from '../redux/actions/mainLayoutActions';
import { bootstrapCurrentThemeService } from '../providers/services/localStorageServises/bootstrapThemesService';

const nativeTheme: Theme = { title: 'Native bootstrap', href: '' };

export class MainLayout extends React.Component<MainLayoutProps> {
    currentThemeNode?: HTMLLinkElement;

    constructor(props: MainLayoutProps) {
        super(props);
        const themes = [nativeTheme].concat(props.themes);
        const currentTheme = bootstrapCurrentThemeService.getCurrentTheme() || nativeTheme;
        props.dispatch(mainLayoutActions.setBootstrapThemes(themes))
        props.dispatch(mainLayoutActions.setCurrentBootstrapTheme(nativeTheme))
        this.changeTheme(currentTheme);
    }

    renderThemeList() {
        const { currentTheme, bootstrapThemes } = this.props;
        return bootstrapThemes && bootstrapThemes.map(theme => <a
            onClick={this.onClick.bind(this, theme.href)}
            href="javascript:void(0)"
            key={theme.href}
            className={`dropdown-item ${currentTheme.href === theme.href ? 'active' : ''}`}
        >
            {theme.title}
        </a>)
    }

    onClick(href: string) {
        const { bootstrapThemes, currentTheme } = this.props;
        if (currentTheme && currentTheme.href === href) return;
        const theme = bootstrapThemes && bootstrapThemes.find(theme => theme.href === href);
        theme && this.changeTheme(theme);
    }

    changeTheme(newTheme: Theme) {
        const { dispatch } = this.props;
        this.currentThemeNode && this.currentThemeNode.remove();
        const newThemeNode = this.createThemeNode(newTheme);
        this.currentThemeNode = newThemeNode;
        document.head.append(newThemeNode);
        if (newTheme.href === nativeTheme.href) {
            bootstrapCurrentThemeService.removeCurrentTheme();
        } else {
            bootstrapCurrentThemeService.setCurrentTheme(newTheme);
        }
        dispatch(mainLayoutActions.setCurrentBootstrapTheme(newTheme));
    }

    createThemeNode(theme: Theme) {
        const link = document.createElement('link');
        link.setAttribute('type', 'text/css');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', theme.href);
        return link;
    }

    renderHeader() {
        return <nav className="navbar navbar-expand shadow-sm navbar-light bg-light border-bottom">
            <Link to="/" className="navbar-brand"><img width="36px" src="/data/images/logo.svg" alt="" /></Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to="/" exact={true} className="nav-link" activeClassName="active">Questionnaires</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/Artezio/ART-FORMS" target="_blank">Documentation</a>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a href={location.href}
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Theme
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        {this.renderThemeList()}
                    </div>
                </li>
            </ul>
        </nav>
    }

    renderFooter() {
        return <small>&#169; Artezio, LLC. All rights reserved</small>
    }

    render() {
        return <div className="wrapper">
            <Router>
                <header className="header">
                    {this.renderHeader()}
                </header>
                <section className="main-content p-3" style={{ minHeight: `calc(100% - 86px)` }}>
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
            <footer className="footer text-center bg-secondary">
                {this.renderFooter()}
            </footer>
        </div>
    }
}

const mapStateToProps = (state: Store) => state.mainLayout;

export default connect<MainLayoutStore, undefined, MainLayoutOwnProps>(mapStateToProps)(MainLayout);