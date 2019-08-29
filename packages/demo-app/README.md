# **@art-forms/demo-app**

This app was designed to show how components, models, and converters work together. It's a single page application that have 4 pages: questionnaire list, questionnaire editor, response list, response editor. Whole application implemented with bootstrap styles. Checkbox on the left side in top section shows how easy it can be to change bootstrap themes.

# Installation

Using npm:
>$ npm install @art-forms/demo-app

Using yarn:
>$ yarn add @art-forms/demo-app

&nbsp;
# Start

## Run app
To run app type following in the root directory(demo-app):
>$ yarn start

## Port
localhost:3000/

After you run app, webpack devServer will be launched on 3000 port.
If 3000 port is busy you will be proposed to open it in another port, just type "y" in cmd and push Enter.

&nbsp;
# Routes

* List of existing questionnaire - "/"
* Questionnaire designer(new questionnaire) - "/questionnaire"
* Questionnaire designer(existing questionnaire) - "/questionnaire/:questionnaireId"
* List of existing responses to concrete questionnaire - "/responses/:questionnaireId"
* Questionnaire player(new response) - "/questionnaire/:questionnaireId/response"
* Questionnaire player(update existing response) - "/questionnaire/:questionnaireId/response/responseId"