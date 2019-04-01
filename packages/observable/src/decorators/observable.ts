const __subscribe = Symbol('subscribe');
const __emitChange = Symbol('emitChange');
const __subscribers = Symbol('subscribers');
const __notify = Symbol('notify');
const __getHandler = Symbol('getHandler');

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
            return createProxy(this, this[__getHandler]());
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
            return ({
                destroy
            }) as IDestroyable
        }

        [__emitChange]() {
            this[__subscribers].forEach(this[__notify].bind(this))
        }
    }
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