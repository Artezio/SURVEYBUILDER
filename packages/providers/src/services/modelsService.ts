import hapiFhirProvider from '../providers/hapiFhirProvider';

export const modelsService = {
    getMockQuestionnaireModel(): any {
        const path: string = '1718106/_history/2'; // 'devdays-q-1/_history/2';
        return hapiFhirProvider.getQuestionnaireByPass(path)
            .then(questionnaireFhir => questionnaireFhir);
    }
}

export default modelsService;