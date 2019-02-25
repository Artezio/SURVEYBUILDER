import { Action } from '../interfaces/Action';

export function createAction<T, P>(type: T, payload: P): Action<T, P> {
    return {
        type: type,
        payload: payload
    }
}

export function createActionCreator<T, P>(type: T): (payload: P) => Action<T, P> {
    return (payload: P) => createAction<T, P>(type, payload);
}

export default createActionCreator;