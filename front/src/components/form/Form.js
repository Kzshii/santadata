import React, { Component } from 'react';
import Select from './select/Select';
import Checkgroup from './checkgroup/Checkgroup';

/*
    Props: {
      SubmitValue: text,
      Submit: function pointer,
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
    this.props.Submit(this.state.formData);
  }

  render() {
    console.log("FORM PROP INPUT LIST:", this.props.InputList);
    return(
      <div className="Form">
        <form onSubmit={ this.handleSubmit }>
          {
            Object.keys(this.props.InputList).map(
              (input) => {
                const inputField = this.props.InputList[input];

                switch( inputField.type ) {
                  case 'label':
                    return(
                      <label key={ "'abel"+inputField.value }>{ inputField.value }</label>
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
                      <Checkgroup />
                    );
                  default:
                    console.log(this.props.InputList[input]);
                    break;
                }
              }
            )
          }
          <input type="submit" value={ this.props.SubmitValue }/>
        </form>
      </div>
    );
  }
}

export default Form;
