import IChoiceOption from "../interfaces/IChoiceOption";
import uuid from "uuid/v1";

export const ChoiceOptionFactory = {
    createChoiceOption(option?: Partial<IChoiceOption>): IChoiceOption {
        return {
            id: uuid(),
            ...option
        }
    }
}

export default ChoiceOptionFactory;