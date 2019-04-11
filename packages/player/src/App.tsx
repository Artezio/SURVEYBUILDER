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
                factory.createTextItem({ text: 'text question' }),
                factory.createStringItem({ text: "string question" }),
                factory.createDecimalItem({ text: "decimal question" }),
                factory.createTimeItem({ text: "time question" }),
                factory.createDateItem({ text: "date question" }),
                factory.createDateTimeItem({ text: "date-time question" }),
                factory.createBooleanItem({ text: "boolean question" }),
                factory.createChoiceItem({ text: "choice question" }),
                factory.createAttachmentItem({ text: "attachment question" }),
                factory.createOpenChoiceItem({ text: "open-choice question" }),
            ]
        }),
        factory.createItem({ text: 'end_2' })
    ]
}
));
questionnaire.addItem(factory.createItem({ text: 'end_1' }));
const questionnaireResponse = new Models.QuestionnaireResponse({ questionnaireId: questionnaire.id })

export const App = () => <Layout questionnaire={questionnaire} questionnaireResponse={questionnaireResponse} />;

export default App;