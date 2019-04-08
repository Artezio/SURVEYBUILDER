import * as React from 'react';
import Layout from './components/Layout';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import * as Models from '@art-forms/models';


const questionnaire = new Models.Questionnaire({ title: 'Title', description: 'descriptionsdddddddddddddddddddddddddddddddddddsfasfkkkkkkkkkkkkkkkkkkkaaaaaaaaaa' });
const factory = new Models.ItemFactory(questionnaire);

questionnaire.addItem(factory.createTextItem({ text: 'Text', initialValue: 'init Answer' }));
questionnaire.addItem(factory.createGroupItem({
    text: 'group_1', items: [
        factory.createItem({ text: 'Text plain' }),
        factory.createTextItem({ text: 'question_2' }),
        factory.createGroupItem({
            text: 'group_2',
            items: [
                factory.createItem({ text: "deep text" })
            ]
        })
    ]
}
));
questionnaire.addItem(factory.createStringItem({ text: 'end.' }));
questionnaire.addItem(factory.createDecimalItem({ text: 'end.' }));
const questionnaireResponse = new Models.QuestionnaireResponse({ questionnaireId: questionnaire.id })

export const App = () => <Layout questionnaire={questionnaire} questionnaireResponse={questionnaireResponse} />;

export default App;