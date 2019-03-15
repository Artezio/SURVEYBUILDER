import * as React from 'react';
import { createQuestionnaire, addItem, addTextItem, setDescription, setTitle, updateQuestionnaire } from '../actions/questionnaire';
import { connect } from 'react-redux';
import { Store } from '../interfaces/Store';
import LayoutProps, { LayoutState, LayoutActions } from '../interfaces/components/LayoutProps';
import { toggleAppModeToPlay, toggleAppModeToDesign } from '../actions/application';
import { removeItem, updateItem } from '../actions/item';
import { updateTextItem } from '../actions/textItem';
import { QuestionnairePlayer } from '@art-forms/player';
import { DESIGN, PLAY } from '../constants/application';
import { addQuestionnaireResponseItem, createQuestionnaireResponse, updateQuestionnaireResponseItem } from '@art-forms/player';
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

    createQuestionnaire = () => {
        const { actions } = this.props;
        actions.createQuestionnaire();
    }

    preview() {
        const { actions } = this.props;
        actions.toggleAppModeToPlay();
    }

    backToDesign() {
        const { actions } = this.props;
        actions.toggleAppModeToDesign();
    }

    render() {
        const { questionnaire, actions, application, questionnaireResponse } = this.props;
        return <div className="container-fluid">
            <div className="menu d-flex row py-2 bg-dark text-light ">
                <h1 className="col-5 font-weight-bold">Questionnaire Designer</h1>
                <div className="d-flex justify-content-around col-7">
                    {application.mode === DESIGN ?
                        <button className="btn btn-info d-display" onClick={this.preview.bind(this)} disabled={!questionnaire}>Preview</button> :
                        <button className="btn btn-info d-display" onClick={this.backToDesign.bind(this)}>Back to design</button>
                    }
                    <button className="btn btn-primary" onClick={this.createQuestionnaire}>Create Questionnaire</button>
                </div>
            </div>
            <div className="main-area row justify-content-center my-5">
                {questionnaire && (application.mode === DESIGN ?
                    <QuestionnaireDesigner questionnaire={questionnaire} actions={actions} /> :
                    <QuestionnairePlayer actions={actions} questionnaire={questionnaire} />)
                }
            </div>
            {questionnaire && (application.mode === PLAY) && <button className="btn btn-primary mt-5 ml-auto" onClick={() => { console.log(questionnaireResponse) }}>Submit</button>}
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Layout);