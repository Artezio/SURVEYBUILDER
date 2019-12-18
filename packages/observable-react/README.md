# **@artezio/observable-react**

Heigh-ordered-component was designed to work together with @artezio/observable. Read about @artezio/observable here [README](../observable/README.md).

This HOC subscribes on every observable model that is passed to the component and puts it to the state. Observable models are substituted by models from the state, other props are passed through the HOC without changes. When models changed HOC does setState and pass new objects to the component and it will cause rerender.

# Installation
Using npm:
>$ npm install @artezio/observable-react

Using yarn:
>$ yarn add @artezio/observable-react

# Using example

```TSX
import { useObservableModel } from '@surveybuilder/observable-react';

class MyComponent {
    render() {
        const { model } = this.props;
        return <div>Hello, my name is {model.name}</div>
    }
}

export default useObservableModel(MyComponent);
```