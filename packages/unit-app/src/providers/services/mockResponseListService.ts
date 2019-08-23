import Axios from "axios";

export const mockResponseListService = {
    getResponseListByQuestionnaireId() {
        return Axios.get('/responseList.json')
            .then(data => data.data)
    }
}