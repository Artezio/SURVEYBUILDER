export interface IObservable {
    subscribe(fn: Function): IDisposable;
    emitChange(): void;
    mute(): void;
    unmute(): void;
}
export interface IDisposable {
    dispose(): void;
}