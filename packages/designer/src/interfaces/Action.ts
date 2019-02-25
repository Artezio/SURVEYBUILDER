import { Action } from 'redux';

export interface Action<T, P> extends Action<T> {
    payload?: P;
}