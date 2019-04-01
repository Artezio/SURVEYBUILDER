import * as React from 'react';
import { Store } from '../interfaces/Store';
import LayoutProps, { LayoutState, LayoutActions } from '../interfaces/components/LayoutProps';
import { DESIGN, PLAY } from '../constants/application';
import { QuestionnairePlayer } from '@art-forms/player';
import QuestionnaireDesigner from './QuestionnaireDesigner';
import { createQuestionnaire } from '../actions/questionnaire';
import { createQuestionnaireResponse } from '../actions/questionnaireResponse';
import { toggleModeToDesign, toggleModeToPlay, createQuestionnaireWithEmptyResponse } from '../actions/application';
import { connect } from 'react-redux';
import { provider } from '@art-forms/providers';

const mapStateToProps = (store: Store): LayoutState => {
    return {
        application: store.application
    };
}

const mapDispatchToProps = {
    createQuestionnaire,
    createQuestionnaireResponse,
    toggleModeToDesign,
    toggleModeToPlay,
    createQuestionnaireWithEmptyResponse
}

const mergeProps = (stateProps: LayoutState, dispatchProps: LayoutActions, ownProps: any): LayoutProps =>
    ({ ...ownProps, ...stateProps, ...{ actions: { ...dispatchProps, ...ownProps.actions } } });

export class Layout extends React.Component<LayoutProps> {

    render() {
        const { actions, application } = this.props;
        return <div className="container-fluid">
            <nav className="row navbar navbar-expand-sm navbar-light bg-light">
                <div className="navbar-collapse">
                    <a className="navbar-brand" href="#">Questionnaire Designer</a>
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className={`nav-item ${application.mode === 'DESIGN' ? "active" : ""}`}>
                            <a className="nav-link" href="javascript:void(0)" onClick={actions.toggleModeToDesign}>Design mode</a>
                        </li>
                        <li className={`nav-item ${application.mode === 'PLAY' ? "active" : ""}`}>
                            <a className={`nav-link ${!application.questionnaire ? "disabled" : ""}`} href="javascript:void(0)" onClick={actions.toggleModeToPlay}>Play mode</a>
                        </li>
                    </ul>
                    <a className="nav-link ml-auto text-dark" href="javascript:void(0)" onClick={() => { actions.createQuestionnaireWithEmptyResponse() }}>Create Questionnaire</a>
                </div>
            </nav>
            <div className="main-area row my-2">
                <div className="col-12">
                    {application.questionnaire && (application.mode === DESIGN ?
                        <QuestionnaireDesigner questionnaire={application.questionnaire} /> :
                        <QuestionnairePlayer questionnaire={application.questionnaire} questionnaireResponse={application.questionnaireResponse} />)
                    }
                </div>
            </div>
            {application.questionnaire && (application.mode === PLAY) && <button className="btn btn-primary mt-5 ml-auto" onClick={() => { provider.putQuestionnaireResponse(application.questionnaireResponse) }}>Submit</button>}
        </div>
    }
}
export default connect(mapStateToProps, (mapDispatchToProps as any), mergeProps)(Layout);