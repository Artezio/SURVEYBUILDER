type Primitive =
    | string
    | boolean
    | number
    | bigint
    | null
    | undefined;

export interface IEnableWhenAnswer {
    parentId: string;
    value: Primitive;
}

export default IEnableWhenAnswer;