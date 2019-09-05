export const EXISTS = 'exists';
export type EXISTS = typeof EXISTS;

export const EQUAL = '=';
export type EQUAL = typeof EQUAL;

export const NOT_EQUAL = '!=';
export type NOT_EQUAL = typeof NOT_EQUAL;

export const MORE = '>';
export type MORE = typeof MORE;

export const LESS = '<';
export type LESS = typeof LESS;

export const MORE_OR_EQUAL = '>=';
export type MORE_OR_EQUAL = typeof MORE_OR_EQUAL;

export const LESS_OR_EQUAL = '<=';
export type LESS_OR_EQUAL = typeof LESS_OR_EQUAL;

export type FHIREnableWhenOperator = EXISTS | EQUAL | NOT_EQUAL | MORE | LESS | MORE_OR_EQUAL | LESS_OR_EQUAL;