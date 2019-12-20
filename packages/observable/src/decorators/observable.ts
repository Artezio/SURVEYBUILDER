import 'reflect-metadata';
import { IDisposable, IObservable } from '../interfaces';

const subscribe = Symbol('subscribe');
const emitChange = Symbol('emitChange');
const _subscribers = Symbol('subscribers');
const _notify = Symbol('notify');
const _isMuted = Symbol('isMuted');
const mute = Symbol('mute');
const unmute = Symbol('unmute');
const observablePropertySym = Symbol('observableProperty');

const notEqualToSymbols = (key: Symbol) => {
    return key !== _subscribers && key !== subscribe && key !== emitChange && key !== _notify && key !== _isMuted && key !== mute && key !== unmute;
}

export function observable<T extends { new(...args: any[]): {} }>(ctor: T) {
    return class Observable extends ctor {
        constructor(...args: any[]) {
            super(...args);
            subscribeOnObservableProperties(this);
            return toObservable(this);
        }
    }
}

function subscribeOnObservableProperties(obj) {
    Reflect.ownKeys(obj)
        .filter((key: string) => isObservable(obj[key]))
        .forEach((key: string) => {
            getObservable(obj[key]).subscribe(() => {
                const obs = getObservable(obj);
                obs && obs.emitChange();
            })
        })
}

export function observableProperty(target: any, propertyName: string) {
    Reflect.defineProperty(target, propertyName, {
        set(value) {
            Reflect.defineProperty(this, propertyName, {
                value: isObservable(value) ? value : toObservable(value),
                enumerable: true,
                writable: true,
                configurable: true
            });
        }
    })
    if (!Reflect.hasMetadata(observablePropertySym, target, propertyName)) {
        Reflect.defineMetadata(observablePropertySym, true, target, propertyName);
    }
}

export function isObservable(obj: any) {
    return obj && typeof obj === 'object' && (subscribe in obj) && (emitChange in obj) && (_subscribers in obj) && (_notify in obj) && (mute in obj) && (unmute in obj) && (_isMuted in obj);
}

export function getObservable(target: any): IObservable | undefined {
    if (isObservable(target)) {
        return {
            subscribe: target[subscribe].bind(target),
            emitChange: target[emitChange].bind(target),
            mute: target[mute].bind(target),
            unmute: target[unmute].bind(target)
        };
    }
    return undefined;
}

export function toObservable(target: any) {
    _addMethods(target);
    return _proxify(target);
}

const _handler = {
    set(target: any, propertyName: string, value: any) {
        if (Reflect.getMetadata(observablePropertySym, target.__proto__, propertyName)) {
            target[propertyName] = isObservable(value) ? value : toObservable(value);
            getObservable(target[propertyName]).subscribe(() => {
                target[emitChange] && target[emitChange]();
            })
        } else {
            if (target[propertyName] === value) {
                return true;
            }
            target[propertyName] = value;
        }

        if (notEqualToSymbols(propertyName as any) && !(Array.isArray(target) && propertyName === 'length')) {
            target[emitChange] && target[emitChange]();
        }

        return true;
    },
    deleteProperty(target: any, propertyName: string) {
        if (Array.isArray(target)) {
            target.splice(+propertyName, 1);
            target[emitChange] && target[emitChange]();
            return true;
        }
        delete target[propertyName];
        target[emitChange] && target[emitChange]();
        return true;
    }
}

function _proxify(target: any) {
    return new Proxy(target, _handler)
}

function _addMethods(target: any) {
    if (isObservable(target) || (typeof target === 'object' && !Reflect.isExtensible(target))) return;

    Reflect.defineProperty(target, _isMuted, { value: false, writable: true })

    Reflect.defineProperty(target, _subscribers, { value: new Set(), writable: true });

    Reflect.defineProperty(target, subscribe, {
        value: function (fn: Function) {
            this[_subscribers].add(fn);
            return ({
                dispose: () => { this[_subscribers].delete(fn) }
            }) as IDisposable
        }
    });

    Reflect.defineProperty(target, _notify, {
        value: function (fn: Function) {
            setTimeout(() => {
                fn(this);
            })
        }
    })

    Reflect.defineProperty(target, emitChange, {
        value: function () {
            if (!this[_isMuted]) {
                this[_subscribers].forEach(this[_notify].bind(this))
            }
        }
    })

    Reflect.defineProperty(target, mute, {
        value: function () {
            this[_isMuted] = true;
        }
    })

    Reflect.defineProperty(target, unmute, {
        value: function () {
            this[_isMuted] = false;
        }
    })
}