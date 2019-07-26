import HapiFhirProvider from '../providers/hapiFhir';

const hapiFhirProvider = new HapiFhirProvider('/Questionnaire');

export const hapiFhirQuestionnaireService = {
    getQuestionnaireList() {
        return hapiFhirProvider.getResource('/');
    },
    getQuestionnaireById(id: string) {
        return hapiFhirProvider.getResource('/' + id);
    },
    putQuestionnaire(data) {
        return hapiFhirProvider.postResource('/', data);
    },
    updateQuestionnaireById(id: string, data) {
        return hapiFhirProvider.updateResource('/' + id, data);
    },
    deleteQuestionnaireById(id: string) {
        return hapiFhirProvider.deleteResource('/' + id);
    }
}

export default hapiFhirQuestionnaireService;