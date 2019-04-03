import * as React from 'react';
import Layout from './components/Layout';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import * as Models from '@art-forms/models';


const questionnaire = new Models.Questionnaire({title: 'Title', description: 'descriptionsdddddddddddddddddddddddddddddddddddsfasfkkkkkkkkkkkkkkkkkkkaaaaaaaaaa'});


const questionnaireResponse = new Models.QuestionnaireResponse({ questionnaireId: questionnaire.id })

export const App = () => <Layout questionnaire={questionnaire} questionnaireResponse={questionnaireResponse} />;

export default App;