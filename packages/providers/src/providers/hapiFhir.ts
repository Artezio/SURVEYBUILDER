import axios from 'axios';

export class HapiFhirQuestionnaireProvider {
    constructor(public mainPath: string) {
        this.mainPath = mainPath;
    }
    getResource(path: string) {
        return axios.get(`${this.mainPath}${path}`);
    }

    deleteResource(path: string) {
        return axios.delete(`${this.mainPath}${path}`);
    }

    updateResource(path: string, data) {
        return axios.put(`${this.mainPath}${path}`, data);
    }

    postResource(path: string, data) {
        return axios.post(`${this.mainPath}${path}`, data);
    }
}

export default HapiFhirQuestionnaireProvider;