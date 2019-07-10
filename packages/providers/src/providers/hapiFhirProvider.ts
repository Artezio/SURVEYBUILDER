import axios from 'axios';

export const hapiFhirProvider = {
    getQuestionnaireByPass(path: string) {
        return axios.get(`/Questionnaire/${path}`)
            .then(response => response.data)
    }
}

export default hapiFhirProvider;