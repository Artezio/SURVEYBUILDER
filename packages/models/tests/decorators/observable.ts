import { assert } from 'chai';
import { describe } from 'mocha';
import { observable, getObservable } from '../../src/decorators/observable';
import Questionnaire from '../../src/models/questionnaire';
import Item from '../../src/models/item';

const q = new Questionnaire({ id: 'q1', title: 'Question', items: [new Item({ id: 'i1' })] })

mocha.setup('bdd');
describe("decorators/observable", () => {
    it("is Observable", () => {
        assert.notEqual(getObservable(q), undefined)
    })

})

mocha.run();