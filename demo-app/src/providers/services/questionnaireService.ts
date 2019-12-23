import axios from 'axios';
import IQuestionnaireService from '../../interface/providers/IQuestionnaireService';

export class QuestionnaireHapiFhirService implements IQuestionnaireService {
    resource: string;

    constructor() {
        this.resource = '/Questionnaire'; // empty space before questionnaire because of proxy by webpack dev server!
    }

    getQuestionnaireList() {
        return axios.get(`${this.resource}/`, { params: { '_count': 10, 'title': '@artezio' } })
            .then(x => x.data)
            .then(responseData => responseData.entry)
            .then(entries => entries.map((entry: any) => entry.resource))
    }

    getQuestionnaireById(id: string) {
        return axios.get(`${this.resource}/${id}`)
            .then(x => x.data);
    }

    putQuestionnaire(data: any) {
        return axios.post(`${this.resource}/`, data)
            .then(x => x.data);
    }

    updateQuestionnaire(questionnaire: any) {
        return axios.put(`${this.resource}/${questionnaire.id}`, questionnaire)
            .then(x => x.data);
    }

    deleteQuestionnaireById(id: string) {
        return axios.delete(`${this.resource}/${id}`)
            .then(x => x.data);
    }
}
