import { ResponseService } from "./services/responseService";
import { mockResponseListService } from "./services/mockResponseListService";
import IResponseProvider from "../interface/providers/IResponseProvider";
import { IResponseService } from '../interface/providers/IResponseService';



export class ResponseProvider implements IResponseProvider {
    constructor(public service: IResponseService) {

    }

    getResponseListByQuestionnaireId(id: string) {
        return mockResponseListService.getResponseListByQuestionnaireId();
        return this.service.getResponseListByQuestionnaireId(id, { constantPrefix: 'Questionnaire/', entriesLimit: 10, fieldToBeIncluded: 'QuestionnaireResponse: questionnaire' })
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
    const responseService = new ResponseService();
    return new ResponseProvider(responseService);
})();