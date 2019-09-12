import IResponseProvider from "../interface/providers/IResponseProvider";
import { IResponseService } from '../interface/providers/IResponseService';
import { ResponseLocalStorageService } from './services/localStorageServises/response';



export class ResponseProvider implements IResponseProvider {
    constructor(public service: IResponseService) {

    }

    getResponseListByQuestionnaireId(id: string) {
        return this.service.getResponseListByQuestionnaireId(id)
    }

    getResponseById(id: string) {
        return this.service.getResponseById(id);
    }

    putResponse(response: any) {
        return this.service.putResponse(response);
    }

    updateResponse(response: any) {
        return this.service.updateResponse(response);
    }

}

export const responseProvider = (function () {
    const responseService = new ResponseLocalStorageService();
    return new ResponseProvider(responseService);
})();