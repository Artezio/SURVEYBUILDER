import { HapiFhirService } from './hapiFhirService';


export class QuestionnaireService {
    constructor(private service: HapiFhirService) {
        this.service = service;
    }

    getQuestionnaireList(options: any) {
        return this.service.getResource('/', { params: { '_count': options && options.limit } });
    }

    getQuestionnaireById(id: string) {
        return this.service.getResource('/' + id);
    }

    putQuestionnaire(data: any) {
        return this.service.postResource('/', data);
    }

    updateQuestionnaireById(id: string, data: any) {
        return this.service.updateResource('/' + id, data);
    }

    deleteQuestionnaireById(id: string) {
        return this.service.deleteResource('/' + id);
    }
}