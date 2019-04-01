const __subscribe = Symbol('subscribe');
const __emitChange = Symbol('emitChange');
const __subscribers = Symbol('subscribers');
const __notify = Symbol('notify');
const __getHandler = Symbol('getHandler');
const __subscribeOnObservable = Symbol('subscribeOnObservable');

export interface IObservable {
    subscribe(fn: Function): IDestroyable;
}

export interface IDestroyable {
    destroy(): void;
}

const createProxy = (target: any, handler: ProxyHandler<any>) => {
    return new Proxy(target, handler);
}

export const observable = <T extends { new(...args: any[]): {} }>(ctor: T) => {
    return class Observable extends ctor {
        [__subscribers]: Function[];

        constructor(...args: any[]) {
            super(...args);
            this[__subscribers] = [];
            console.log('OBSERVABLE', Object.keys(ctor.prototype));
            Object.keys(ctor.prototype).forEach(x => {
                console.log('isObs', isObservable(ctor.prototype[x]))
            })
            this[__subscribeOnObservable]();
            return createProxy(this, this[__getHandler]());
        }
        [__subscribeOnObservable]() {
            Object.keys(ctor.prototype).forEach((propertyName: string) => {
                if (isObservable(ctor.prototype[propertyName])) {
                    const observable = getObservable(ctor.prototype[propertyName]);
                    observable && observable.subscribe((arr: any[]) => {
                        this[propertyName] = arr;
                        this[__emitChange]();
                    })
                }
            })
        }

        [__notify](fn: Function) {
            setTimeout(() => {
                fn(createProxy(this, this[__getHandler]()));
            }, 0)
        }

        [__getHandler]() {
            return {
                set: (target: any, propertyName: string, value: any) => {
                    if (target[propertyName] !== value) {
                        target[propertyName] = value;
                        this[__emitChange]();
                    }
                    return true;
                }
            }
        }

        [__subscribe](fn: Function) {
            this[__subscribers].push(fn);
            const destroy = () => {
                this[__subscribers] = this[__subscribers].filter(x => x !== fn);
            }
            // this[__notify](fn);
            return ({
                destroy
            }) as IDestroyable
        }

        [__emitChange]() {
            this[__subscribers].forEach(this[__notify].bind(this))
        }
    }
}

export const observableArray = (target: any, key: string) => {
    console.log('===OBSERVABLE_ARRAY:', target, "KEY:", key, this[key]);
    let _array: any = [];
    _array[__notify] = (fn: Function) => {
        setTimeout(() => {
            fn(createProxy(_array, {
                set: (target: any, propertyName: string, value: any) => {
                    if (propertyName === 'length') {
                        target[propertyName] = value;
                    }
                    else if (target[propertyName] !== value) {
                        target[propertyName] = value;
                        _array[__emitChange]();
                    }
                    return true;
                }
            }))
        }, 0)
    }
    _array[__subscribers] = [];
    _array[__subscribe] = (fn: Function) => {
        _array[__subscribers].push(fn);
        const destroy = () => {
            _array[__subscribers] = _array[__subscribers].filter((x: any) => x !== fn);
        }
        return ({
            destroy
        }) as IDestroyable
    }
    _array[__emitChange] = () => {
        _array[__subscribers].forEach(_array[__notify].bind(_array));
    }
    const _handler = {
        set: (target: any, propertyName: string, value: any) => {
            if (propertyName === 'length') {
                target[propertyName] = value;
            }
            else if (target[propertyName] !== value) {
                target[propertyName] = value;
                _array[__emitChange]();
            }
            return true;
        }
    }
    _array = createProxy(_array, _handler);
    Object.defineProperty(target, key, {
        enumerable: true,
        set(arr: any[]) {
            _array = createProxy(arr, _handler);
        },
        get() {
            return _array;
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