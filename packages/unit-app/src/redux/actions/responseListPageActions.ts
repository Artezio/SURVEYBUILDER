import { responseProvider } from "../../providers/responseProvider";
import { createActionAsync } from "./actionCreators";
import { ACTIONS } from "../../constants/responseListPage";


export const responseListPageActions = {
    loadResponseListByQuestionnaireId: createActionAsync(
        [ACTIONS.LOAD_RESPONSE_LIST_FETCHING, ACTIONS.LOAD_RESPONSE_LIST_LOADED, ACTIONS.LOAD_RESPONSE_LIST_ERROR],
        (id: string) => responseProvider.getQuestionnaireListByQuestionnaireId(id)
    )
}