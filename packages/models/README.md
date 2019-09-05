# **@art-form/models**
FHIR compatible observable models.

# Installation
Using npm:
>$ npm install -D @art-form/models

Using yarn:
>$ yarn add -D @art-form/models

&nbsp;
# UML diagrams

## Questionnaire
![uml diagram](./Uml-diagram-questionnaire.jpg)

## QuestionnaireResponse
![uml diagram](./Uml-diagram-response.jpg)

&nbsp;
# Example

This models are mostly used with [designer](https://github.com/Artezio/ART-FORMS/blob/master/packages/designer/README.md "@art-forms/designer package") and [player](https://github.com/Artezio/ART-FORMS/blob/master/packages/player/README.md "@art-forms/player package") so it's enough to use it like this:
```JSX
import { Questionnaire, QuestionnaireResponse } from '@art-form/models';

const questionnaire = new Questionnaire(/*initial questionnaire in JSON format, if needed*/);
const questionnaireResponse = new QuestionnaireResponse(questionnaire, /*initial questionnaireResponse in JSON format, if needed*/);
```
Then you should pass them straight to QuestionnaireDesigner and QuestionnairePlayer components.

&nbsp;
# API

Will be provided later.