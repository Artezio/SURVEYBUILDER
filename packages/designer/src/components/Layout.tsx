import * as React from 'react';
import { Store } from '../interfaces/Store';
import LayoutProps, { LayoutState, LayoutActions } from '../interfaces/components/LayoutProps';
import { DESIGN, PLAY } from '../constants/application';
import { QuestionnairePlayer } from '@art-forms/player';
import QuestionnaireDesigner from './QuestionnaireDesigner';
import { createQuestionnaire } from '../actions/questionnaire';
import { createQuestionnaireResponse } from '../actions/questionnaireResponse';
import { toggleModeToDesign, toggleModeToPlay } from '../actions/application';
import { connect } from 'react-redux';
import { provider } from '@art-forms/providers';
import { Dispatch } from 'redux';

const mapStateToProps = (store: Store): LayoutState => {
    return {
        application: store.application,
        questionnaire: store.questionnaire,
        questionnaireResponse: store.questionnaireResponse
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    createQuestionnaireWithEmptyResponse: () => {
        dispatch(createQuestionnaire());
        dispatch(createQuestionnaireResponse());
    },
    toggleModeToDesign: () => {
        dispatch(toggleModeToDesign());
        dispatch(createQuestionnaireResponse());
    },
    toggleModeToPlay: () => dispatch(toggleModeToPlay())
})

const mergeProps = (stateProps: LayoutState, dispatchProps: LayoutActions, ownProps: any): LayoutProps =>
    ({ ...ownProps, ...stateProps, ...{ actions: { ...dispatchProps, ...ownProps.actions } } });

export class Layout extends React.Component<LayoutProps> {

    createQuestionnaireAndResponse() {
        const { actions } = this.props;
        actions.createQuestionnaireWithEmptyResponse();
    }

    submitResponse() {
        const { questionnaireResponse } = this.props;
        provider.putQuestionnaireResponse(questionnaireResponse);
    }

    render() {
        const { actions, application, questionnaire, questionnaireResponse } = this.props;
        return <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light mb-2">
                <div className="navbar-collapse">
                    <a className="navbar-brand" href="#">Questionnaire Designer</a>
                    <ul className="navbar-nav">
                        <li className={`nav-item ${application.mode === 'DESIGN' ? "active" : ""}`}>
                            <a className="nav-link" href="javascript:void(0)" onClick={actions.toggleModeToDesign}>Design mode</a>
                        </li>
                        <li className={`nav-item ${application.mode === 'PLAY' ? "active" : ""}`}>
                            <a className={`nav-link ${!questionnaire ? "disabled" : ""}`} href="javascript:void(0)" onClick={actions.toggleModeToPlay}>Try in action</a>
                        </li>
                    </ul>
                    {application.mode === DESIGN && <a className="nav-link btn btn-outline-secondary ml-auto" href="javascript:void(0)" onClick={this.createQuestionnaireAndResponse.bind(this)}>Create Questionnaire</a>}
                </div>
            </nav>
            <div className="container">
                <div className="main-area row">
                    <div className="col-12">
                        {questionnaire && (application.mode === DESIGN ?
                            <QuestionnaireDesigner questionnaire={questionnaire} key={questionnaire.id} /> :
                            questionnaireResponse && <QuestionnairePlayer questionnaire={questionnaire} questionnaireResponse={questionnaireResponse} key={questionnaire.id} />)
                        }
                    </div>
                </div>
            </div>
            {/* {questionnaire && questionnaire.items[0] && <EnableConditions questionnaire={questionnaire} item={questionnaire.items[0]} />} */}
            {questionnaire && (application.mode === PLAY) && <button className="btn btn-primary mt-5 ml-auto" onClick={this.submitResponse.bind(this)}>To Console</button>}
        </div>
    }
}
export default connect(mapStateToProps, (mapDispatchToProps as any), mergeProps)(Layout);