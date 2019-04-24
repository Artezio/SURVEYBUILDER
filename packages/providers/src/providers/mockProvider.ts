export const provider = {
    putQuestionnaireResponse(questionnaireResponse: any) {
        console.log(JSON.stringify(questionnaireResponse, ["value", "items", "id", "questionnaireId", "answers", "text"], 2))
    }
}