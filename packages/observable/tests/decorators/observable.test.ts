const assert = require('chai').assert;
import { getObservable, isObservable, toObservable } from '../../src/toObservable';
import { observable, observableArray } from '../../src/decorators/observable';

@observable
class Person {
    // @observableArray
    pets: any[];
    name: string;
    age: number;

    constructor(name: string, age: number, pets?: any[]) {
        this.name = name;
        this.age = age;
        this.pets = pets || [];
    }

    say() {
        console.log('SAY');
    }
}

//@observable
class Animal {
    nickname: string;
    limbs: string[];

    constructor(nickname: string, limbs?: string[]) {
        this.nickname = nickname;
        this.limbs = limbs || [];
    }
}



describe("decorators/observable", () => {
    describe("mock classes", () => {
        it("is Observable", () => {
            const person = new Person('Name', 15);
            assert(isObservable(person));
        })
        // it("", (done) => {
        //     const animal = new Animal('sdf')
        //     const person = new Person('Name', 15);
        //     const person2 = new Person('sdf', 123);
        //     const obs = getObservable(person);
        //     assert(person.pets === person2.pets);
        //     obs && obs.subscribe((arr: any) => {
        //         console.log(arr);
        //         assert(true);
        //         done();
        //     })
        //     person.pets.push(animal)
        // })
        it("primitive change was observed", (done) => {
            const person = new Person('Name', 15);
            const obs = getObservable(person);
            const expectedValue = 'Petya';
            const oldName = person.name;
            obs && obs.subscribe((obj: any) => {
                assert.notEqual(oldName, obj.name);
                assert.equal(obj.name, expectedValue);
                done();
            })
            person.name = expectedValue;
        })
        it("new object is observable", (done) => {
            const person = new Person('Name', 15);
            const obs = getObservable(person);
            obs && obs.subscribe((obj: any) => {
                assert(isObservable(obj));
                done();
            })
            person.name = 'newName';
        })
        it("primitive change to itself wasn't observed", (done) => {
            const constName = 'Name';
            const person = new Person(constName, 15);
            const obs = getObservable(person);
            const timerId = setTimeout(() => {
                assert(true);
                done();
            }, 50)
            obs && obs.subscribe((obj: any) => {
                clearTimeout(timerId);
            })
            person.name = constName;
        })
        it("2 changes 2 submits", (done) => {
            const person = new Person('Name', 15);
            const obs = getObservable(person);
            let i = 0;
            obs && obs.subscribe((obj: any) => {
                i++;
            })
            person.age = 5;
            person.age = 15;
            setTimeout(() => {
                assert(i === 2)
                done()
            }, 50);
        })
        it("new Object", (done) => {
            const person = new Person('Name', 15);
            const obs = getObservable(person);
            obs && obs.subscribe((obj: any) => {
                assert.notEqual(obj, person);
                done();
            });
            person.age = 1;
        })
        it("only one change", (done) => {
            const person = new Person('Name', 15);
            const obs = getObservable(person);
            const oldName = person.name;
            const oldAge = person.age;
            const oldPets = person.pets;
            obs && obs.subscribe((obj: any) => {
                assert.notEqual(obj.name, oldName);
                assert.equal(obj.age, oldAge);
                assert.equal(oldPets, obj.pets);
                done();
            })
            person.name = 'Masha';
        })
        it("array change was observed", (done) => {
            const animal_1 = new Animal('animal_1');
            const animal_2 = new Animal('animal_2');
            const person = new Person('Name', 15, [animal_1]);
            const oldPets = person.pets;
            const obs = getObservable(person);
            obs && obs.subscribe((obj: any) => {
                assert.notEqual(oldPets, obj.pets);
                assert.equal(oldPets[0], obj.pets[0]);
                done();
            })
            oldPets.push(animal_2);
        })
        it("array was observed few times", (done) => {
            const animal_1 = new Animal('animal_1');
            const animal_2 = new Animal('animal_2');
            const person = new Person('Name', 15);
            const oldPets = person.pets;
            let i = 0;
            const obs = getObservable(person);
            obs && obs.subscribe((obj: any) => {
                i++;
            })
            person.pets.push(animal_1);
            person.pets.push(animal_2);
            person.pets.push(animal_1);
            setTimeout(() => {
                assert(i === 3)
                done()
            }, 50);
        })
        it("unsubscribe with primitive fields", (done) => {
            const person = new Person('Name', 15);
            const obs = getObservable(person);
            let i = 0;
            const unsubscribe = obs && obs.subscribe(() => {
                i++;
            })
            person.age = 1;
            person.name = 'Masha';
            unsubscribe && unsubscribe.dispose();
            person.age = 14;
            person.name = 'Vypsen';
            setTimeout(() => {
                assert(i === 2)
                done()
            }, 50);
        })
    })
    describe("toObservable", () => {
        it('isObservable', () => {
            const animal = toObservable(new Animal('name'));
            assert(isObservable(animal));
        })
        it('change observed', (done) => {
            const arr = [1, 2, 3];
            let animal = toObservable(arr);
            const obs = getObservable(animal);
            obs.subscribe((obj) => {
                assert.notEqual(obj, animal);
                done();
            })
            animal.push(1)
        })
    })
    // describe("questionnaire model", () => {
    //     it("is observable", () => {
    //         const q = new Questionnaire();
    //         assert(isObservable(q));
    //     })
    //     it("update questionnaire works", done => {
    //         const q = new Questionnaire();
    //         const oldTitle = q.title;
    //         const oldId = q.id;
    //         const oldItems = q.items;
    //         const expectedVal = 'bla';
    //         const obs = getObservable(q);
    //         obs.subscribe(quest => {
    //             assert.notEqual(q, quest);
    //             assert.equal(oldId, quest.id);
    //             assert.notEqual(oldTitle, quest.title);
    //             assert.equal(oldItems, quest.items);
    //             assert.equal(quest.title, expectedVal);
    //             done();
    //         })
    //         q.updateQuestionnaire({ ...q, title: expectedVal })
    //     })
    //     it("add observable item", done => {
    //         const i = new Item();
    //         const q = new Questionnaire();
    //         const oldItems = q.items;
    //         const obs = getObservable(q);
    //         obs.subscribe(quest => {
    //             assert(isObservable(quest.items[0]));
    //             assert.notEqual(quest.items, oldItems);
    //             done();
    //         })
    //         q.addItem();
    //     })
    //     it("remove item from questionnaire", done => {
    //         const i = new Item({});
    //         const q = new Questionnaire({ items: [i] });
    //         const oldItems = q.items;
    //         const obs = getObservable(q);
    //         obs.subscribe(quest => {
    //             assert(quest.items.length === 0);
    //             assert(oldItems.length === 1);
    //             done();
    //         })
    //         q.removeItem(i);
    //     })
    //     it("remove item from item", done => {
    //         const q = new Questionnaire();
    //         const i = new Item({}, q);
    //         q.addItem(i);
    //         const obs = getObservable(q);
    //         obs.subscribe(quest => {
    //             assert(Array.isArray(quest.items));
    //             assert(quest.items.indexOf(i) === -1);
    //             assert(quest.items.length === 0);
    //             done();
    //         });
    //         i.removeItem();
    //     })
    // })
})