/// <reference types="react-scripts" />
// type Assign<T, O> = { [P in O]: T }
type AssignToActions<T> = { 'actions': { [P in keyof T]: T[P] } }