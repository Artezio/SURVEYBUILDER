import axios from 'axios';

export class HapiFhirQuestionnaireProvider {
    constructor(public mainPath: string) {
        this.mainPath = mainPath;
    }
    getResource(path: string) {
        return axios.get(`${mainPath}${path}`);
    }

    deleteResource(path: string) {
        return axios.delete(`${mainPath}${path}`);
    }

    updateResource(path: string, data) {
        return axios.put(`${mainPath}${path}`, data);
    }

    postResource(path: string, data) {
        return axios.post(`${mainPath}${path}`, data);
    }
}

export default HapiFhirQuestionnaireProvider;