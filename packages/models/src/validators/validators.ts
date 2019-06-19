import { REQUIRED, REG_EXP } from "../constants/errorMessages";

const stringRegExp = /12345/;
const textRegExp = /[ \r\n\t\S]+/; // for text and string
const decimalRegExp = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?/;
const booleanRegExp = /true|false/;
const dateRegExp = /([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?/;
const timeRegExp = /([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?/;
const dateTimeRegExp = /([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;

const testByRegExp = (value: any, regExp: RegExp) => regExp.test('' + value) ? undefined : REQUIRED;
const testByRequired = (value: any) => (value !== undefined && value !== '') ? undefined : REG_EXP;
export const validators = {
    stringRegExp(value: string) {
        return testByRegExp(value, stringRegExp);
    },
    textRegExp(value: string) {
        return testByRegExp(value, textRegExp);
    },
    decimalRegExp(value: number) {
        return testByRegExp(value, decimalRegExp);
    },
    booleanRegExp(value: boolean) {
        return testByRegExp(value, booleanRegExp);
    },
    dateRegExp(value: string) {
        return testByRegExp(value, dateRegExp);
    },
    timeRegExp(value: string) {
        return testByRegExp(value, timeRegExp);
    },
    dateTimeRegExp(value: string) {
        return testByRegExp(value, dateTimeRegExp);
    },
    required(value: any) {
        return testByRequired(value);
    }
}

export default validators;