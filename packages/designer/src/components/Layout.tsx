import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import QuestionnaireComponent from './Questionnaire';
import { Questionnaire } from '@art-forms/models';
import { createQuestionnaire } from '../actions/questionnaire';
import { connect } from 'react-redux';
import { Store } from '../interfaces/store';
import LayoutActions from '../interfaces/LayoutActions';


export interface LayoutProps extends LayoutActions {
    questionnaire: Questionnaire | null;
}

const mapStateToProps = (store: Store) => {
    return { questionnaire: store.questionnaire };
}

const mapDispatchToProps: LayoutActions = {
    createQuestionnaire,
}

export class Layout extends React.Component<LayoutProps> {
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
                {questionnaire && <QuestionnaireComponent />}
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);