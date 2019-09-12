import { IQuestionnaireService } from '../../../interface/providers/IQuestionnaireService';
import { LocalStorageHelper } from './localStorageHelper';
import packageJSON from '../../../../package.json';
import questionnaires from './data/questionnaires.json';


export class QuestionnaireLocalStorageService implements IQuestionnaireService {
    questionnaireList: any[];
    private localStorageKey: string;

    constructor() {
        this.localStorageKey = `questionnaires@${packageJSON.version}`;
        const questionnaireList = LocalStorageHelper.get(this.localStorageKey);
        if (Array.isArray(questionnaireList) && questionnaireList.length !== 0) {
            this.questionnaireList = questionnaireList;
        } else {
            let questionnaireList = JSON.parse(JSON.stringify(questionnaires.entry));
            questionnaireList = questionnaireList.map((entry: any) => entry.resource);/// because of json structure
            this.questionnaireList = questionnaireList;
            this.save();
        }
    }

    private save() {
        LocalStorageHelper.save(this.localStorageKey, this.questionnaireList);
    }

    async getQuestionnaireList() {
        return this.questionnaireList;
    }

    async getQuestionnaireById(id: string) {
        return this.questionnaireList.find(questionnaire => questionnaire.id === id);
    }

    async updateQuestionnaireById(id: string, questionnaire: any) {
        let index = this.questionnaireList.findIndex(questionnaire => questionnaire.id === id);
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
        let index = this.questionnaireList.findIndex(questionnaire => questionnaire.id === id);
        if (index === -1) return;
        this.questionnaireList.splice(index, 1);
        this.save();
    }
}

export default QuestionnaireLocalStorageService;