import React, { Component } from 'react';
import './Input.css';

/* 
    Props = {
      Label: text,
      Type: text,
      Id: text,
      Name: text,
      Value: any,
      OnChange: function pointer,
      Disabled: boolean,
      ReadOnly: boolean,
      Required: boolean
    }
*/

class Input extends Component {
  render() {        
    return(
      <div className="Input">
        <label htmlFor={ this.props.Id }>{ this.props.Label }</label>
        <input
          type={ this.props.Type }
          name={ this.props.Name }
          id={ this.props.Id }
          onChange={ this.props.OnChange }
          disabled={ this.props.Disabled && (this.props.Disabled !== "false") ? true : false }
          readOnly={ this.props.ReadOnly && (this.props.ReadOnly !== "false") ? true : false }
          required={ this.props.Required && (this.props.Required !== "false") ? true : false }
          value={ this.props.Value ? this.props.Value : "" }
        />
      </div>
    );
  }
}

export default Input;
