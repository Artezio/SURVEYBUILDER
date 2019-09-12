import { IQuestionnaireService } from '../../../interface/providers/IQuestionnaireService';
import { LocalStorageHelper } from './localStorageHelper';
import packageJSON from '../../../../package.json';
import questionnaires from './data/questionnaires.json';

const localStorageKey = `questionnaires@${packageJSON.version}`;

export class QuestionnaireLocalStorageService implements IQuestionnaireService {
    questionnaireList: any[];

    constructor() {
        const questionnaireList = LocalStorageHelper.get(localStorageKey);
        if (Array.isArray(questionnaireList) && questionnaireList.length !== 0) {
            this.questionnaireList = questionnaireList;
        } else {
            this.questionnaireList = questionnaires;
            this.save();
        }
    }

    private save() {
        LocalStorageHelper.save(localStorageKey, this.questionnaireList);
    }

    async getQuestionnaireList() {
        return this.questionnaireList;
    }

    async getQuestionnaireById(id: string) {
        return this.questionnaireList.find(questionnaire => questionnaire.id === id);
    }

    async updateQuestionnaire(questionnaire: any) {
        const index = this.questionnaireList.findIndex(concreteQuestionnaire => concreteQuestionnaire.id === questionnaire.id);
        if (index === -1) return;
        this.questionnaireList[index] = questionnaire;
        this.save();
    }

    async putQuestionnaire(questionnaire: any) {
        if (this.questionnaireList.some(x => x.id === questionnaire.id)) return;
        this.questionnaireList.push(questionnaire);
        this.save();
    }

    async deleteQuestionnaireById(id: string) {
        const index = this.questionnaireList.findIndex(questionnaire => questionnaire.id === id);
        if (index === -1) return;
        this.questionnaireList.splice(index, 1);
        this.save();
    }
}

export default QuestionnaireLocalStorageService;