# **@art-forms/player**

QuestionnairePlayer is a react component with which you can complete or update questionnaire response. This component requires questionnaire model converted to the right format, questionnaireResponse model from [@art-forms/models](http://blabla "@art-forms/models"), provider object with single method putQuestionnaireResponse and optional text for submit button to be passed as a property. Yoy may also pass a className as a property and it will be transferred to main container of the component.

# Installation

Using npm:
>npm install @art-forms/player

Using yarn:
>yarn add @art-forms/player

&nbsp;
# Example

```TSX
import React from 'react';
import { render } from 'react-dom';
import { QuestionnaireDesigner } from '@art-forms/designer';
import { QuestionnaireResponse } from '@art-forms/models';
import axios from 'axios';// for example

const questionnaire = /* {...object with questions in right format} */;
const questionnaireResponse = new QuestionnaireResponse(questionnaire);
const provider = {
    putQuestionnaireResponse(questionnaireResponse) {
        axios.post('http://example.com', questionnaireResponse);
    }
}

render(<QuestionnairePlayer questionnaire={questionnaire} questionnaireResponseModel={questionnaireResponse} provider={provider} />, document.getElementById('root'));
```
Click on Submit button will call putQuestionnaireResponse method with current questionnaireResponse model.