export const provider = {
    putQuestionnaireResponse(questionnaireResponse: any) {
        console.log(JSON.stringify(questionnaireResponse, ["value", "items", "id", "questionnaireId", "answers", "text"], 2))
    },
    putQuestionnaire(questionnaire: any) {
        console.log(JSON.stringify(questionnaire, [
            'id',
            'title',
            'description',
            'item',
            'linkedId',
            'type',
            'text',
            'enableWhen',
            'question',
            'operator',
            'answerString',
            'enableBehavior',
            'required',
            'repeats',
            'option',
            'valueString',
            'initial',
            'valueBoolean',
            'valueDecimal',
            'valueInteger',
            'valueDate',
            'valueDateTime',
            'valueTime'
        ], 2))
    }
}