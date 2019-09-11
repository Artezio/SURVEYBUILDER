import EnableWhen from "../models/enableWhen";

export interface IEnableWhenCollection {
    removeEnableWhen: (enableWhen: EnableWhen) => void;
}

export default IEnableWhenCollection;