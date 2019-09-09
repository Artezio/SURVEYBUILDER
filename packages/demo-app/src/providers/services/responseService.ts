import axios from 'axios';


interface ResponseServiceOptions {
    fieldToBeIncluded?: string;
    entriesLimit?: number;
}

export class ResponseService {
    resource: string;

    constructor() {
        this.resource = '/QuestionnaireResponse'; // empty space before questionnaireResponse because of proxy by webpack dev server!
    }

    getResponseListByQuestionnaireId(id: string, options?: ResponseServiceOptions) {
        return axios.get(`${this.resource}/`, {
            params: {
                '_include': options && options.fieldToBeIncluded,
                'questionnaire': `Questionnaire/${id}`,
                '_count': options && options.entriesLimit
            }
        })
            .then(x => x.data)
            .then(responseData => responseData.entry)
            .then(entries => entries.map((entry: any) => entry.resource))
    }

    getResponseById(id: string) {
        return axios.get(`${this.resource}/${id}`)
            .then(x => x.data)
    }

    putResponse(data: any) {
        return axios.post(`${this.resource}/`, data)
            .then(x => x.data)
    }

    updateResponseById(id: string, data: any) {
        return axios.put(`${this.resource}/${id}`, data)
            .then(x => x.data)
    }
}

