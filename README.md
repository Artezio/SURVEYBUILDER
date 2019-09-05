# **ART-FORMS**

Art-forms is a set of typescript packages designed for creating and completing  questionnaires. It presents two react components: "Questionnaire Designer" and "Questionnaire Player". Questionnaire designer can create or update questionnaire. Questionnaire player is designed to pass the questionnaire. Components were designed in bootstrap style, so you can easily add bootstrap themes to change there appearance. This components work with our observable models from models package, but this models are fully compatible with fhir standard. All models can be converted to fhir standard and back via fhir-converter package.

# Uml

## _Components diagram_

![uml diagram](./Uml-diagram-modules.jpg)

## _Learn more about packages_
* [designer](https://github.com/Artezio/ART-FORMS/blob/master/packages/designer/README.md "@art-forms/designer package")
* [player](https://github.com/Artezio/ART-FORMS/blob/master/packages/player/README.md "@art-forms/player package")
* [models](https://github.com/Artezio/ART-FORMS/blob/master/packages/models/README.md "@art-forms/models package")
* [fhir-converter](https://github.com/Artezio/ART-FORMS/blob/master/packages/fhir-converter/README.md "@art-forms/fhir-converter package")
* [observable](https://github.com/Artezio/ART-FORMS/blob/master/packages/observable/README.md "@art-forms/observable package")


&nbsp;
# What does it look like
We created demo app to show you how our components can be used. To see how it works first of all clone the repository. Then you have to download all dependencies, to do it run following command in the root dir(art-forms/): 

> $ yarn

Demo app uses all packages, they are linked with relative paths.

```
!!!BEWARE You have to build all packages before launching the demo app!
```

To build all packages run following command in the root dir(art-forms/):
> $ yarn build

&nbsp;
# More details about demo-app
[README.md](https://github.com/Artezio/ART-FORMS/blob/master/packages/demo-app/README.md "@art-forms/demo-app")