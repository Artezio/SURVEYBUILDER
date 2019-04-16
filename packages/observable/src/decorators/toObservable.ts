import 'reflect-metadata';

const subscribe = Symbol('subscribe');
const emitChange = Symbol('emitChange');
const _subscribers = Symbol('subscribers');
const _notify = Symbol('notify');
const _isMuted = Symbol('isMuted');
const mute = Symbol('mute');
const unmute = Symbol('unmute');


export interface IObservable {
    subscribe(fn: Function): IDisposable;
    emitChange(): void;
    mute(): void;
    unmute(): void;
}

export interface IDisposable {
    dispose(): void;
}
const _handler = {
    set(target: any, propertyName: string, value: any) {
        if (target[propertyName] === value) {
            return true;
        }
        if (Reflect.getMetadata("observableProperty", target, propertyName)) {
            target[propertyName] = toObservable(value);
            getObservable(target[propertyName]).subscribe(() => {
                target[emitChange] && target[emitChange]()
            })
        }
        else {
            target[propertyName] = value;
        }
        if (Array.isArray(target) && propertyName === 'length') {
            return true;
        }
        target[emitChange] && target[emitChange]();
        return true;
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

export function proxify(target: any) {
    return new Proxy(target, _handler)
}

function _addMethods(target: any) {
    if (isObservable(target) || (typeof target === 'object' && !Reflect.isExtensible(target))) {
        return false;
    }

    Reflect.defineProperty(target, _isMuted, { value: false, writable: true })

    Reflect.defineProperty(target, _subscribers, { value: [] });

    Reflect.defineProperty(target, subscribe, {
        value: function (fn: Function) {
            const index = this[_subscribers].push(fn) - 1;
            return ({
                dispose: () => { this[_subscribers].splice(index, 1) }
            }) as IDisposable
        }
    });

    Reflect.defineProperty(target, _notify, {
        value: function (fn: Function) {
            setTimeout(() => {
                fn(toObservable(this));
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
            this[emitChange]();
        }
    })

    return true;
}

export function toObservable(target: any) {
    _addMethods(target);
    return proxify(target);
}