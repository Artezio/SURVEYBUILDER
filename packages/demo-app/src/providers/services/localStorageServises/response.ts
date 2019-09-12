import { IResponseService } from '../../../interface/providers/IResponseService';
import { LocalStorageHelper } from './localStorageHelper';
import packageJSON from '../../../../package.json';
import responses from './data/responses.json';

const localStorageKey = `responses@${packageJSON.version}`;

export class ResponseLocalStorageService implements IResponseService {
    responseList: any[];

    constructor() {
        const responseList = LocalStorageHelper.get(localStorageKey);
        if (Array.isArray(responseList) && responseList.length !== 0) {
            this.responseList = responseList;
        } else {
            this.responseList = responses;
            this.save();
        }
    }

    private save() {
        LocalStorageHelper.save(localStorageKey, this.responseList);
    }

    async getResponseListByQuestionnaireId(questionnaireId: string) {
        return this.responseList.filter(response => response.questionnaire.slice(14) === questionnaireId);
    }

    async getResponseById(id: string) {
        return this.responseList.find(response => response.id === id);
    }

    async putResponse(response: any) {
        if (this.responseList.some(concreteResponse => concreteResponse.id === response.id)) return;
        const index = this.responseList.findIndex(concreteResponse => concreteResponse.id === response.id);
        this.responseList.push(response);
        this.save();
    }

    async updateResponse(response: any) {
        const index = this.responseList.findIndex(concreteResponse => concreteResponse.id === response.id);
        if (index === -1) return;
        this.responseList[index] = response;
        this.save();
    }
}

export default ResponseLocalStorageService;