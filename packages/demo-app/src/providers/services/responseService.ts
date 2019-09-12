import axios from 'axios';
import IResponseService, { ResponseServiceOptions } from '../../interface/providers/IResponseService';



export class ResponseService implements IResponseService {
    resource: string;

    constructor() {
        this.resource = '/QuestionnaireResponse'; // empty space before questionnaireResponse because of proxy by webpack dev server!
    }

    getResponseListByQuestionnaireId(id: string, options: ResponseServiceOptions) {
        return axios.get(`${this.resource}/`, {
            params: {
                '_include': options && options.fieldToBeIncluded,
                'questionnaire': `${options.constantPrefix}${id}`,
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

    updateResponse(response: any) {
        return axios.put(`${this.resource}/${response.id}`, response)
            .then(x => x.data)
    }
}