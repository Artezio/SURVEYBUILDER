import { createStore } from 'redux';
import { createReducer } from '../reducers/createReducer';

export const makeStore = (initialState?: any | null) => createStore(createReducer(), initialState);