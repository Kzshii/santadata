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
      onChange: function pointer
    }
*/

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return(
      <div className="Select">
        <label htmlFor="">{ this.props.Label }</label>
        <select name={ this.props.Name } id={ this.props.Id } onChange={ this.props.onChange }>
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
