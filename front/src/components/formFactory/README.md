# About this lib

This custom library uses the react-form package to implements an easy way to create Forms based on a JSON template.

# Basic usage

```
import React, { Component } from 'react';
import FormFactory from './path';

class MyFormComponent extends Component {
  render() {

    const myTemplate = [
      {
        fieldType: "Text",
        fieldLabel: "First name",
        fieldName: "firstname",
        id: "firstName"
      }
    ];

    props = {
      formTemplate: myTemplate,
      submitText: "Custom Submit Text",
      onSubmit: (values) => {
        console.log(values)
      }
    }

    return(
      <FormFactory {...props} />
    );
  }
}
```

## Optional usage

# props

* submitText: the submit button text (default is "submit");

* formTemplate: JSON template to generate the Form; [REQUIRED] 

* onSubmit: function to handle the submitted values;

* styleSheet: allows the use of custom style;
