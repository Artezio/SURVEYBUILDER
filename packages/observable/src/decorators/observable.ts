import { toObservable, isObservable, getObservable } from "../toObservable";


export const observable = <T extends { new(...args: any[]): {} }>(ctor: T) => {
    return class Observable extends ctor {
        constructor(...args: any[]) {
            super(...args);
            Object.keys(this).forEach((propertyName: string) => {
                if (isObservable(this[propertyName])) {
                    const obs = getObservable(this[propertyName]);
                    obs.subscribe(field => {
                        this[propertyName] = field;
                    })
                }
            })
            return toObservable(this);
        }
    }
}

// var clone = function clone(func) {
//     return function (obj) {
//         func.prototype = obj;
//         return new func;
//     }
// }(function () { });

// function extend(A, B) {
//     A.prototype = clone(B.prototype);
//     A.prototype.constructor = A;
//     return A;
// };


export const observableArray = (target: any, propertyName: string) => {
    let _array = toObservable([]);
    console.log('======', target, target.constructor)

    // target.constructor = (function (Ctor) {
    //     return extend(function () {
    //         Ctor.apply(this, arguments);
    //         console.log('MB THIS WILL WORK')
    //         Reflect.defineProperty(this, propertyName, {
    //             set: function (value: any[]) {
    //                 _array = toObservable(value);
    //             },
    //             get: function () {
    //                 return _array;
    //             },
    //             enumerable: true
    //         })
    //     }, Ctor)
    // }(target.constructor));

    const result = Reflect.defineProperty(target.constructor, 'constructor', {
        value: function () {
            console.log('INSIDE NEW CONSTRUCTOR')
            target.constructor.constructor.apply(this, arguments);
            Reflect.defineProperty(this, propertyName, {
                set: function (value: any[]) {
                    _array = toObservable(value);
                },
                get: function () {
                    return _array;
                },
                enumerable: true
            })
        }
    })
    console.log('CONSTRUCTOR DEFINED: ', result)
}