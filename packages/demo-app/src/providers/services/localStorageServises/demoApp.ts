export class demoAppLocalStorage {
    getQuestionnaireList(): any[] {
        const questionnaireList = JSON.parse('' + localStorage.getItem('questionnaireIds')) as any[] | null;
        if (!Array.isArray(questionnaireList)) return [];
        return questionnaireList;
    }

    getExistingQuestionnaireIds(): string[] {
        const questionnaireIds = JSON.parse('' + localStorage.getItem('existingQuestionnaireIds')) as string[] | null;
        if (!Array.isArray(questionnaireIds)) return [];
        return questionnaireIds;
    }

    hasQuestionnaire(id: string) {
        return this.getExistingQuestionnaireIds().includes(id);
    }

    addQuestionnaire(questionnaire: any) {
        if (!this.hasQuestionnaire(questionnaire.id)) {
            const questionnaireList = this.getQuestionnaireList();
            localStorage.setItem
        }
    }

}