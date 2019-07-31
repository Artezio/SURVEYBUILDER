import { HapiFhirService } from './hapiFhirService';


export class ResponseService {
    constructor(private service: HapiFhirService, public resource: string) {
        this.service = service;
        this.resource = resource;
    }

    getResponseListByQuestionnaireId(id: string, options?: any) {
        return this.service.getResource(this.resource + '/', {
            params: {
                '_include': 'QuestionnaireResponse:questionnaire',
                'questionnaire': `${this.service.baseUrl}/Questionnaire/${id}`,
                '_count': options && options.limit
            }
        });
    }

    getResponseById(id: string) {
        return this.service.getResource(`${this.resource}/${id}`);
    }

    putResponse(data: any) {
        return this.service.postResource(`${this.resource}/`, data);
    }

    updateResponseById(id: string, data: any) {
        return this.service.updateResource(`${this.resource}/${id}`, data);
    }
}

