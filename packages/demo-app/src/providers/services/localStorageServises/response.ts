import { IResponseService, ResponseServiceOptions } from '../../../interface/providers/IResponseService';
import { LocalStorageHelper } from './localStorageHelper';
import packageJSON from '../../../../package.json';
import responses from './data/responses.json';


export class ResponseLocalStorageProvider implements IResponseService {
    responseList: any[];
    private localStorageKey: string;

    constructor() {
        this.localStorageKey = `responses@${packageJSON.version}`;
        const responseList = LocalStorageHelper.get(this.localStorageKey);
        if (Array.isArray(responseList) && responseList.length !== 0) {
            this.responseList = responseList;
        } else {
            let responseList = JSON.parse(JSON.stringify(responses));
            this.responseList = responseList;
            this.save();
        }
    }

    private save() {
        LocalStorageHelper.save(this.localStorageKey, this.responseList);
    }

    async getResponseListByQuestionnaireId(questionnaireId: string, options: ResponseServiceOptions) {
        return this.responseList.filter(response => response.questionnaire.slice(options.constantPrefix.length) === questionnaireId);
    }

    async getResponseById(id: string) {
        return this.responseList.find(response => response.id === id);
    }

    async putResponse(response: any) {
        const index = this.responseList.findIndex(concreteResponse => concreteResponse.id === response.id);
        if (index === -1) return;
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

export default ResponseLocalStorageProvider;