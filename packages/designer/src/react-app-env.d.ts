/// <reference types="react-scripts" />
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type Assign<T, O> = { [P in O]: T }
type AssignToActions<T> = Assign<T, 'actions'>