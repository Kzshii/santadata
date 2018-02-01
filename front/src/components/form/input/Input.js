import React, { Component } from 'react';
import './Input.css';

/* 
    Props = {
      Label: text,
      Type: text,
      Id: text,
      Name: text,
      OnChange: function pointer,
      SpecialAttribute: text, // readonly, disabled, required
    }
*/

class Input extends Component {
  render() {
    if(this.props.SpecialAttribute) {
      switch(this.props.SpecialAttribute) {
        case 'required':
          return(
            <div className="Input">
              <label htmlFor={ this.props.Id }>{ this.props.Label }</label>
              <input
                type={ this.props.Type }
                name={ this.props.Name }
                id={ this.props.Id }
                onChange={ this.props.OnChange }
                required
              />
            </div>
          );
        case 'disabled':
          return(
            <div className="Input">
              <label htmlFor={ this.props.Id }>{ this.props.Label }</label>
              <input
                type={ this.props.Type }
                name={ this.props.Name }
                id={ this.props.Id }
                onChange={ this.props.OnChange }
                disabled
              />
            </div>
          );
        case 'readOnly':
          return(
            <div className="Input">
              <label htmlFor={ this.props.Id }>{ this.props.Label }</label>
              <input
                type={ this.props.Type }
                name={ this.props.Name }
                id={ this.props.Id }
                onChange={ this.props.OnChange }
                readOnly
              />
            </div>
          );
        default:
          break;
      }
    }
    
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
