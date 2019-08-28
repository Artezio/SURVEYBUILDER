import * as React from 'react';
import * as Models from '@art-forms/models';
import { Store } from '../interfaces/Store';
import LayoutProps, { LayoutState, LayoutActions } from '../interfaces/components/LayoutProps';
import { DESIGN } from '../constants/application';
import { QuestionnairePlayer } from '@art-forms/player';
import QuestionnaireDesigner from './QuestionnaireDesigner';
import { createQuestionnaire } from '../actions/questionnaire';
import { createQuestionnaireResponse } from '../actions/questionnaireResponse';
import { toggleModeToDesign, toggleModeToPlay } from '../actions/application';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { modelsService } from '@art-forms/providers';
import { questionnaireConverter } from '@art-forms/fhir-converter';

const mapStateToProps = (store: Store): LayoutState => {
    return {
        application: store.application,
        questionnaire: store.questionnaire,
        questionnaireResponse: store.questionnaireResponse
    };
}

const mapDispatchToProps = (dispatch: Dispatch): LayoutActions => ({
    createQuestionnaire(questionnaire?: Partial<Models.IQuestionnaire>) {
        dispatch(createQuestionnaire(questionnaire));
    },
    toggleModeToDesign: () => {
        dispatch(toggleModeToDesign());
    },
    toggleModeToPlay: (questionnaire: Models.IQuestionnaire) => {
        dispatch(createQuestionnaireResponse(questionnaire))
        dispatch(toggleModeToPlay());
    }
})

const mergeProps = (stateProps: LayoutState, dispatchProps: LayoutActions, ownProps: any): LayoutProps =>
    ({ ...ownProps, ...stateProps, ...{ actions: { ...dispatchProps, ...ownProps.actions } } });

export class Layout extends React.Component<LayoutProps> {

    createQuestionnaire() {
        const { actions } = this.props;
        actions.createQuestionnaire();
    }

    loadQuestionnaireAndCreateResponse() {
        const { actions } = this.props;
        modelsService.getMockQuestionnaireModel()
            .then((fhirModel: any) => questionnaireConverter.toModel(fhirModel))
            .then((questionnaireModel: Models.IQuestionnaire) => {
                actions.createQuestionnaire(questionnaireModel);
            })
            .catch((err: any) => console.log('LOAD_ERROR', err))
    }

    toggleModeToPlay() {
        const { actions, questionnaire } = this.props;
        questionnaire && actions.toggleModeToPlay(questionnaire);
    }

    saveQuestionnaireToServer() {
        const { questionnaire } = this.props;
        if (questionnaire) {
            console.log('Mapped model: ', questionnaireConverter.fromModel(questionnaire));
            modelsService.postQuestionnaire(questionnaireConverter.fromModel(questionnaire))
                .then(response => console.log('\nStatus: ', response.status, '\nResponse: ', response))
        }
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
                            <a className={`nav-link ${!questionnaire ? "disabled" : ""}`} href="javascript:void(0)" onClick={this.toggleModeToPlay.bind(this)}>Try in action</a>
                        </li>
                    </ul>
                    {application.mode === DESIGN && <div className="ml-auto btn-group">
                        <a className="nav-link btn btn-outline-secondary"
                            href="javascript:void(0)"
                            onClick={this.loadQuestionnaireAndCreateResponse.bind(this)}>
                            Load Questionnaire
                        </a>
                        <a className="nav-link btn btn-outline-secondary ml-auto"
                            href="javascript:void(0)"
                            onClick={this.createQuestionnaire.bind(this)}
                        >
                            Create Questionnaire
                        </a>
                    </div>}
                </div>
            </nav>
            <div className="container">
                <div className="main-area row">
                    <div className="col-12">
                        {questionnaire && (application.mode === DESIGN ?
                            <QuestionnaireDesigner questionnaire={questionnaire} key={questionnaire.id} /> :
                            questionnaireResponse && <QuestionnairePlayer questionnaire={questionnaire}
                                questionnaireResponse={questionnaireResponse}
                                key={questionnaire.id}
                            />)
                        }
                    </div>
                    {questionnaire && application.mode === DESIGN && <div className="col">
                        <button disabled={false} className="btn btn-primary" onClick={this.saveQuestionnaireToServer.bind(this)}>Save to server</button>
                    </div>}
                </div>
            </div>
        </div>
    }
}
export default connect(mapStateToProps, (mapDispatchToProps as any), mergeProps)(Layout);