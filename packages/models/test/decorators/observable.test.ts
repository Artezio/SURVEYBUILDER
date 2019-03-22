const assert = require('chai').assert;
import { getObservable, observable } from '../../src/decorators/observable';


@observable
class Person {
    name: string;
    age: number;
    pets: Animal[];

    constructor(name: string, age: number, pets?: Animal[]) {
        this.name = name;
        this.age = age;
        this.pets = pets || [];
    }

    setAge(age: number) {
        this.age = age;
    }

    setName(name: string) {
        this.name = name;
    }

    throwPet(pet: Animal) {
        this.pets = this.pets.filter(x => x !== pet);
    }

    buyPet(pet: Animal) {
        this.pets.push(pet);
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

    cutLimb(limb: string) {
        this.limbs = this.limbs.filter(x => x !== limb);
    }

    growLimb(limb: string) {
        this.limbs.push(limb);
    }
}



describe("decorators/observable", () => {
    it("is Observable", () => {
        const person = new Person('Name', 15);
        assert.notEqual(getObservable(person), undefined)
    })
    it("primitive change was observed", (done) => {
        const person = new Person('Name', 15);
        const obs = getObservable(person);
        const oldName = person.name;
        obs && obs.subscribe((obj: any) => {
            assert.notEqual(oldName, obj.name)
            done();
        })
        person.setName('Petya');
    })
    it("primitive change to itself wasn't observed", (done) => {
        const person = new Person('Name', 15);
        const obs = getObservable(person);
        const oldName = person.name;
        obs && obs.subscribe((obj: any) => {
            assert.equal(oldName, obj.name)
            done();
        })
        person.setName('Name');
    })
    it("1 change 1 submit", (done) => {
        const person = new Person('Name', 15);
        const obs = getObservable(person);
        let i = 0;
        obs && obs.subscribe((obj: any) => {
            i++;
        })
        person.setAge(5);
        setTimeout(() => {
            assert(i === 1)
            done()
        }, 100);
    })
    it("2 changes 2 submits", (done) => {
        const person = new Person('Name', 15);
        const obs = getObservable(person);
        let i = 0;
        obs && obs.subscribe((obj: any) => {
            i++;
        })
        person.setAge(5);
        person.setAge(15);
        setTimeout(() => {
            assert(i === 2)
            done()
        }, 100);
    })
    it("new Object", (done) => {
        const person = new Person('Name', 15);
        const obs = getObservable(person);
        obs && obs.subscribe((obj: any) => {
            assert.notEqual(obj, person);
            done();
        })
        person.setAge(1);
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
        person.setName('Masha');
    })
    it("array change was observed", (done) => {
        const animal_1 = new Animal('animal_1');
        const animal_2 = new Animal('animal_2');
        const person = new Person('Name', 15, [animal_1]);
        const oldPets = person.pets;
        const obs = getObservable(person);
        obs && obs.subscribe((obj: any) => {
            assert.notEqual(oldPets, obj.pets);
            assert.notEqual(oldPets[0], obj.pets[0]);
            done();
        })
        person.buyPet(animal_2);
    })
    it("unsubscribe with primitive fields", (done) => {
        const person = new Person('Name', 15);
        const obs = getObservable(person);
        let i = 0;
        const unsubscribe = obs && obs.subscribe(() => {
            i++;
        })
        person.setAge(1);
        person.setName('Masha');
        unsubscribe && unsubscribe();
        person.setAge(14);
        person.setName('Vypsen');
        setTimeout(() => {
            assert(i === 2)
            done()
        }, 100);
    })
})