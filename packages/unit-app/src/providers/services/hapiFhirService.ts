import axios, { AxiosRequestConfig } from 'axios';

export class HapiFhirService {
    constructor(public baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    getResource(path: string, config?: AxiosRequestConfig) {
        return axios.get(`${this.baseUrl}${path}`, config);
    }

    deleteResource(path: string, config?: AxiosRequestConfig) {
        return axios.delete(`${this.baseUrl}${path}`, config);
    }

    updateResource(path: string, data: any, config?: AxiosRequestConfig) {
        return axios.put(`${this.baseUrl}${path}`, data, config);
    }

    postResource(path: string, data: any, config?: AxiosRequestConfig) {
        return axios.post(`${this.baseUrl}${path}`, data, config);
    }
}

export default HapiFhirService;