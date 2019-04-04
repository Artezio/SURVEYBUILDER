const __subscribe = Symbol('subscribe');
const __emitChange = Symbol('emitChange');
const __subscribers = Symbol('subscribers');
const __notify = Symbol('notify');


export interface IObservable {
    subscribe(fn: Function): IDestroyable;
}

export interface IDestroyable {
    destroy(): void;
}


export function toObservable(target: any) {
    // if(isObservable(target) || !Reflect.isExtensible(target)) {
    //     //throw
    //     return;
    // };

    //Reflect.defineProperty(target, __subscribers, { value: [] });

    if (!target[__subscribers]) {
        Reflect.defineProperty(target, __subscribers, {
            value: [],
            writable: true
        });
    }
    if (!target[__subscribe]) {
        Reflect.defineProperty(target, __subscribe, {
            value: function (fn: Function) {
                this[__subscribers].push(fn);
                function destroy() {
                    this[__subscribers] = this[__subscribers].filter(x => x !== fn);
                }
                return ({
                    destroy: destroy.bind(this)
                }) as IDestroyable
            }
        });
    }
    if (!target[__notify]) {
        Reflect.defineProperty(target, __notify, {
            value: function (fn: Function) {
                setTimeout(() => {
                    fn(toObservable(this));
                })
            }
        })
    }
    if (!target[__emitChange]) {
        Reflect.defineProperty(target, __emitChange, {
            value: function () {
                this[__subscribers].forEach(this[__notify].bind(this))
            }
        })
    }
    return new Proxy(target, {
        set: function (target: any, propertyName: string, value: any) {
            if (target[propertyName] !== value) {
                target[propertyName] = value;
                if (Array.isArray(target) && propertyName === 'length') {
                    return true;
                }
                target[__emitChange]();
            }
            return true;
        }
    })
}

export const isObservable = (obj: any) => {
    return obj && !!obj[__subscribe] && !!obj[__emitChange];
}

export const getObservable = (target: any): IObservable | undefined => {
    if (isObservable(target)) {
        return {
            subscribe: target[__subscribe].bind(target)
        };
    }
    return undefined;
}