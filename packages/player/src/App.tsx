import * as React from 'react';
import Layout from './components/Layout';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import * as Models from '@art-forms/models';


const questionnaire = new Models.Questionnaire({title: 'Title', description: 'descriptionsdddddddddddddddddddddddddddddddddddsfasfkkkkkkkkkkkkkkkkkkkaaaaaaaaaa'});
questionnaire.addTextItem({text: 'question'});
questionnaire.addGroupItem();
(questionnaire.items[1] as Models.GroupItem).addGroupItem({text: 'group'});
(questionnaire.items[1] as Models.GroupItem).addItem({text: "i'm plain text"});
((questionnaire.items[1] as Models.GroupItem).items[0] as Models.GroupItem).addTextItem({text: 'deep question', initialValue: 'deep answer'});

const questionnaireResponse = new Models.QuestionnaireResponse({ questionnaireId: questionnaire.id })

export const App = () => <Layout questionnaire={questionnaire} questionnaireResponse={questionnaireResponse} />;

export default App;