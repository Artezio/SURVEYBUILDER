import uuid from "uuid/v1";
import { IMultiChoiceOption } from "..";

export const MultiChoiceOptionFactory = {
    createMultiChoiceOption(option?: Partial<IMultiChoiceOption>): IMultiChoiceOption {
        return {
            id: uuid(),
            ...option
        }
    }
}

export default MultiChoiceOptionFactory;