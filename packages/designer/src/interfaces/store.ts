import { Questionnaire } from '@art-forms/models'

export interface Store {
    questionnaire: { questionnaire?: Questionnaire }
}