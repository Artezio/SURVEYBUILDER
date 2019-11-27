import { QuestionnaireListPageStore } from './questionnaireListPage/QuestionnaireListPageStore';
import { QuestionnaireEditorPageStore } from './questionnaireEditorPage/QuestionnaireEditorPageStore';
import { ResponseEditorPageStore } from './responseERditorPage/ResponseEditorPageStore';
import { ResponseListPageStore } from './reponseListPage/ResponseListPageStore';
import { MainLayoutStore } from './layouts/MainLayoutProps';


export interface Store {
    questionnaireListPage: QuestionnaireListPageStore;
    questionnaireEditorPage: QuestionnaireEditorPageStore;
    responseEditorPage: ResponseEditorPageStore;
    responseListPage: ResponseListPageStore;
    mainLayout: MainLayoutStore
}