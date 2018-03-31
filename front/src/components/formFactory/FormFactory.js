import React, { Component } from 'react';
import { Form, Text, TextArea, Checkbox, Select, RadioGroup, Radio, NestedField } from 'react-form';
import defaultStyle from './FormFactory.css';

export class FieldFactory {
  static create = {
    Text: (field) => (
      <span key={JSON.stringify(field.fieldName)}>
        <label htmlFor={field.id}>{ field.fieldLabel || "" }</label>
        <Text
          field={field.fieldName}
          id={field.id}
        />
      </span>
    ),
    TextArea: (field) => (
      <span key={JSON.stringify(field.fieldName)}>
        <label htmlFor={field.id}>{ field.fieldLabel || "" }</label>
        <TextArea
          field={field.fieldName}
          id={field.id}
        />
      </span>
    ),
    CheckGroup: (field) => (
      <span key={JSON.stringify(field.fieldName)}>
        <label>{field.fieldLabel || ""}</label>
        <NestedField field={field.fieldName}>
          {field.options.map( (nestedField) => (FieldFactory.create["Checkbox"](nestedField)) )}
        </NestedField>
      </span>
    ),
    Checkbox: (field) => (
      <span key={JSON.stringify(field.fieldName)}>
        <label htmlFor={field.id}>{field.fieldLabel || ""}</label>
        <Checkbox
          field={field.fieldName}
          id={field.id}
        />
      </span>
    ),
    Select: (field) => (
      <Select
        field={field.fieldName}
        id={field.id}
        key={JSON.stringify(field.fieldName)}
        options={field.options}
      />
    ),
    RadioGroup: (field) => (
      <RadioGroup
        field={field.fieldName}
        id={field.id}
        key={JSON.stringify(field.fieldName)}
      >
        {field.options.map((option) => (
          <span key={JSON.stringify(field.fieldName+option.value)}>
            <label htmlFor={JSON.stringify(field.id+option.value)}>{option.label}</label>
            <Radio
              value={option.value}
              id={JSON.stringify(field.id+option.value)}
            />
          </span>
        ))}
      </RadioGroup>
    ),
    NestedField: (field) => (
      <span key={JSON.stringify(field.fieldName)}>
        <label>{field.fieldLabel || ""}</label>
        <NestedField field={field.fieldName}>
          {field.fields.map( (nestedField) => (FieldFactory.create[nestedField.fieldType](nestedField)) )}
        </NestedField>
      </span>
    )
  }
}

class FormFactory extends Component {
  render() {
    const {
      formTemplate,
      submitText,
      onSubmit,
      styleSheet
    } = this.props;

    return(
      <Form onSubmit={ (submittedItems) => {onSubmit(submittedItems)} } style={styleSheet || defaultStyle} >
        {(formApi) => (
          <form onSubmit={formApi.submitForm} >
            { formTemplate.map((field) => (FieldFactory.create[field.fieldType](field))) }
            <button>{ submitText || "submit" }</button>
          </form>
        )}
      </Form>
    );
  }
}

export default FormFactory;
