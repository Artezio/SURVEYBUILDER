import IEnableWhen from "../interfaces/IEnableWhen";
import EnableWhen from "../models/enableWhen";
import IEnableWhenCollection from "../interfaces/IEnableWhenCollection";


export class EnableWhenFactory {
    parent?: IEnableWhenCollection;

    constructor(parent?: IEnableWhenCollection) {
        this.parent = parent;
    }

    createEnableWhen(enableWhen: Partial<IEnableWhen>) {
        return new EnableWhen(enableWhen, this.parent);
    }
}

export default EnableWhenFactory;