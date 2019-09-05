# **About**

This app was designed to show how components, models, and converters work together. If you don't know about art-forms check it [README.md](http://blabla, "@art-forms").
***
### **This application has 4 pages:**
* Questionnaire list

A main page provides a list of already existing questionnaires. Click on the name of exact questionnaire will link you to questionnaire editor page where you can change the questionnaire structure. Or you can create a new one. See the #Routes

* Questionnaire editor

Page contains [questionnaire designer](http://blabla "@art-forms/designer") which works in two modes: creating and updating. See [Routes section](#Routes) below to distinguish them.

* Response List

Page with list of responses(if exists) for concrete questionnaire. You can give a new response or update an existing one.

* Response editor

Page contains [questionnaire player](http://blabla "@art-forms/player") which works in two modes: creating and updating. See [Routes section](#Routes) below to distinguish them.

&nbsp;
# Routes

* List of existing questionnaire - "/"
* Questionnaire editor(creating) - "/questionnaire"
* Questionnaire editor(updating) - "/questionnaire/:questionnaireId"
* List of existing responses to concrete questionnaire - "/responses/:questionnaireId"
* Questionnaire player(new response) - "/questionnaire/:questionnaireId/response"
* Questionnaire player(update existing response) - "/questionnaire/:questionnaireId/response/responseId"


&nbsp;
# Usage

**!!!_BEWARE._ Before you run the app make sure that you have built all packages!**

To build all packages, go to the packages root dir(art-forms/) and run:
> $ yarn build

## Run app
To run app type following in the root directory(art-forms/packages/demo-app/):
>$ yarn start

## Port
After you run app, webpack devServer will be launched on 3000 port.

http://localhost:3000/