export function createAction(type: any, payload: any) {
    return {
        type: type,
        payload: payload
    }
}

export function createActionCreator(type: any) {
    return (payload: any) => createAction(type, payload);
}