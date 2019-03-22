const subscribeSymbol = Symbol('subscribe');
const emitChangeSymbol = Symbol('emitChange');
const subscribers = Symbol('subscribers');

interface IObservable {
    subscribe(fn: Function): Function;
}

const proxify = (target: any, handler: ProxyHandler<any>) => {
    return new Proxy(target, handler);
}

const proxifyOwnProperties = (obj: any, handler: ProxyHandler<any>) => {
    Object.getOwnPropertyNames(obj).forEach((propertyName: string) => {
        if (Array.isArray(obj[propertyName])) {
            obj[propertyName] = proxify(obj[propertyName], handler)
        }
    })
}

export const observable = <T extends { new(...args: any[]): {} }>(ctor: T) => {

    return class extends ctor {
        [subscribers]: Function[];

        constructor(...args: any[]) {
            super(args);
            this[subscribers] = [];
            const handler = {
                set: (target: any, propertyName: string, value: any) => {
                    // const oldValue = target[propertyName];
                    target[propertyName] = value;
                    // console.log("LOOOOG", oldValue, value, !Object.is(oldValue, value));///////    look
                    if (propertyName !== 'length'/* && !Object.is(oldValue, value)*/) {
                        this[emitChangeSymbol]();
                    }
                    return true;
                }
            }
            proxifyOwnProperties(this, handler);
            return proxify(this, {
                set: (target: any, propertyName: string, value: any) => {
                    if (Array.isArray(value)) {
                        value = proxify(value, handler)
                    }
                    // const oldValue = target[propertyName];
                    // console.log("LOOOOG", oldValue,Array.isArray(target[propertyName]), value, !Object.is(oldValue, value));///////    look
                    target[propertyName] = value;
                    if (propertyName !== 'length'/* && !Object.is(oldValue, value)*/) {
                        this[emitChangeSymbol]();
                    }
                    return true;
                }
            });
        }

        [subscribeSymbol](fn: Function) {
            this[subscribers].push(fn);
            return () => {
                this[subscribers] = this[subscribers].filter(x => x !== fn);
            }
        }

        [emitChangeSymbol]() {
            this[subscribers].forEach(x => {
                setTimeout(() => {
                    x({ ...(this as any) })
                }, 0)
            })
        }
    }
}

const isObservable = (obj: any) => {
    return obj && !!obj[subscribeSymbol];
}

export const getObservable = (target: any): IObservable | undefined => {
    if (isObservable(target)) {
        return {
            subscribe: target[subscribeSymbol].bind(target)
        };
    }
    return undefined;
}