import { assert, expect } from 'chai';
import AnswerCollection from '../../src/models/answersCollection';
import { Questionnaire } from '../../src/models/questionnaire';
import { BOOLEAN, CHOICE, STRING } from '../../src/constants/itemTypes';
import { AND } from '../../src/constants/enableBehavior';
import { EQUAL, EXISTS } from '../../src/constants/enableWhenOperators';
import IQuestionItem from '../../src/interfaces/questionItems/IQuestionItem';
import QuestionnaireResponse from '../../src/models/questionnaireResponse';
import IBooleanItem from '../../src/interfaces/questionItems/IBooleanItem';
import choiceStrategy from '../../src/replyStrategies/choiceStrategy';
import QuestionnaireResponseItem from '../../src/models/questionnaireResponseItem';
import IChoiceItem from '../../src/interfaces/questionItems/IChoiceItem';

describe('questionnaire response item', () => {
    describe("evaluateEnableWhen", () => {
        it("exists", (done) => {
            const questionnaire = new Questionnaire({
                items: [
                    { id: 'one', type: STRING },
                    { id: 'two', type: CHOICE, enableBehavior: AND, enableWhen: [{ questionId: 'one', operator: EXISTS }] },
                ] as IQuestionItem<any>[]
            });
            const questionnaireResponse = new QuestionnaireResponse(questionnaire);
            questionnaireResponse.items[0].reply('1');
            setTimeout(() => {
                assert.equal(questionnaireResponse.items[1].isEnable, true);
                done();
            }, 50)
        })
    })
    it('question become enable after answering on depended question', (done) => {
        const questionnaire = new Questionnaire({
            items: [
                { id: 'one', type: BOOLEAN },
                { id: 'two', type: CHOICE, enableBehavior: AND, enableWhen: [{ questionId: 'one', operator: EQUAL, answer: true }] },
            ] as IQuestionItem<any>[]
        });
        const questionnaireResponse = new QuestionnaireResponse(questionnaire);
        questionnaireResponse.items[0].reply(true as any);
        setTimeout(() => {
            // console.log('\nanswers', questionnaireResponse.items[0].answers, '\nenableWhens', questionnaireResponse.items[1].questionItem.enableWhen)
            assert.equal(questionnaireResponse.items[1].isEnable, true);
            done();
        }, 50)
    })
    it('evaluation enable when works with initial answers', (done) => {
        const questionnaire = new Questionnaire({
            items: [
                { id: 'one', type: BOOLEAN, initialAnswers: [{ value: true }] },
                { id: 'two', type: CHOICE, enableBehavior: AND, enableWhen: [{ questionId: 'one', operator: EQUAL, answer: true }] }
            ] as IQuestionItem<any>[]
        });
        const questionnaireResponse = new QuestionnaireResponse(questionnaire);
        setTimeout(() => {
            // console.log('\nanswers', questionnaireResponse.items[0].answers, '\nenableWhens', questionnaireResponse.items[1].questionItem.enableWhen);
            assert.equal(questionnaireResponse.items[1].isEnable, true);
            done();
        }, 70)
    })
    it("answers from initialAnswers were passed(boolean)", () => {
        const questionItem: IBooleanItem = {
            type: BOOLEAN,
            id: "one",
            initialAnswers: [
                { id: "one_answer", value: true }
            ]
        };
        const responseItem = new QuestionnaireResponseItem(undefined, questionItem, choiceStrategy, [], new AnswerCollection());
        expect(responseItem.answers[0].id).to.be.equal("one_answer");
        expect(responseItem.answers[0].value).to.be.equal(true);
    })
    it("defaultChecked options passed as answers", () => {
        const questionItem: IChoiceItem = {
            id: "one",
            type: CHOICE,
            options: [
                { id: 'one_opt', value: 'blabla' },
                { id: 'two_opt', value: 'blabla', defaultSelected: true },
                { id: 'three_opt', value: 'vvvvvv' },
            ]
        }
        const responseItem = new QuestionnaireResponseItem(undefined, questionItem, choiceStrategy, [], new AnswerCollection());
        expect(responseItem.answers[0].id).to.be.equal("two_opt");
        expect(responseItem.answers[0].value).to.be.equal("blabla");
    })
})