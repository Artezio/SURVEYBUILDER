import * as React from 'react';
import { createQuestionnaire, addItem, addTextItem, setDescription, setTitle, updateQuestionnaire } from '../actions/questionnaire';
import { connect } from 'react-redux';
import { Store } from '../interfaces/Store';
import LayoutProps, { LayoutState, LayoutActions } from '../interfaces/components/LayoutProps';
import { toggleAppModeToPlay, toggleAppModeToDesign } from '../actions/application';
import { DESIGN, PLAY } from '../constants/application';
import { addQuestionnaireResponseItem, createQuestionnaireResponse, updateQuestionnaireResponseItem, QuestionnairePlayer } from '@art-forms/player';
import QuestionnaireDesigner from './QuestionnaireDesigner';


const mapStateToProps = (store: Store) => {
    return {
        questionnaireResponse: store.questionnaireResponse
    };
}

const mapDispatchToProps = {
    addQuestionnaireResponseItem,
    createQuestionnaireResponse,
    updateQuestionnaireResponseItem
}

const mergeProps = (stateProps: LayoutState, dispatchProps: LayoutActions, ownProps: any): LayoutProps =>
    ({ ...ownProps, ...stateProps, ...{ actions: { ...dispatchProps, ...ownProps.actions } } });

export class Layout extends React.Component<LayoutProps> {

    render() {
        const { actions, application } = this.props;
        return <div className="container-fluid">
            <div className="row py-2 bg-dark text-light">
                <h1 className="col-5 font-weight-bold">Questionnaire Designer</h1>
                <div className="d-flex justify-content-around col-7">
                    {application.mode === DESIGN ?
                        <button className="btn btn-info d-display" onClick={actions.toggleModeToPlay} disabled={!application.questionnaire}>Preview</button> :
                        <button className="btn btn-info d-display" onClick={actions.toggleModeToDesign}>Back to design</button>
                    }
                    {application.mode === DESIGN && <button className="btn btn-primary" onClick={() => { actions.createQuestionnaire() }}>Create Questionnaire</button>}
                </div>
            </div>
            <div className="main-area row my-5">
                <div className="col-12">
                    {application.questionnaire && (application.mode === DESIGN ?
                        <QuestionnaireDesigner questionnaire={application.questionnaire} /> :
                        <QuestionnairePlayer questionnaire={application.questionnaire} questionnaireResponse={application.questionnaireResponse} />)
                    }
                </div>
            </div>
            {application.questionnaire && (application.mode === PLAY) && <button className="btn btn-primary mt-5 ml-auto" onClick={() => { console.log(application.questionnaireResponse) }}>Submit</button>}
        </div>
    }
}
// connect((mapStateToProps as any), (mapDispatchToProps as any), mergeProps)
export default Layout;