import * as React from 'react';
import * as Models from '@art-forms/models';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Layout from './components/Layout';
import { Application } from './interfaces/Application';
import { DESIGN, PLAY } from './constants/application';


// export const App = () => <Layout />

export class App extends React.Component {
    state: Application

    constructor(props: any) {
        super(props);
        this.state = {
            mode: DESIGN
        }
    }

    toggleModeToDesign() {
        this.setState({
            mode: DESIGN
        })
    }

    toggleModeToPlay() {
        this.setState({
            mode: PLAY
        })
    }

    createQuestionnaire(questionnaire?: Partial<Models.IQuestionnaire> | undefined) {
        this.setState({
            questionnaire: new Models.Questionnaire(questionnaire),
        })
        setTimeout(() => { this.createQuestionnaireResponse() }, 0)  /////   CHANGE !!!!!!!!!!!!!!!  it's crutch
    }

    createQuestionnaireResponse(questionnaireResponse?: Omit<Models.IQuestionnaireResponse, 'id'>) {  /////   CHANGE !!!!!!!!!!!!!!!  it's crutch
        this.setState({
            questionnaireResponse: new Models.QuestionnaireResponse({ items: [], ...questionnaireResponse, questionnaireId: ((this.state.questionnaire as any).id as string) })
        })
    }

    render() {
        return <Layout application={this.state} actions={{
            createQuestionnaire: this.createQuestionnaire.bind(this),
            toggleModeToDesign: this.toggleModeToDesign.bind(this),
            toggleModeToPlay: this.toggleModeToPlay.bind(this),
            createQuestionnaireResponse: this.createQuestionnaireResponse.bind(this)
        }} />
    }
}


export default App;