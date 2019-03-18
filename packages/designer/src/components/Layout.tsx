import * as React from 'react';
import { createQuestionnaire, addItem, addTextItem, setDescription, setTitle, updateQuestionnaire } from '../actions/questionnaire';
import { connect } from 'react-redux';
import { Store } from '../interfaces/Store';
import LayoutProps, { LayoutState, LayoutActions } from '../interfaces/components/LayoutProps';
import { toggleAppModeToPlay, toggleAppModeToDesign } from '../actions/application';
import { removeItem, updateItem } from '../actions/item';
import { updateTextItem } from '../actions/textItem';
import { DESIGN, PLAY } from '../constants/application';
import { addQuestionnaireResponseItem, createQuestionnaireResponse, updateQuestionnaireResponseItem, QuestionnairePlayer } from '@art-forms/player';
import QuestionnaireDesigner from './QuestionnaireDesigner';


const mapStateToProps = (store: Store): LayoutState => {
    return {
        questionnaire: store.questionnaire,
        application: store.application,
        questionnaireResponse: store.questionnaireResponse
    };
}

const mapDispatchToProps: LayoutActions = {
    createQuestionnaire,
    setTitle,
    setDescription,
    addItem,
    addTextItem,
    updateQuestionnaire,
    removeItem,
    updateItem,
    updateTextItem,
    toggleAppModeToPlay,
    toggleAppModeToDesign,
    addQuestionnaireResponseItem,
    createQuestionnaireResponse,
    updateQuestionnaireResponseItem
}

const mergeProps = (stateProps: LayoutState, dispatchProps: LayoutActions, ownProps: any): LayoutProps =>
    ({ ...ownProps, ...stateProps, ...{ actions: { ...dispatchProps } } });

export class Layout extends React.Component<LayoutProps> {

    render() {
        const { questionnaire, actions, application, questionnaireResponse } = this.props;
        return <div className="container-fluid">
            <div className="row py-2 bg-dark text-light">
                <h1 className="col-5 font-weight-bold">Questionnaire Designer</h1>
                <div className="d-flex justify-content-around col-7">
                    {application.mode === DESIGN ?
                        <button className="btn btn-info d-display" onClick={actions.toggleAppModeToPlay} disabled={!questionnaire}>Preview</button> :
                        <button className="btn btn-info d-display" onClick={actions.toggleAppModeToDesign}>Back to design</button>
                    }
                    {application.mode === DESIGN && <button className="btn btn-primary" onClick={() => { actions.createQuestionnaire() }}>Create Questionnaire</button>}
                </div>
            </div>
            <div className="main-area row my-5">
                <div className="col-12">
                    {questionnaire && (application.mode === DESIGN ?
                        <QuestionnaireDesigner questionnaire={questionnaire} actions={actions} /> :
                        <QuestionnairePlayer actions={actions} questionnaire={questionnaire} />)
                    }
                </div>
            </div>
            {questionnaire && (application.mode === PLAY) && <button className="btn btn-primary mt-5 ml-auto" onClick={() => { console.log(questionnaireResponse) }}>Submit</button>}
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Layout);