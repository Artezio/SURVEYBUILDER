# **@art-forms/designer**
Designer is a react component with which you can build or update questionnaire. This component requires a questionnaire model from [@art-forms/models](http://blabla "@art-forms/models") to be passed as a property. Yoy may also pass a className as a property and it will be transferred to main container of the component.

# Installation

Using npm:
>$ npm install @art-form/designer

Using yarn:
>$ yarn add @art-form/designer

&nbsp;
# Example

```TSX
import React from 'react';
import { render } from 'react-dom';
import { QuestionnaireDesigner } from '@art-forms/designer';
import { Questionnaire } from '@art-forms/models';

const questionnaire = new Questionnaire();

render(<QuestionnaireDesigner questionnaireModel={questionnaire} />, document.getElementById('root'));
```

Every changes in QuestionnaireDesigner component is appended accordingly to questionnaire model. After the structure of the questionnaire has been built, you can transfer it further.