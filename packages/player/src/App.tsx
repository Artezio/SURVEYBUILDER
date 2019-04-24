import * as React from 'react';
import Layout from './components/Layout';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './data/styles/index.css';
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
                factory.createBooleanItem({ text: "boolean question", initialValue: true }),
                factory.createChoiceItem({ text: "choice question", options: [{ id: '1', value: 'one' }, { id: '2', value: 'two' }, { id: '3', value: 'three' }, { id: '4', value: 'four' }] }),
                factory.createAttachmentItem({ text: "attachment question" }),
                factory.createOpenChoiceItem({ text: "open-choice question", options: [{ id: '5', value: 'one' }, { id: '6', value: 'two' }, { id: '7', value: 'three' }, { id: '8', value: 'four' }] }),
                factory.createMultiChoiceItem({ text: "multi-choice question", options: [Models.MultiChoiceOptionFactory.createMultiChoiceOption({ value: "one" }), Models.MultiChoiceOptionFactory.createMultiChoiceOption({ value: "two" }), Models.MultiChoiceOptionFactory.createMultiChoiceOption({ value: "three" }), Models.MultiChoiceOptionFactory.createMultiChoiceOption({ value: "four" })] })
            ]
        }),
        factory.createItem({ text: 'end_2' })
    ]
}
));
questionnaire.addItem(factory.createItem({ text: 'end_1' }));
const questionnaireResponse = new Models.QuestionnaireResponse({ questionnaireId: questionnaire.id })

export const App = () => {
    return <>
        <Layout questionnaire={questionnaire} questionnaireResponse={questionnaireResponse} />
        <button className="btn btn-block btn-primary" onClick={() => console.log(JSON.stringify(questionnaireResponse, ["value", "items", "id", "questionnaireId", "answers", "text"], 2))}>To console</button>
    </>
};

export default App;