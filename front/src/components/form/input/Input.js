import React, { Component } from 'react';
import './Input.css';

/* 
    Props = {
      Label: text,
      Type: text,
      Id: text,
      Name: text,
      OnChange: function pointer
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
        />
      </div>
    );
  }
}

export default Input;
