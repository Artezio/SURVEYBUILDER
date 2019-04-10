import IChoiceOption from "../interfaces/IChoiceOption";
import uuid from "uuid/v1";

export const ChoiceOptionFactory = () => ({
    createOption(option?: Partial<IChoiceOption>): IChoiceOption {
        return {
            id: uuid()
        }
    }
})

export default ChoiceOptionFactory;