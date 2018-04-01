import React, { Component } from 'react';
import { Form, Text, TextArea, Checkbox, Select, RadioGroup, Radio, NestedField } from 'react-form';
import defaultStyle from './FormFactory.css';

class FieldFactory {
  
  static formApi;

  static create = {
    Text: (field, i) => (
      <span key={JSON.stringify(field.fieldName+(i || ""))}>
        <label htmlFor={field.id}>{ field.fieldLabel || "" }</label>
        <Text
          field={[field.fieldName,i]}
          id={field.id+(i || "")}
        />
      </span>
    ),
    TextArea: (field, i) => (
      <span key={JSON.stringify(field.fieldName+(i || ""))}>
        <label htmlFor={field.id}>{ field.fieldLabel || "" }</label>
        <TextArea
          field={[field.fieldName,i]}
          id={field.id+(i || "")}
        />
      </span>
    ),
    CheckGroup: (field, i) => (
      <span key={JSON.stringify(field.fieldName+(i || ""))}>
        <label>{field.fieldLabel || ""}</label>
        <NestedField field={[field.fieldName, i]}>
          {field.options.map( (option) => (FieldFactory.create["Checkbox"](option)) )}
        </NestedField>
      </span>
    ),
    Checkbox: (field, i) => (
      <span key={JSON.stringify(field.fieldName+(i || ""))}>
        <label htmlFor={field.id}>{field.fieldLabel || ""}</label>
        <Checkbox
          field={[field.fieldName, i]}
          id={field.id+(i || "")}
        />
      </span>
    ),
    Select: (field, i) => (
      <span key={JSON.stringify(field.fieldName+(i || ""))}>
        <label htmlFor={field.id}>{field.fieldLabel || ""}</label>
        <Select
          field={[field.fieldName, i]}
          id={field.id+(i || "")}
          options={field.options}
        />
      </span>
    ),
    RadioGroup: (field, i) => (
      <span key={JSON.stringify(field.fieldName+(i || ""))}>
        <label htmlFor={field.id}>{field.fieldLabel || ""}</label>
        <RadioGroup
          field={[field.fieldName, i]}
          id={field.id+(i || "")}
        >
          {field.options.map((option) => (
            <span key={JSON.stringify([field.fieldName, i]+option.value)}>
              <label htmlFor={JSON.stringify(field.id+(i || "")+option.value)}>{option.label}</label>
              <Radio
                value={option.value}
                id={JSON.stringify(field.id+(i || "")+option.value)}
              />
            </span>
          ))}
        </RadioGroup>
      </span>
    ),
    NestedField: (field, i) => (
      <span key={JSON.stringify(field.fieldName+(i || ""))}>
        <label>{field.fieldLabel+( i || i===0 ? ` ${i+1}` : "" )}</label>
        <NestedField field={[field.fieldName, i]}>
          {field.fields.map( (nestedField) => (FieldFactory.create[nestedField.fieldType](nestedField)) )}
        </NestedField>
      </span>
    ),
    Dynamic: (field) => (
      <span key={JSON.stringify("dynamic"+field.fieldName)}>
        {
          !(FieldFactory.formApi.values[field.fieldName]) && FieldFactory.formApi.addValue(field.fieldName,"")
        }
        {
          FieldFactory.formApi.values[field.fieldName] && FieldFactory.formApi.values[field.fieldName].map(
            (name, i) => (
              FieldFactory.create[field.fieldTemplate](field, i)
            )
          )
        }
        <button type="button" onClick={ () => { FieldFactory.formApi.addValue(field.fieldName,""); } } >
          Adicionar {field.fieldLabel}
        </button>
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
        {(formApi) => {
          FieldFactory.formApi = formApi;
          return(<form onSubmit={formApi.submitForm} >
            { formTemplate.map((field) => (FieldFactory.create[field.fieldType](field))) }
            <button>{ submitText || "Submit" }</button>
          </form>
        );}}
      </Form>
    );
  }
}

export default FormFactory;
