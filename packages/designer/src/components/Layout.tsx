import * as React from 'react';
import Questionnaire from './Questionnaire';
import { createQuestionnaire, addItem, addTextItem, setDescription, setTitle, updateQuestionnaire } from '../actions/questionnaire';
import { connect } from 'react-redux';
import { Store } from '../interfaces/Store';
import LayoutProps, { LayoutState, LayoutActions } from '../interfaces/components/LayoutProps';
import { toggleAppModeToPlay, toggleAppModeToDesign } from '../actions/application';
import { removeItem, updateItem } from '../actions/item';
import { updateTextItem } from '../actions/textItem';
import * as Player from '@art-forms/player';
import { DESIGN } from '../constants/application';


const mapStateToProps = (store: Store): LayoutState => {
    return { questionnaire: store.questionnaire, application: store.application };
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
    toggleAppModeToDesign
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
        const { questionnaire, actions, application } = this.props;
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
                    <Questionnaire questionnaire={questionnaire} actions={actions} /> :
                    <Player.Questionnaire questionnaire={questionnaire} />)
                }
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Layout);