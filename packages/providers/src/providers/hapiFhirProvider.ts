import axios from 'axios';

export const hapiFhirProvider = {
    getQuestionnaireByPass(path: string) {
        return axios.get(`/Questionnaire/${path}`)
            .then(response => response.data)
    },
    postNewQuestionnaire(questionnaire: string) {
        return axios.post('/Questionnaire?_format=json&_pretty=true', questionnaire)
    }
}

export default hapiFhirProvider;