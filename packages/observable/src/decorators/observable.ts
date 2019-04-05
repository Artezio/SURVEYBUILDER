import { toObservable, isObservable, getObservable } from "../toObservable";


export const observable = <T extends { new(...args: any[]): {} }>(ctor: T) => {
    return class Observable extends ctor {
        constructor(...args: any[]) {
            super(...args);
            Object.getOwnPropertySymbols(Observable.prototype)
                .map((symbol: any) => {
                    if (isObservable(Observable.prototype[symbol])) {
                        return Observable.prototype[symbol];
                    }
                })
                .forEach((obj: any) => {
                    Reflect.defineProperty(this, obj.key, {
                        value: toObservable([])
                    })
                    const obs = getObservable(this[obj.key]);
                    obs.subscribe(value => {
                        this[obj.key] = value;
                    })
                })
            // .forEach((propertyName: any) => {
            //     if (isObservable(this[propertyName])) {
            //         const obs = getObservable(this[propertyName]);
            //         obs.subscribe(field => {
            //             this[propertyName] = field;
            //         })
            //     }
            // })
            return toObservable(this);
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
//     return ({
//         set: function (value: any[]) {
//             _array = toObservable(value);
//         },
//         get: function () {
//             console.log('GETTER')
//             return _array;
//         },
//         enumerable: true
//     }) as any
// }


export function observableArray(target: any, propertyName: string) {
    Reflect.defineProperty(target, Symbol(), {
        value: toObservable({
            propertyName
        })
    })
}