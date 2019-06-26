import IEnableWhen from "../interfaces/IEnableWhen";
import uuid from 'uuid/v1';

export const enableWhenFactory = {
    createEnableWhen(enableWhen?: Omit<IEnableWhen, 'id'>): IEnableWhen {
        return Object.assign({ id: uuid() }, enableWhen);
    }
}

export default enableWhenFactory;