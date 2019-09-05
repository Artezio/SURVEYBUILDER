import { observable, getObservable, observableProperty } from "@art-forms/observable";
import IEnableWhenAnswer from "../interfaces/IEnableWhenAnswer";

@observable
export class AnswerCollection {
    @observableProperty
    answers: IEnableWhenAnswer[];

    constructor(answers?: IEnableWhenAnswer[]) {
        this.answers = answers || [];
    }

    updateResponseAnswers(responseId: string, values: any[]) {
        const obs = getObservable(this);
        obs && obs.mute();
        this.answers = this.answers.filter(answer => answer.parentId !== responseId);
        values.forEach(value => {
            this.answers.push({ parentId: responseId, value: value })
        });
        obs && obs.unmute();
        obs && obs.emitChange();
    }
}

export default AnswerCollection;