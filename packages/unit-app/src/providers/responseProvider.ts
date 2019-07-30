import * as Models from '@art-forms/models';
import { } from '@art-forms/fhir-converter';
import HapiFhirService from "./services/hapiFhirService";
import { ResponseService } from "./services/responseService";

class ResponseProvider {
    constructor(private service: ResponseService) {
        this.service = service;
    }


}

export const RESPONSE_BASE_URL = '/QuestionnaireResponse';
export const responseProvider = (function () {
    const hapiFhirService = new HapiFhirService(''); /// proxy by devServer
    const responseService = new ResponseService(hapiFhirService, RESPONSE_BASE_URL);
    return new ResponseProvider(responseService);
})();