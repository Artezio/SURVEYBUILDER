import axios from "axios";

export const mockResponseListService = {
    getResponseListByQuestionnaireId() {
        return axios.get('/responseList.json')
            .then(data => data.data)
    }
}