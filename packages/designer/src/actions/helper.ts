import { Action } from '../interfaces/actionTypes';

export function actionCreator<T, P>(type: T): (payload: P) => Action<T, P> {
    return (payload: P) => ({
        type: type,
        payload: payload
    })
}

export default actionCreator;