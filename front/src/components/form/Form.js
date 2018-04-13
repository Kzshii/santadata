import React, { Component } from 'react';
import './Form.css';
import Select from './select/Select';
import Checkgroup from './checkgroup/Checkgroup';
import Input from './input/Input';
import Radiogroup from './radiogroup/Radiogroup';
import Textarea from './textarea/Textarea';

/*
    Props: {
      SubmitValue: text,
      OnSubmit: function pointer,
      InputList: {
        input_one: {
          type: text,
          title: text,
          value: any,
          options: [
            many {} options
          ],
          special
        }
      },
      Config: {
        Select: {
          OptionValue: text,
        },
        Checkgroup: {
          OptionValue: text,
        },
        Radiogroup: {
          OptionValue: text,
        }
      }
    }
*/

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchInputType = this.switchInputType.bind(this);

    this.state = {
      formData: {}
    };
  }

  componentWillMount() {
    this.setState({
      formData: JSON.parse(JSON.stringify(this.props.InputList))
    });
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    let formData = this.state.formData;

    if(!formData[name]) {
      formData[name] = JSON.parse(JSON.stringify(this.props.InputList[name]));
      //formData[name].readonly = "true";
    }

    if(target.type === 'checkbox') {
      const index = target.attributes.index.value;
      if(target.checked) {
        /* insere */
        formData[name].options[index].checked = true;
      } else {
        /* remove */
        formData[name].options[index].checked = false;
      }

    } else if(target.type === 'select-one') {
      formData[name].options.map((option)=>{
        if(option.selected) {
          option.selected = false;
        }
      });

      const index = target.options.selectedIndex;
      formData[name].options[index].selected = true;
    } /* else if(target.type === 'radio') {
      TO DO
    } */ else {
      formData[name].value = value;
    }

    if(this.props.Storage) {
      this.props.Storage(formData);
    }

    this.setState({
      formData: formData,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.props.OnSubmit) {
      this.props.OnSubmit(this.state.formData);
      this.setState({
        formData: {}
      });
    }
  }

  switchInputType(input) {
    let inputField = this.props.InputList[input];
    let returnSelected = null;

    switch( inputField.type ) {
      case 'label':
        returnSelected = <label key={ "Label"+input+this.props.KeyTag }>{ inputField.value }</label>;
        break;

      case 'select':
        returnSelected =
          <Select
            key={ "Select"+input+this.props.KeyTag }
            Label={ inputField.title }
            Options={ inputField.options }
            KeyTag={ "Select"+inputField.title }
            OnChange={ this.handleChange }
            OptionValue={ this.props.Config.Select.OptionValue ? this.props.Config.Select.OptionValue : "value" }
            Name={ input }
            Value={ inputField.value }
          />
        ;
        break;

      case 'checkbox':
        returnSelected =
          <Checkgroup
            key={ "Check"+input+this.props.KeyTag }
            Label={ inputField.title }
            Options={ inputField.options }
            KeyTag={ "Check"+inputField.title }
            OnChange={ this.handleChange }
            OptionValue={ this.props.Config.Checkgroup.OptionValue ? this.props.Config.Checkgroup.OptionValue : "value" }
            Name={ input }
          />
        ;
        break;

      case 'radio':
        returnSelected =
          <Radiogroup
            key={ "Radio"+input+this.props.KeyTag }
            Label={ inputField.title }
            Options={ inputField.options }
            KeyTag={ "Radio"+inputField.title }
            OnChange={ this.handleChange }
            OptionValue={ this.props.Config.Radiogroup.OptionValue ? this.props.Config.Radiogroup.OptionValue : "value" }
            Name={ input }
            Value={ inputField.value }
          />
        ;
        break;

      case 'text':
      case 'date':
      case 'number':
        returnSelected =
          <Input
            key={ "Input"+input+this.props.KeyTag }
            Label={ inputField.title }
            OnChange={ this.handleChange }
            Type={ inputField.type }
            Name={ input }
            Disabled={ inputField.disabled }
            ReadOnly={ inputField.readonly }
            Required={ inputField.required }
            Value={ inputField.value }
          />
        ;
        break;

      case 'textarea':
        returnSelected =
          <Textarea
            key={ "Textarea"+input+this.props.KeyTag }
            Label={ inputField.title }
            OnChange={ this.handleChange }
            Name={ input }
            Disabled={ inputField.disabled }
            ReadOnly={ inputField.readonly }
            Required={ inputField.required }
            Value={ inputField.value }
          />
        ;
        break;

      case 'submit':
        returnSelected = <input key={ "Submit"+input+this.props.KeyTag } type="submit" value={ this.props.SubmitValue }/>;
        break;

      /* case 'form':
        {
          Object.keys(inputField.InputList).map(
            (input) => {
              return(this.switchInputType(input));
            }
          )
        }
        break; */

      default:

        return(null);
    }

    /* if(inputField.canrepeat) {
      returnSelected =
        <div key={ returnSelected.key+"parent" }>
          { returnSelected }
          <span onClick={
            (event) => {
              event.preventDefault();
              if(inputField.repeat) {
                inputField.repeat += 1;
              } else {
                inputField.repeat = 2;
              }

              let InputList = this.state.InputList;
              InputList[input] = inputField;

              this.setState({
                InputList: InputList
              });
            }
          } >Adicionar outro</span>
        </div>
      ;
    } */

    return(returnSelected);
  }

  render() {
    return(
      <div className="Form">
        <form onSubmit={ this.handleSubmit }>
        {
          Object.keys(this.props.InputList).map(
            (input) => {
              return(this.switchInputType(input));
            }
          )
        }
        </form>
      </div>
    );
  }
}

export default Form;
