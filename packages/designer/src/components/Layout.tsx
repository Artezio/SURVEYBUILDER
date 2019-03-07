import React from 'react';
import Questionnaire from './Questionnaire';
import { createQuestionnaire, addItem, addTextItem, setDescription, setTitle, updateQuestionnaire } from '../actions/questionnaire';
import { connect } from 'react-redux';
import { Store } from '../interfaces/Store';
import LayoutProps, { LayoutState, LayoutActions } from '../interfaces/components/LayoutProps';
import { toggleAppModeToPlay } from '../actions/application';
import { removeItem, updateItem } from '../actions/item';
import { updateTextItem } from '../actions/textItem';


const mapStateToProps = (store: Store): LayoutState => {
    return { questionnaire: store.questionnaire };
}

const mapDispatchToProps: LayoutActions = {
    createQuestionnaire,
    toggleAppModeToPlayer: toggleAppModeToPlay,
    addItem,
    addTextItem,
    removeItem,
    setDescription,
    setTitle,
    updateItem,
    updateQuestionnaire,
    updateTextItem
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
        actions.toggleAppModeToPlayer();
    }

    render() {
        const { questionnaire, actions } = this.props;
        return <div className="container-fluid">
            <div className="menu d-flex row py-2 bg-dark text-light ">
                <h1 className="col-5 font-weight-bold">Questionnaire Designer</h1>
                <div className="d-flex justify-content-around col-7">
                    <button className="btn btn-info d-display" onClick={this.preview.bind(this)} disabled={!questionnaire}>Preview</button>
                    <button className="btn btn-primary" onClick={this.createQuestionnaire}>Create Questionnaire</button>
                </div>
            </div>
            <div className="main-area row justify-content-center my-5">
                {questionnaire && <Questionnaire questionnaire={questionnaire} actions={actions} />}
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Layout);