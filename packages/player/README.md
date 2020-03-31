# **@artezio/player**

QuestionnairePlayer is a react component, use it to pass the questionnaire. It requires two properties to be rendered: questionnaire and questionnaireResponse model made with [@artezio/models](https://github.com/Artezio/SURVEYBUILDER/tree/master/packages/models/README.md "@artezio/models").
Component has 3 more properties: onSubmit, onError, forwardRef. Use them to handle submit, handle error, initiate submit.

* onSubmit - A function that gets called when form is submitted successfully. The function receives the questionnaireResponse as a parameter.
* onError - A function that gets called when submission fails due to errors. Function will receive the errors.
* buttons - array of buttons will be rendered at the bottom of the player.

# Installation

Using npm:
>npm install @artezio/player

Using yarn:
>yarn add @artezio/player

Library has few peer dependencies which you should know about. Install them all with one command: 

>$ npm install @artezio/observable @artezio/observable-react @artezio/models

As an alternative you may want to install all in one touch. Check it out [README](https://github.com/Artezio/SURVEYBUILDER/).

&nbsp;
# Example

```TSX
import React from 'react';
import { render } from 'react-dom';
import { QuestionnaireResponse } from '@artezio/models';
import axios from 'axios';// for example

export class MyComponent extends React.Component {
    formRef = React.createRef();

    onSubmit(questionnaireResponse) {
        axios.post('http://example.com', questionnaireResponse);
    }

    render() {
        const {questionnaire, questionnaireResponse} = this.props;
        return (<>
            <QuestionnairePlayer questionnaire={questionnaire} questionnaireResponseModel={questionnaireResponse} onSubmit={this.onSubmit.bind(this)} forwardRef={this.formRef} buttons={[<button type="submit">Submit</button>]} />
        </>)
    }
}
```