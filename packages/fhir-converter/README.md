# art-forms/fhir-converter

It's a mapper designed to convert json models from fhire format to [@art-forms/models](http://blabla "@art-forms/models") and back.

***

## _Installation_
with npm
>$ npm install -D @art-form/models

with yarn
>$ yarn add -D @art-form/models
***
## _Usage_

```typescript
import { questionnaireMapper, questionnaireResponseMapper } from '@art-forms/fhir-converter';
import { service } from 'some FHIR service';

const myFHIRModel = service.getQuestionnaire();// fetching fhir model in json

const myQuestionnaireModel = questionnaireMapper.toModel(myFHIRModel);//json object
```
You can put myQuestionnaireModel to Questionnaire constructor from [@art-forms/models](http://blabla "@art-forms/models") to make a model;

Then you can do manipulations with model in your code and convert it back:
```typescript
const myNewFHIRModel = questionnaireMapper.fromModel(myQuestionnaireModel);
service.putQuestionnaire(myNewFHIRModel);
```
The same behavior with questionnaireResponseMapper.