import axios from 'axios';


export const hapiFhirProvider = {
    getQuestionnaireResourceByPass(path: string) {
        return axios.get(`/Questionnaire/${path}`)
            .then(response => response.data)
    },
    postNewQuestionnaire(questionnaire: string) {
        return axios.post('/Questionnaire', questionnaire)
    }
}

export default hapiFhirProvider;