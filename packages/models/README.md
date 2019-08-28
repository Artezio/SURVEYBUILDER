# @art-form/models
FHIR compatible observable models.

***
## _Installation_
with npm
>$ npm install -D @art-form/models

with yarn
>$ yarn add -D @art-form/models
***
## _UML diagrams_

### Questionnaire
![uml diagram](./Uml-diagram-questionnaire.jpg)

### QuestionnaireResponse
![uml diagram](./Uml-diagram-response.jpg)

***
## _Example_

This models are mostly used with [designer](http://blabla "@art-forms/designer package") and [player](http://blabla "@art-forms/player package") so it's enough to use it like this:
```JSX
import { Questionnaire, QuestionnaireResponse } from '@art-form/models';

const questionnaire = new Questionnaire(/*initial questionnaire in JSON format, if needed*/);
const questionnaireResponse = new QuestionnaireResponse(questionnaire, /*initial questionnaireResponse in JSON format, if needed*/);
```
Then you should pass them straight to QuestionnaireDesigner and QuestionnairePlayer components.
## _API_

Will be provided later.