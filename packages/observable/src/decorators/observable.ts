import { toObservable, isObservable, getObservable } from "../toObservable";


export const observable = <T extends { new(...args: any[]): {} }>(ctor: T) => {
    return class Observable extends ctor {
        constructor(...args: any[]) {
            super(...args);
            // Object.getOwnPropertySymbols(ctor.prototype)
            //     .map((symbol: any) => {
            //         if (isObservable(ctor.prototype[symbol])) {
            //             return ctor.prototype[symbol];
            //         }
            //     })
            //     .forEach((obj: any) => {
            //         let _array = toObservable([]);
            //         Reflect.defineProperty(this, obj.key, {
            //             set: function (value: any[]) {
            //                 console.log('SETTER')
            //                 _array = toObservable(value);
            //             },
            //             get: function () {
            //                 console.log('GETTER')
            //                 return _array;
            //             },
            //             enumerable: true
            //         })
            //         const obs = getObservable(this[obj.key]);
            // obs.subscribe(value => {
            //     this[obj.key] = value;
            // })
            //     })
            // console.log(isObservable((this as any).pets))
            // .forEach((propertyName: any) => {
            //     if (isObservable(this[propertyName])) {
            //         const obs = getObservable(this[propertyName]);
            //         obs.subscribe(field => {
            //             this[propertyName] = field;
            //         })
            //     }
            // })
            Object.keys(this)
                .filter(key => Array.isArray(this[key]))
                .forEach(propertyName => {
                    // let _array = toObservable([]);
                    // Reflect.defineProperty(this, propertyName, {
                    //     set: function (value: any[]) {
                    //         console.log('SETTER')
                    //         _array = toObservable(value);
                    //     },
                    //     get: function () {
                    //         console.log('GETTER')
                    //         return _array;
                    //     },
                    //     enumerable: true
                    // })
                    this[propertyName] = toObservable(this[propertyName]);
                    const obs = getObservable(this[propertyName]);
                    obs.subscribe(function (value) {
                        console.log(this[propertyName])
                        this[propertyName] = toObservable(value);
                    })
                })

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