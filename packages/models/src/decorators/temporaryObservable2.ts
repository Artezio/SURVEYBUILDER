import { toObservable, getObservable } from "./toObservable";








export const observable = <T extends { new(...args: any[]): {} }>(ctor: T) => {
    return class Observable extends ctor {
        constructor(...args: any[]) {
            super(...args);
            Object.keys(this)
                .filter(key => Array.isArray((this as any)[key]))
                .forEach(propertyName => {
                    (this as any)[propertyName] = toObservable((this as any)[propertyName]);
                    const obs = getObservable((this as any)[propertyName]);
                    obs && obs.subscribe((value: any) => {
                        const obs = getObservable(this);
                        obs && obs.emitChange();
                    })
                });
            return toObservable(this);
        }
    }
}