import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import DesignLayout from './Layout';
import { Layout } from '@art-forms/player';
import { connect } from 'react-redux';
import { Store } from '../interfaces/Store';
import { PLAY, DESIGN } from '../constants/application';
import { AppProps, AppState } from '../interfaces/components/App';
import * as Models from "@art-forms/models";
import { toggleAppModeToDesign } from '../actions/application';


const mapStateToProps = (store: Store): AppState => {
    return {
        application: store.application,
        questionnaire: store.questionnaire as Models.Questionnaire
    }
}

const mapDispatchToProps = {
    toggleAppModeToDesign
}

const mergeProps = (stateProps: AppState, dispatchProps: any, ownProps: any) => ({ ...ownProps, ...stateProps, ...{ actions: { ...dispatchProps } } })

export class App extends React.Component<AppProps> {
    toggleAppModeToDesign() {
        const { actions } = this.props;
        actions.toggleAppModeToDesign();
    }
    render() {
        const { application, questionnaire } = this.props;
        return <DesignLayout />;
        switch (application.mode) {
            case DESIGN: {
                return <DesignLayout />
            }
            case PLAY: {
                return <Layout questionnaire={questionnaire} actions={{ toggleAppModeToDesign: this.toggleAppModeToDesign.bind(this) }} />
            }
            default: {
                return null;
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);