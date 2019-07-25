import * as React from 'react';
import * as Models from '@art-forms/models';
import 'bootstrap-scss';
// import './data/styles/sheet.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap';
import { QuestionnaireDesigner } from '@art-forms/designer';
import { QuestionnairePlayer } from '@art-forms/player';

export class App extends React.Component {
    questionnaire: any;
    questionnaireResponse: any;

    constructor(props: any) {
        super(props);
        this.questionnaire = new Models.Questionnaire();
        this.questionnaireResponse = new Models.QuestionnaireResponse(this.questionnaire);
    }

    render() {
        return <div>
            <QuestionnaireDesigner questionnaire={this.questionnaire} />
            {/* <QuestionnairePlayer questionnaire={this.questionnaire} questionnaireResponse={this.questionnaireResponse} /> */}
        </div>
    }
}

export default App;