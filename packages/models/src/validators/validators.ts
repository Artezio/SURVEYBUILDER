const stringRegExp = /[ \r\n\t\S]+/;
const textRegExp = /[ \r\n\t\S]+/;
const decimalRegExp = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?/;
const booleanRegExp = /true|false/;
const dateRegExp = /([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?/;
const timeRegExp = /([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?/;
const dateTimeRegExp = /([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;

const testByRegExp = (value: any, regExp: RegExp) => regExp.test('' + value);

export const validators = {
    string(value: string) {
        return testByRegExp(value, stringRegExp);
    },
    text(value: string) {
        return testByRegExp(value, textRegExp);
    },
    decimal(value: number) {
        return testByRegExp(value, decimalRegExp);
    },
    boolean(value: boolean) {
        return testByRegExp(value, booleanRegExp);
    },
    date(value: string) {
        return testByRegExp(value, dateRegExp);
    },
    time(value: string) {
        return testByRegExp(value, timeRegExp);
    },
    dateTime(value: string) {
        return testByRegExp(value, dateTimeRegExp);
    }
}

export default validators;