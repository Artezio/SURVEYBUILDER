import { QuestionnaireListStore } from './questionnaireListPage/QuestionnaireListStore';
import { QuestionnaireEditorStore } from './questionnaireEditorPage/QuestionnaireEditorStore';


export interface Store {
    questionnaireList: QuestionnaireListStore;
    questionnaireEditor: QuestionnaireEditorStore;
}