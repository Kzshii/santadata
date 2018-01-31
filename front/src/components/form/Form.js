import React, { Component } from 'react';
import './Form.css';
import Select from './select/Select';
import Checkgroup from './checkgroup/Checkgroup';
import Input from './input/Input';

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
        }
      },
      Config: {
        Select: {
          OptionValue: text,
        }
        Checkgroup: {
          OptionValue: text,
        }
      }
    }
*/

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      formData: {},
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    
  }

  render() {
    console.log("FORM PROP INPUT LIST:", this.props.InputList);
    return(
      <div className="Form">
        {
          Object.keys(this.props.InputList).map(
            (input) => {
              let OptionValue;
              const inputField = this.props.InputList[input];

              switch( inputField.type ) {
                case 'label':
                  return(
                    <label key={ "Label"+inputField.value }>{ inputField.value }</label>
                  );
                
                case 'select':
                  if(this.props.Config.Select.OptionValue) {
                    OptionValue = this.props.Config.Select.OptionValue;
                  } else {
                    OptionValue = "value";
                  }
                  return(
                    <Select
                      key={ "Select"+inputField.title }
                      Label={ inputField.title }
                      Options={ inputField.options }
                      KeyTag={ "Select"+inputField.title }
                      OnChange={ this.handleChange }
                      OptionValue={ OptionValue }
                    />
                  );
                
                case 'checkbox':
                  if(this.props.Config.Checkgroup.OptionValue) {
                    OptionValue = this.props.Config.Select.OptionValue;
                  } else {
                    OptionValue = "value";
                  }
                  return(
                    <Checkgroup
                      key={ "Check"+inputField.title }
                      Label={ inputField.title }
                      Options={ inputField.options }
                      KeyTag={ "Check"+inputField.title }
                      OnChange={ this.handleChange }
                      OptionValue={ OptionValue }
                    />
                  );
                
                case 'text':
                case 'date':
                case 'number':
                  return(
                    <Input 
                      key={ "Input"+inputField.title }
                      Label={ inputField.title }
                      OnChange={ this.handleChange }
                      Type={ inputField.type }
                    />
                  );
                
                default:
                  console.log("elemento não listado");
                  break;
              }
            }
          )
        }
        <input type="submit" value={ this.props.SubmitValue }  onMouseUp={ () => { this.props.OnSubmit(this.state.formData); } }/>
      </div>
    );
  }
}

export default Form;
