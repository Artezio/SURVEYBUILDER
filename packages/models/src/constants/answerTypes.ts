export const BOOLEAN = 'BOOLEAN';
export type BOOLEAN = typeof BOOLEAN;

export const DECIMAL = 'DECIMAL';
export type DECIMAL = typeof DECIMAL;

export const DATE = 'DATE';
export type DATE = typeof DATE;

export const DATE_TIME = 'DATE_TIME';
export type DATE_TIME = typeof DATE_TIME;

export const TIME = 'TIME';
export type TIME = typeof TIME;

export const TEXT = 'TEXT';
export type TEXT = typeof TEXT;

export const CHOICE = 'CHOICE';
export type CHOICE = typeof CHOICE;

export const OPEN_CHOICE = 'OPEN_CHOICE';
export type OPEN_CHOICE = typeof OPEN_CHOICE;

export const ATTACHMENT = 'ATTACHMENT';
export type ATTACHMENT = typeof ATTACHMENT;

export const STRING = 'STRING';
export type STRING = typeof STRING;

export type ANSWER_TYPE = STRING | ATTACHMENT | OPEN_CHOICE | CHOICE | TEXT | TIME | DATE_TIME | DATE | DECIMAL | BOOLEAN;