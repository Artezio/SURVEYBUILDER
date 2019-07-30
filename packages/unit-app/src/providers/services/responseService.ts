import { HapiFhirService } from './hapiFhirService';


export class ResponseService {
    constructor(private service: HapiFhirService, public resource: string) {
        this.service = service;
        this.resource = resource;
    }

    getResponseListByQuestionnaireId(id: string, options: any) {
        return this.service.getResource(this.resource + '/', {
            params: {
                '_include': 'QuestionnaireResponse:questionnaire',
                'questionnaire': id,
                '_count': options && options.limit
            }
        });
    }

    getResponseById(id: string) {
        return this.service.getResource(`${this.resource}/${id}`);
    }

    putResponse(data: any) {
        // this.service.postResource(`/`)
    }

    updateResponseById(id: string, data: any) {
        // this.service.updateResource(`/`)
    }
}

