# **@artezio/designer**
Designer is a react component with which you can build or update questionnaire. This component requires a questionnaire model from [@artezio/models](./../models/README.md "@artezio/models") to be passed as a property. Yoy may also pass a className as a property and it will be transferred to main container of the component.

# Installation

Using npm:
>$ npm install @artezio/designer

Using yarn:
>$ yarn add @artezio/designer

&nbsp;
# Example

```TSX
import React from 'react';
import { render } from 'react-dom';
import { QuestionnaireDesigner } from '@artezio/designer';
import { Questionnaire } from '@artezio/models';

const questionnaire = new Questionnaire();

render(<QuestionnaireDesigner questionnaireModel={questionnaire} />, document.getElementById('root'));
```

Every changes in QuestionnaireDesigner component is appended accordingly to questionnaire model. After the structure of the questionnaire has been built, you can transfer it further.