# **@art-form/models**
FHIR compatible observable models.

# Installation
Using npm:
>$ npm install -D @art-form/models

Using yarn:
>$ yarn add -D @art-form/models

&nbsp;
# Example

This models are mostly used with [designer](./../designer/README.md "@art-forms/designer package") and [player](./../player/README.md "@art-forms/player package") so it's enough to use it like this:
```JSX
import { Questionnaire, QuestionnaireResponse } from '@art-form/models';

const questionnaire = new Questionnaire(/*initial questionnaire in JSON format, if needed*/);
const questionnaireResponse = new QuestionnaireResponse(questionnaire, /*initial questionnaireResponse in JSON format, if needed*/);
```
Then you should pass them straight to QuestionnaireDesigner and QuestionnairePlayer components.

&nbsp;
# Diagrams

## Questionnaire
![uml diagram](./Uml-diagram-questionnaire.jpg)

## QuestionnaireResponse
![uml diagram](./Uml-diagram-response.jpg)


# Detailed description for models

## Table of content

* [Questionnaire model](questionnaire-model)
    * [Item model](item-model)
        * [Enable When](enable-when)
        * [Answer option](answer-option)
* [Questionnaire response model](questionnaire-response-model)
    * [Questionnaire response item model](questionnaire-response-item-model)
        * [Questionnaire response item answer](questionnaire-response-item-answer)

## Questionnaire model

| Name | required | type | Description | 
| :---- | :------ | :--- | :----- |
| id | true | string | Questionnaire identifier. Must be uniq among all questionnaires |
| title | false | string | Questionnaire title |
| description | false | string | Description for questionnaire |
| items | false | array | Each element is [Item model](item-model) |

## Item model

| Name | required | type | Description | 
| :---- | :------ | :--- | :----- |
| id | true | string | Item identifier. Must be uniq among all Items inside the questionnaire |
| type | true | string | They should be imported as variable from @art-forms/models |
| text | false | string | Question |
| required | false | boolean | Whether item required or not |
| enableWhen | false | array | Each element is [Enable When](enable-when) |
 enableBehavior | false | string | Should be imported as variable from @art-forms/models |
| initialAnswer | false | string | Should be imported as variable from @art-forms/models |
| multipleFiles | false | boolean | Specific parametr especially for attachment items; Define whether user can apply multiple files(true) or single(false) |
| options | false | array | Each element is [Answer option](answer-option) |

## Enable when

| Name | required | type | Description | 
| :---- | :------ | :--- | :----- |
| id | true | string | EnableWhen identifier. Must be uniq inside the item |
| operator | true | string | Should be imported as variable from @art-forms/models |
| questionId | false | string | id of the particular item |
| answer | false | any | expected answer fro particular question |

## Answer option

| Name | required | type | Description | 
| :---- | :------ | :--- | :----- |
| id | true | string | AnswerOption identifier. Must be uniq inside the item |
| value | false | any | Option value |
| defaultSelected | false | boolean | Whether option must be selected by default( in items like choice and openChoice only one option should have this property set to true ) |

## Questionnaire response model

| Name | required | type | Description | 
| :---- | :------ | :--- | :----- |
| id | true | string | QuestionnaireResponse identifier. Must be uniq amon all QuestionnaireResponses |
| questionnaireId | true | string | id of particular questionnaire for which this response is referenced |
| items | false | array | Each element is [Questionnaire response item model](questionnaire-response-item-model) |

## Questionnaire response item model

| Name | required | type | Description | 
| :---- | :------ | :--- | :----- |
| id | true | string | QuestionnaireResponseItem identifier. Must be uniq amon all QuestionnaireResponseItems inside QuestionnaireResponse |
| questionId | true | string | id of particular item |
| text | false | string | Question |
| answers | false | array | Each element is [Questionnaire response answer](questionnaire-response-answer) |

## Questionnaire response item answer

| Name | required | type | Description | 
| :---- | :------ | :--- | :----- |
| id | true | string | id must be uniq inside QuestionnaireResponseItem |
| items | false | array | Each element is [Questionnaire response item model](questionnaire-response-item-model) |