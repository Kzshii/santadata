# About this lib

This custom library uses the react-form package to implements an easy way to create Forms based on a JSON template.

## Basic usage

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

## props

|Prop name|Description|
|submitText|the submit button text (default is "submit")|
|formTemplate|JSON template to generate the Form; [REQUIRED]|
|onSubmit|function to handle the submitted values|
|styleSheet|allows the use of custom style|

# Creating forms

To create a form template, fill an Array with some fields.

## Fields
|Field type|Description|
|Text|An ```<input type="text">``` field|
|TextArea|A ```<textarea>``` field|
|CheckGroup|A group of checkboxes|
|Checkbox|An ```<input type="checkbox">``` field|
|Select|A ```<select>``` field|
|RadioGroup|A group of ```<input type="radio">``` fields|
|NestedField|A group of fields of any type|
|Dynamic|A field or group of fields that can be replicated on demand|

### Text
### TextArea
### CheckGroup
### Checkbox
### Select
### RadioGroup
### NestedField
### Dynamic

## Field properties

### Common
fieldType
fieldLabel
fieldName
id
