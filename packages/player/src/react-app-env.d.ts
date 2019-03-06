/// <reference types="react-scripts" />
type AssignToActions<T> = { 'actions': { [P in keyof T]: T[P] } }