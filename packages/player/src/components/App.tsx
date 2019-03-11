import * as React from 'react';
import { Layout } from './Layout';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import * as Models from '@art-forms/models';

const mockQuestionnaire: Models.Questionnaire = {
    id: 'mockQuestionnaire_1',
    title: 'Super Puper Title',
    description: 'useless description',
    items: [
        {
            id: 'mockItem_1',
            type: Models.DISPLAY,
            text: 'Mock text'
        },
        {
            id: 'mockTextItem_1',
            type: Models.QUESTION,
            text: 'How Are You?',
            initialValue: "I'm fine"
        } as Models.TextItem
    ]
}

export const App = () => <Layout questionnaire={mockQuestionnaire} />;

export default App;