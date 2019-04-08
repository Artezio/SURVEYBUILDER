import { toObservable, getObservable } from "../toObservable";


export const observable = <T extends { new(...args: any[]): {} }>(ctor: T) => {
    return class Observable extends ctor {
        constructor(...args: any[]) {
            super(...args);
            Object.keys(this)
                .filter(key => Array.isArray(this[key]))
                .forEach(propertyName => {
                    this[propertyName] = toObservable(this[propertyName]);
                    const obs = getObservable(this[propertyName]);
                    const disposable = obs.subscribe((value) => {
                        this._setField(propertyName, value);
                        disposable.dispose();
                    })
                });
            return toObservable(this);
        }

        _setField(propertyName: string, value: any) {
            const old = this[propertyName];
            this[propertyName] = toObservable(value);
            const obs = getObservable(this[propertyName]);
            obs.subscribe((value) => {
                this._setField(propertyName, value);
            })
            console.log('before emit')
            getObservable(this).emitChange();
        }
    }
}


// export function observableArray(target: any, propertyName: string) {
//     let _array = toObservable([]);
//     // Reflect.defineProperty(target.constructor, 'constructor', {
//     //     value: function () {
//     //         console.log('INSIDE NEW CONSTRUCTOR')
//     //         target.constructor.constructor.apply(this, arguments);
//     //         Reflect.defineProperty(this, propertyName, {
//     //             set: function (value: any[]) {
//     //                 _array = toObservable(value);
//     //             },
//     //             get: function () {
//     //                 return _array;
//     //             },
//     //             enumerable: true
//     //         })
//     //     }
//     // })
// return ({
//     set: function (value: any[]) {
//         _array = toObservable(value);
//     },
//     get: function () {
//         console.log('GETTER')
//         return _array;
//     },
//     enumerable: true
// }) as any
// }

var sym = Symbol();
export function observableArray(target: any, propertyName: string) {
    Reflect.defineProperty(target, sym, {
        value: toObservable({
            propertyName
        })
    })
}