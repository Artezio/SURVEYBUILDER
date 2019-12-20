import { observable, getObservable } from "@artezio/observable";
import IEnableWhenAnswer from "../interfaces/IEnableWhenAnswer";
import IAnswer from "../interfaces/IAnswer";

@observable
export class AnswerCollection {
    answers: IEnableWhenAnswer[];

    constructor(answers?: IEnableWhenAnswer[]) {
        this.answers = answers || [];
    }

    updateResponseAnswers(responseId: string, answers: IAnswer<any>[]) {
        const obs = getObservable(this);
        obs && obs.mute();
        this.answers = this.answers.filter(answer => answer.parentId !== responseId);
        answers.forEach(answer => {
            this.answers.push({ parentId: responseId, value: answer.value })
        });
        obs && obs.unmute();
        obs && obs.emitChange();
    }
}

export default AnswerCollection;