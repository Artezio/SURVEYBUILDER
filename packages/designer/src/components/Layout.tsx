import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Questionnaire from './Questionnaire';
import { createQuestionnaire } from '../actions/questionnaire';
import { connect } from 'react-redux';
import { Store } from '../interfaces/Store';
import LayoutProps, { LayoutState, LayoutActions } from '../interfaces/components/LayoutProps';


const mapStateToProps = (store: Store): LayoutState => {
    return { questionnaire: store.questionnaire };
}

const mapDispatchToProps: LayoutActions = {
    createQuestionnaire,
}

const mergeProps = (stateProps: LayoutState, dispatchProps: LayoutActions, ownProps: any): LayoutProps =>
    Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } });

export class Layout extends React.Component<LayoutProps> {
    onClick = () => {
        const { actions } = this.props;
        actions.createQuestionnaire();
    }
    render() {
        const { questionnaire } = this.props;
        return <div className="container-fluid">
            <div className="menu d-flex row py-2 bg-dark text-light ">
                <h1 className="col-5 font-weight-bold">Questionnaire Designer</h1>
                <div className="d-flex justify-content-around col-7">
                    <button className="btn btn-info d-display">Preview</button>
                    <button className="btn btn-primary" onClick={this.onClick}>Create Questionnaire</button>
                </div>
            </div>
            <div className="main-area row justify-content-center my-5">
                {questionnaire && <Questionnaire />}
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Layout);