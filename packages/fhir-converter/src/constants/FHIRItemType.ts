export const GROUP = 'group';
export type GROUP = typeof GROUP;

export const DISPLAY = 'display';
export type DISPLAY = typeof DISPLAY;

export const BOOLEAN = 'boolean';
export type BOOLEAN = typeof BOOLEAN;

export const DECIMAL = 'decimal';
export type DECIMAL = typeof DECIMAL;

export const DATE = 'date';
export type DATE = typeof DATE;

export const DATE_TIME = 'dateTime';
export type DATE_TIME = typeof DATE_TIME;

export const TIME = 'time';
export type TIME = typeof TIME;

export const TEXT = 'text';
export type TEXT = typeof TEXT;

export const CHOICE = 'choice';
export type CHOICE = typeof CHOICE;

export const OPEN_CHOICE = 'open-choice';
export type OPEN_CHOICE = typeof OPEN_CHOICE;

export const MULTI_CHOICE = 'multi-choice';/////////????????
export type MULTI_CHOICE = typeof MULTI_CHOICE;

export const ATTACHMENT = 'attachment';
export type ATTACHMENT = typeof ATTACHMENT;

export const STRING = 'string';
export type STRING = typeof STRING;

export type QUESTION_TYPE = STRING | ATTACHMENT | OPEN_CHOICE | CHOICE | TEXT | TIME | DATE_TIME | DATE | DECIMAL | BOOLEAN | MULTI_CHOICE;

export type FHIRItemType = DISPLAY | GROUP | QUESTION_TYPE;