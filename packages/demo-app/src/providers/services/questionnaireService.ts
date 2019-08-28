import { HapiFhirService } from './hapiFhirService';



export class QuestionnaireService {
    constructor(private service: HapiFhirService, public resource: string) {
        this.service = service;
        this.resource = resource;
    }

    getQuestionnaireList(options: any) {
        return this.service.getResource(this.resource + '/', { params: { '_count': options && options.limit, 'title': '@artezio' } });
    }

    getQuestionnaireById(id: string) {
        return this.service.getResource(this.resource + '/' + id);
    }

    putQuestionnaire(data: any) {
        return this.service.postResource(this.resource + '/', data);
    }

    updateQuestionnaireById(id: string, data: any) {
        return this.service.updateResource(this.resource + '/' + id, data);
    }

    deleteQuestionnaireById(id: string) {
        return this.service.deleteResource(this.resource + '/' + id);
    }
}
