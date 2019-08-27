import { assert } from 'chai';
import { isObservable, toObservable, getObservable, observable, observableProperty } from '../../src/decorators/observable';


@observable
class Person {
    @observableProperty
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

@observable
class Animal {
    nickname: string;
    limbs: string[];

    constructor(nickname: string, limbs?: string[]) {
        this.nickname = nickname;
        this.limbs = limbs || [];
    }
}

@observable
class Player {
    @observableProperty
    names?: string[];
}



describe("decorators/observable", () => {
    describe("mock classes", () => {
        let person,
            animal_1,
            animal_2;
        beforeEach(() => {
            person = new Person('name', 10);
            animal_1 = new Animal('animal_1');
            animal_2 = new Animal('animal_2');
        })
        it("array was not initialized in constructor", (done) => {
            const player = new Player();
            const obs = getObservable(player);
            obs && obs.subscribe(() => {
                assert(true);
                done();
            })
            player.names = [];
        })
        it("plain object is observable", () => {
            const obj = toObservable({});
            assert(isObservable(obj))
        })
        it("array is observed", (done) => {
            const arr = toObservable([]);
            const obs = getObservable(arr);
            let i = 0;
            obs && obs.subscribe(() => {
                i++;
            })
            arr.push(1);
            arr.push(1);
            setTimeout(() => {
                assert.equal(i, 2)
                done()
            }, 50);
        })
        it("array was observed after initializing in run time", (done) => {
            const player = new Player();
            let i = 0;
            const obs = getObservable(player);
            obs && obs.subscribe(() => {
                i++;
            })
            player.names = [];
            player.names.push('1');
            player.names.push('1');
            setTimeout(() => {
                assert.equal(i, 3)
                done()
            }, 50);
        })
        it("is Observable", () => {
            // const person = new Person('Name', 15);
            assert(isObservable(person));
        })
        it("primitive change was observed", (done) => {
            // const person = new Person('Name', 15);
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
        it("Notify send same objects each time", (done) => {
            // const person = new Person('Name', 15);
            const obs = getObservable(person);
            let i = 0;
            let oldPerson;
            obs && obs.subscribe((obj: any) => {
                if (i >= 1) {
                    assert(obj === oldPerson);
                    done();
                } else {
                    oldPerson = obj;
                    i++;
                }
            })
            person.name = 'newName';
            person.name = 'newName2';
        })
        it("new object is observable", (done) => {
            // const person = new Person('Name', 15);
            const obs = getObservable(person);
            obs && obs.subscribe((obj: any) => {
                assert(isObservable(obj));
                done();
            })
            person.name = 'newName';
        })
        it("primitive change to itself wasn't observed", (done) => {
            const constName = 'name';
            person = new Person(constName, 15);
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
            // const person = new Person('Name', 15);
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
            // const person = new Person('Name', 15);
            const obs = getObservable(person);
            obs && obs.subscribe((obj: any) => {
                assert.notEqual(obj, person);
                done();
            });
            person.age = 1;
        })
        it("only one change", (done) => {
            // const person = new Person('Name', 15);
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
            // const animal_1 = new Animal('animal_1');
            // const animal_2 = new Animal('animal_2');
            // const person = new Person('Name', 15, [animal_1]);
            person = new Person('Name', 15, [animal_1]);
            const oldPet = person.pets[0];
            const obs = getObservable(person);
            obs && obs.subscribe((obj: any) => {
                assert.equal(oldPet, obj.pets[0]);
                done();
            })
            person.pets.push(animal_2);
        })
        it("array was observed few times", (done) => {
            // const animal_1 = new Animal('animal_1');
            // const animal_2 = new Animal('animal_2');
            // const person = new Person('Name', 15);
            const obs = getObservable(person);
            const dispose = obs && obs.subscribe((obj) => {
                const newPerson = obj;
                const obs = getObservable(newPerson);
                obs && obs.subscribe(() => {
                    assert(true);
                    done();
                })
                dispose && dispose.dispose();
                newPerson.pets.push(animal_2);
            })
            person.pets.push(animal_1);
        })
        it("nested nonObservable array was not observed", (done) => {
            // const animal_1 = new Animal('animal_1');
            // const animal_2 = new Animal('animal_2');
            // const person = new Person('Name', 15, [animal_1]);
            const person = new Person('Name', 15, [animal_1]);
            let i = 0;
            const obs = getObservable(person);
            obs && obs.subscribe(() => {
                i++
            })
            person.pets[0].limbs.push(animal_2);
            setTimeout(() => {
                assert(i === 0)
                done()
            }, 50);
        })
        it("unsubscribe with primitive fields", (done) => {
            // const person = new Person('Name', 15);
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
        it("there are no extra emits", (done) => {
            // const person = new Person('name', 10);
            let counter = getCounter();
            const obs = getObservable(person);
            obs && obs.subscribe(() => { counter.count() });
            person.pets.push(1);
            person.pets = [];
            person.pets.push(1);
            person.name = 'bla';
            setTimeout(() => {
                assert.equal(counter.getCount(), 4)
                done()
            }, 50);
        })
    })
})

function getCounter() {
    let counter = 0;
    return {
        getCount() {
            return counter;
        },
        count() {
            counter++;
        }
    }
}