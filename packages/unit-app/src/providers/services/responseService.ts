import { HapiFhirService } from './hapiFhirService';


export class ResponseService {
    constructor(private service: HapiFhirService) {
        this.service = service;
    }

    getResponseListByQuestionnaireId(id: string, options: any) {
        return this.service.getResource('/', {
            params: {
                '_include': 'QuestionnaireResponse:questionnaire',
                'questionnaire': id,
                '_count': options && options.limit
            }
        });
    }

    getResponseById(id: string) {
        return this.service.getResource(`/${id}`);
    }
}