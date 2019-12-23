# **artezio/fhir-converter**

It's a mapper designed to convert json models from fhire format to [@artezio/models](https://github.com/Artezio/SURVEYBUILDER/tree/master/packages/models/README.md "@artezio/models") and back.


# Installation
with npm
>$ npm install @artezio/models

with yarn
>$ yarn add @artezio/models

&nbsp;
# Usage

```typescript
import { questionnaireConverter } from '@artezio/fhir-converter';
import { service } from 'some FHIR service';

const myFHIRModel = service.getQuestionnaire();// fetching fhir model in json

const myQuestionnaireModel = questionnaireConverter.toModel(myFHIRModel);//json object
```
You can put myQuestionnaireModel to Questionnaire constructor from [@artezio/models](https://github.com/Artezio/SURVEYBUILDER/tree/master/packages/models/README.md "@artezio/models") to make a model;

Then you can do manipulations with model in your code and convert it back:
```typescript
const myNewFHIRModel = questionnaireConverter.fromModel(myQuestionnaireModel);
service.putQuestionnaire(myNewFHIRModel);
```
The same behavior with questionnaireResponseConverter.