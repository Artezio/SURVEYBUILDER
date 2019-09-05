import { ItemFactory } from '../../src/factories/itemFactory';
import { AnswerOptionFactory } from '../../src/factories/answerOptionFactory';
import expect from 'expect';

describe('answer options default selected', () => {
    describe('choice item', () => {
        it('option is selected', () => {
            const itemFactory = new ItemFactory();
            const choiceItem = itemFactory.createChoiceItem();
            const optFactory = new AnswerOptionFactory(choiceItem)
            const option = optFactory.createAnswerOption();
            choiceItem.addAnswerOption(option);
            option.selectAsDefault();
            expect(option.defaultSelected).toBe(true);
        })
        it('selecting one opt unselects another', () => {
            const itemFactory = new ItemFactory();
            const choiceItem = itemFactory.createChoiceItem();
            const optFactory = new AnswerOptionFactory(choiceItem)
            const option1 = optFactory.createAnswerOption();
            const option2 = optFactory.createAnswerOption();
            choiceItem.addAnswerOption(option1);
            choiceItem.addAnswerOption(option2);
            option1.selectAsDefault();
            option2.selectAsDefault();
            expect(!option1.defaultSelected && option2.defaultSelected).toBe(true);
        })
    })
})