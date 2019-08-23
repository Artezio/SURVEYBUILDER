import HapiFhirService from "./services/hapiFhirService";
import { ResponseService } from "./services/responseService";
import { mockResponseListService } from "./services/mockResponseListService";

class ResponseProvider {
    constructor(private service: ResponseService) {
        this.service = service;
    }

    getResponseListByQuestionnaireId(id: string) {
        return mockResponseListService.getResponseListByQuestionnaireId();
        // return this.service.getResponseListByQuestionnaireId(id, { limit: 10 })
        //     .then(responseData => responseData.entry)
        //     .then(entries => entries.map((entry: any) => entry.resource))
    }

    getResponseById(id: string) {
        return this.service.getResponseById(id);
    }

    putResponse(response: any) {
        return this.service.putResponse(response);
    }

    updateResponseById(id: string, response: any) {
        return this.service.updateResponseById(id, response);
    }

}

export const RESPONSE_BASE_URL = '/QuestionnaireResponse';
export const responseProvider = (function () {
    const hapiFhirService = new HapiFhirService(''); /// proxy by devServer
    const responseService = new ResponseService(hapiFhirService, RESPONSE_BASE_URL);
    return new ResponseProvider(responseService);
})();