import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import 'bootstrap';
import QuestionnaireDesigner from './QuestionnaireDesigner';

export class MainView extends React.Component {
    render() {
        return <React.Fragment>
            <div className="menu d-flex justify-content-around py-2 bg-dark text-light ">
                <h1 className="font-weight-bold">Questionnaire Designer</h1>
                <button className="btn btn-primary ">Create Questionnaire</button>
            </div>
            <div className="main-area my-5">
                <QuestionnaireDesigner />
            </div>
        </React.Fragment>
    }
}

export default MainView;