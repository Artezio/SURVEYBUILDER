import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import QuestionnaireComponent from './Questionnaire';
import { createQuestionnaire } from '../actions/layout';
import { connect } from 'react-redux';
import { Store } from '../interfaces/Store';
import LayoutComponentProps, { LayoutComponentState, LayoutComponentActions } from '../interfaces/LayoutComponentProps';


const mapStateToProps = (store: Store): LayoutComponentState => {
    return { questionnaire: store.questionnaire };
}

const mapDispatchToProps: LayoutComponentActions = {
    createQuestionnaire,
}

const mergeProps = (stateProps: LayoutComponentState, dispatchProps: LayoutComponentActions, ownProps: any): LayoutComponentProps =>
    Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } });

export class Layout extends React.Component<LayoutComponentProps> {
    onClick = () => {
        const { createQuestionnaire } = this.props.actions;
        createQuestionnaire && createQuestionnaire();
    }
    render() {
        const { questionnaire } = this.props;
        return <div className="container-fluid">
            <div className="menu d-flex justify-content-around py-2 bg-dark text-light ">
                <h1 className="font-weight-bold">Questionnaire Designer</h1>
                <button className="btn btn-primary" onClick={this.onClick}>Create Questionnaire</button>
            </div>
            <div className="main-area my-5">
                {questionnaire && <QuestionnaireComponent />}
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Layout);