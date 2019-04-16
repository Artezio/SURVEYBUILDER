import { toObservable, isObservable, getObservable } from "./toObservable";


export const observable = <T extends { new(...args: any[]): {} }>(ctor: T) => {
    return class Observable extends ctor {
        constructor(...args: any[]) {
            super(...args);
            Reflect.ownKeys(this)
                .filter((key: string) => isObservable(this[key]))
                .forEach((key: string) => {
                    getObservable(this[key]).subscribe((obj) => {
                        const obs = getObservable(this);
                        obs && obs.emitChange();
                    })
                })
            return toObservable(this);
        }
    }
}

export const observableProperty = (target: any, propertyName: string, ) => {
    Reflect.defineProperty(target, propertyName, {
        set(value) {
            Reflect.defineProperty(this, propertyName, {
                value: toObservable(value),
                enumerable: true
            })
        }
    })
}