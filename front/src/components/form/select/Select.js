import React, { Component } from 'react';
import './Select.css';

/* 
    Props: {
      Label: text,
      Name: text,
      Id: text,
      OptionValue: text (indica qual variável deve ir para o value)
      Options: [
        0: {
          id: numeric,
          value: any,
          label: text,
        },
        1: {
          id: numeric,
          value: any,
          label: text,
        }
      ]
      KeyTag: text,
      OnChange: function pointer
    }
*/

class Select extends Component {
  render() {
    return(
      <div className="Select">
        <label htmlFor="">{ this.props.Label }</label>
        <select name={ this.props.Name } id={ this.props.Id } onChange={ this.props.OnChange }>
          {
            this.props.Options.map(
              (option) => {
                return(
                  <option key={ this.props.KeyTag+option.id } value={ option[this.props.OptionValue] } >{ option.label }</option>
                );
              }
            )
          }
        </select>
      </div>
    );
  }
}

export default Select;
