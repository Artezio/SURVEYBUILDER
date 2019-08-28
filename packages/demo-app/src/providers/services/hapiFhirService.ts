import axios, { AxiosRequestConfig } from 'axios';
export class HapiFhirService {
    constructor(public baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    getResource(path: string, config?: AxiosRequestConfig) {
        return axios.get(`${this.baseUrl}${path}`, config).then(x => x.data);
    }

    deleteResource(path: string, config?: AxiosRequestConfig) {
        return axios.delete(`${this.baseUrl}${path}`, config).then(x => x.data);
    }

    updateResource(path: string, data: any, config?: AxiosRequestConfig) {
        return axios.put(`${this.baseUrl}${path}`, data, config).then(x => x.data);
    }

    postResource(path: string, data: any, config?: AxiosRequestConfig) {
        return axios.post(`${this.baseUrl}${path}`, data, config).then(x => x.data);
    }
}

export default HapiFhirService;

