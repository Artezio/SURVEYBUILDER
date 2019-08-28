# @art-forms/observable
Typescript library helps you to observe models changes. Library is written with es7 decorators. The decorator listens for any changes in the observable object thanks to the proxy and generates an event.
***
## _Installation_
with npm
>$ npm install -D @art-forms/observable

with yarn
>$ yarn add -D @art-forms/observable

***
## _Example_

Use observable decorator to make all instances observable. To understand that changes have been made we compare old value with new, so to catch changes in complex types like array you should mark array property with "observableProperty" decorator.

```typescript
import { observable, observableProperty, getObservable } from 'art-forms/models';

@observable
class Person {
    name: string;
    @observableProperty
    pets: string[];
    constructor(name: string, pets?: string[]) {
        this.name = name;
        this.pets = pets || [];
    }

    addPet(pet: string) {
        this.pets.push(pet);
    }
}

const person = new Person('Name');
const observableMethods = getObservable(person);
observableMethods && observableMethods.subscribe(person => {
    console.log('updated Person:', person);
})
person.addPet('Cat');/// will log "updated Person: Person {name: "Name", pets: Array(1)}"
```

## _API_

To make you object observable simply run this:
```typescript
import { toObservable } from 'art-forms/models';
var myObject = {...};
myObject = toObservable(myObject);
```
Now your object is observable and you can subscribe on its changes, to do it you should get method subscribe:

```typescript
import { getObservable } from 'art-forms/models';
getObservable(myObject).subscribe(obj => {
    console.log("My object has changed, now it:", obj);
})
```
> NOTICE! getObservable() returns object with methods OR undefined. If you are not sure that object is observable, check the result:

```typescript
const observableMethods = getObservable(someObject);
if(observableMethods) {
    observableMethods.subscribe(...)
}
```
> There is another way to check out if the object is observable, by using the isObservable function. It will be explained later


To fire event immediately do following:
```typescript
getObservable(myObject).emitChange();
```

You can also both mute() and unmute() your observable object:
```typescript
getObservable(myObject).mute();
myObject.name = 'newName';// will not generate an event;
getObservable(myObject).unmute();
myObject.name = 'oldName';// will log "My object has changed, now it: {name: oldName}"
```

To find out if the object is observable use isObservable():
```typescript
import { isObservable } from 'art-forms/observable';
console.log(isObservable(myObject));// true;
```

To make all instances of particular Class mark it with observable decorator
```typescript
import { observable } from 'art-forms/observable';

@observable
class MyClass {
    ...
}
```

To understand that changes have been made we compare old value with new, so to catch changes in complex types like array you should mark array property with "observableProperty" decorator.

```typescript
import { observable, observableProperty } from 'art-forms/observable';

@observable
class MyClass {
    @observableProperty
    myProperty: object;
    ...
}
```
