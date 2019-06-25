type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
declare module "json-logic-js" {
    export const apply = (...any) => boolean;
}