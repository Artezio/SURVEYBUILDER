import { assert } from 'chai';
import ItemFactory from '../../src/factories/itemFactory';
import { AnswerOptionFactory } from '../../src/factories/answerOptionFactory';

describe('answer options default selected', () => {
    describe('choice item', () => {
        it('option is selected', () => {
            const itemFactory = new ItemFactory();
            const choiceItem = itemFactory.createChoiceItem();
            const optFactory = new AnswerOptionFactory(choiceItem)
            const option = optFactory.createAnswerOption();
            choiceItem.addAnswerOption(option);
            option.selectAsDefault();
            assert(option.defaultSelected);
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
            assert(!option1.defaultSelected && option2.defaultSelected);
        })
    })
})