import * as Models from '@art-forms/models';
import { QuestionTypeMenuOption } from '../interfaces/components/SelectMenuProps';

export const questionTypes: QuestionTypeMenuOption[] = [
    { title: "String (one row)", value: Models.STRING },
    { title: "Text (several rows)", value: Models.TEXT },
    { title: "Number", value: Models.DECIMAL },
    { title: "Date", value: Models.DATE },
    { title: "Time", value: Models.TIME },
    { title: "Date-time", value: Models.DATE_TIME },
    { title: "Yes/No question", value: Models.BOOLEAN },
    { title: "Single choice", value: Models.CHOICE },
    { title: "Open choice", value: Models.OPEN_CHOICE },
    { title: "Multiple choice", value: Models.MULTI_CHOICE },
    { title: "Attachment", value: Models.ATTACHMENT }
]