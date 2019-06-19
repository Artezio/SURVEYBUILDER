import * as React from 'react';
import Layout from './components/Layout';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './data/styles/index.css';
import 'bootstrap';
import * as Models from '@art-forms/models';


const questionnaire = new Models.Questionnaire({ title: 'Title', description: 'descriptionsdddddddddddddddddddddddddddddddddddsfasfkkkkkkkkkkkkkkkkkkkaaaaaaaaaa' });
const factory = new Models.ItemFactory(questionnaire);
const initialAnswerFactory = new Models.initialAnswerFactory();
const answerOptionFactory = new Models.AnswerOptionFactory();
questionnaire.addItem(factory.createTextItem({ text: 'Text', initialAnswers: [initialAnswerFactory.createInitialAnswer({ value: 'init Answer' })] }));
questionnaire.addItem(factory.createGroupItem({
    text: 'group_1', items: [
        factory.createItem({ text: 'Text plain' }),
        factory.createTextItem({ id: 'bla-bla-moi-id', text: 'question_2' }),
        factory.createGroupItem({
            text: 'group_2',
            items: [
                factory.createTextItem({ text: 'text question', enableBehavior: Models.AND, enableWhen: [{ id: '123', questionId: '123413', operator: Models.EQUAL, answer: 4 }, { id: '124', questionId: '123113', operator: Models.EQUAL, answer: 5 }] }),
                factory.createStringItem({ text: "string question", required: true }),
                factory.createDecimalItem({ text: "decimal question" }),
                factory.createTimeItem({ text: "time question", required: true }),
                factory.createDateItem({ text: "date question" }),
                factory.createDateTimeItem({ text: "date-time question", required: true }),
                factory.createBooleanItem({ text: "boolean question", initialAnswers: [initialAnswerFactory.createInitialAnswer({ value: true })] }),
                factory.createChoiceItem({ text: "choice question", options: [{ id: '1', value: 'one' }, { id: '2', value: 'two' }, { id: '3', value: 'three' }, { id: '4', value: 'four' }] }),
                factory.createAttachmentItem({ text: "attachment question", multipleFiles: true }),
                factory.createOpenChoiceItem({ text: "open-choice question", options: [{ id: '5', value: 'one' }, { id: '6', value: 'two' }, { id: '7', value: 'three' }, { id: '8', value: 'four' }] }),
                // factory.createOpenChoiceItem({ text: "open-choice question", options: [{ id: '11', value: 'one' }, { id: '12', value: 'two' }, { id: '13', value: 'three' }, { id: '14', value: 'four' }] }),
                factory.createMultiChoiceItem({ required: true, text: "multi-choice question", options: [answerOptionFactory.createAnswerOption({ value: "one" }), answerOptionFactory.createAnswerOption({ value: "two" }), answerOptionFactory.createAnswerOption({ value: "three" }), answerOptionFactory.createAnswerOption({ value: "four" })] })
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