import axios, { AxiosRequestConfig } from 'axios';
import IQuestionnaireService, { QuestionnaireServiceOptions } from '../../interface/providers/IQuestionnaireService';


const optionsToConfig = (opt?: QuestionnaireServiceOptions): AxiosRequestConfig | undefined => {
    return opt && {
        params: {
            '_count': opt.limit,
            'title': opt.titleMatch
        }
    }
}
export class QuestionnaireHapiFhirService implements IQuestionnaireService {
    resource: string;

    constructor() {
        this.resource = '/Questionnaire'; // empty space before questionnaire because of proxy by webpack dev server!
    }

    getQuestionnaireList(options?: QuestionnaireServiceOptions) {
        return axios.get(`${this.resource}/`, optionsToConfig(options))
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

    updateQuestionnaireById(id: string, data: any) {
        return axios.put(`${this.resource}/${id}`, data)
            .then(x => x.data);
    }

    deleteQuestionnaireById(id: string) {
        return axios.delete(`${this.resource}/${id}`)
            .then(x => x.data);
    }
}
