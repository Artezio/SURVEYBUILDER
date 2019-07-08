import * as Models from '@art-forms/models';
import { Action } from '../interfaces/Action';
import { CREATE_QUESTIONNAIRE, ACTION } from '../constants/actions';


const INITIAL_STATE: Models.IQuestionnaire | null = null;
const mockQuestionnaire = `
{
    "id": "123asdqwe",
    "title": "Title",
    "items": [
        {
            "id": "123321",
            "type": "STRING",
            "text": "str",
            "required": true
        },
        {
            "id": "321123",
            "type": "GROUP",
            "items": [
                {
                    "id": "1233212",
                    "text": "Bool",
                    "type": "BOOLEAN",
                    "initialAnswers": [
                        {
                            "id": 1111,
                            "value": true
                        }
                    ]
                },
                {
                    "id": "moiID",
                    "type": "OPEN_CHOICE",
                    "text": "Viberai",
                    "options": [
                        {
                            "id": "opyatPridymivatId",
                            "value": 123
                        },
                        {
                            "id": "opyatPridymivatId_2",
                            "value": 321
                        }
                    ]
                }
            ]
        }
    ]
}
`;
export const questionnaire = (state: Models.IQuestionnaire | null = INITIAL_STATE, action: Action<ACTION, any>): Models.IQuestionnaire | null => {
    switch (action.type) {
        case CREATE_QUESTIONNAIRE: {
            return new Models.Questionnaire(JSON.parse(mockQuestionnaire));
            return new Models.Questionnaire();
        }
        default: {
            return state
        }
    }
}

export default questionnaire;