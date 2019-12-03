# **About**

This app was designed to show how components, models, and converters work together. If you don't know about surveybuilder check it [README.md](./../../README.md "@surveybuilder").
***
### **This application has 4 pages:**
* Questionnaire list

A main page provides a list of already existing questionnaires. Click on the name of exact questionnaire will link you to questionnaire editor page where you can change the questionnaire structure. Or you can create a new one. See the #Routes

* Questionnaire editor

Page contains [questionnaire designer](./../designer/README.md "@surveybuilder/designer") which works in two modes: creating and updating. See [Routes section](#Routes) below to distinguish them.

* Response List

Page with list of responses(if exists) for concrete questionnaire. You can give a new response or update an existing one.

* Response editor

Page contains [questionnaire player](./../player/README.md "@surveybuilder/player") which works in two modes: creating and updating. See [Routes section](#Routes) below to distinguish them.

&nbsp;
# Routes

* List of existing questionnaire - "/"
* Questionnaire editor(creating) - "/questionnaire"
* Questionnaire editor(updating) - "/questionnaire/:questionnaireId"
* List of existing responses to concrete questionnaire - "/responses/:questionnaireId"
* Questionnaire player(new response) - "/questionnaire/:questionnaireId/response"
* Questionnaire player(update existing response) - "/questionnaire/:questionnaireId/response/responseId"

&nbsp;
# Prerequisites
To run demo app, you need the following prerequisites:
* Node 10.16.3 or greater.
* Yarn 1.13.0 or greater.
* Git 2.18.0 or greater.


&nbsp;
# Usage
Make sure you have installed all dependencies, if not run following in the root directory (surveybuilder/):
>$ yarn 

Run same command in surveybuilder/demo-app/ to install dependencies for demo-app:
>$ yarn

To run app, type following in the current directory(surveybuilder/packages/demo-app/):
>$ yarn start

After you run app, webpack devServer will be launched on 3000 port http://localhost:3000/.