import React, { Component } from 'react';
import './Textarea.css';

/* 
    Props = {
      Label: text,
      Id: text,
      Name: text,
      Value: any,
      OnChange: function pointer,
      Disabled: boolean,
      ReadOnly: boolean,
      Required: boolean
    }
*/

class Textarea extends Component {
  render() {
    let disabled = false;
    let readOnly = false;
    let required = false;

    if(this.props.Disabled && (this.props.Disabled !== "false")) {
      disabled = true;
    }

    if(this.props.ReadOnly && (this.props.ReadOnly !== "false")) {
      readOnly = true;
    }

    if(this.props.Required && (this.props.Required !== "false")) {
      required = true;
    }
        
    return(
      <div className="Textarea">
        <label htmlFor={ this.props.Id }>{ this.props.Label }</label>
        <textarea
          name={ this.props.Name }
          id={ this.props.Id }
          onChange={ this.props.OnChange }
          disabled={ disabled }
          readOnly={ readOnly }
          required={ required }
          value={ this.props.Value }
        />
      </div>
    );
  }
}

export default Textarea;
