import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import QuestionnaireDesigner from './QuestionnaireDesigner';
import { Questionnaire } from '../../../models/src';
import { createQuestionnaire } from '../actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';


export class MainView extends React.Component<{ questionnaire?: Questionnaire, createQuestionnaire: (questionnaire: Questionnaire) => void }> {
    onClick = () => {
        const { createQuestionnaire } = this.props;
        createQuestionnaire && createQuestionnaire({ id: '1q' });
    }
    render() {
        const { questionnaire } = this.props;
        return <div className="container-fluid">
            <div className="menu d-flex justify-content-around py-2 bg-dark text-light ">
                <h1 className="font-weight-bold">Questionnaire Designer</h1>
                <button className="btn btn-primary" onClick={this.onClick}>Create Questionnaire</button>
            </div>
            <div className="main-area my-5">
                {questionnaire && <QuestionnaireDesigner />}
            </div>
        </div>
    }
}



const mapStateToProps = (state: { questionnaire: { questionnaire?: Questionnaire } }) => {
    return state.questionnaire;
}

const mapDispatchToProps = (dispatch: Dispatch): { createQuestionnaire: (questionnaire: Questionnaire) => void } => {
    return {
        createQuestionnaire: (questionnaire: Questionnaire) => {
            dispatch(createQuestionnaire(questionnaire));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);