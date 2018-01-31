import React, { Component } from 'react';
import Select from './select/Select';
import Checkgroup from './checkgroup/Checkgroup';

/*
    Props: {
      SubmitValue: text,
      OnSubmit: function pointer,
      InputList: {
        input_one: {
          type: text,
          title: text,
          options: [
            many {} options
          ],
        }
      },
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
              const inputField = this.props.InputList[input];

              switch( inputField.type ) {
                case 'label':
                  return(
                    <label key={ "Label"+inputField.value }>{ inputField.value }</label>
                  );
                
                case 'select':
                  return(
                    <Select
                      key={ "Select"+inputField.title }
                      Label={ inputField.title }
                      Options={ inputField.options }
                      KeyTag={ "Select"+inputField.title }
                      onChange={ this.handleChange }
                      OptionValue="id"
                    />
                  );
                
                case 'checkbox':
                  return(
                    <Checkgroup
                      key={ "Check"+inputField.title }
                      Label={ inputField.title }
                      Options={ inputField.options }
                      KeyTag={ "Check"+inputField.title }
                      onChange={ this.handleChange }
                      OptionValue="id"
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
