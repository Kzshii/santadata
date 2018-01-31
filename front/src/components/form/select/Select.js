import React, { Component } from 'react';

/* 
    Props: {
      Label: text,
      Name: text,
      Id: numeric,
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
    console.log("SELECT PROPS OPTIONS:", this.props.Options);
    return(
      <div className="Select">
        <label htmlFor="">{ this.props.Label }</label>
        <select name={ this.props.Name } id={ this.props.Id } onChange={ this.props.onChange }>
          {
            this.props.Options.map(
              (option) => {
                return(
                  <option key={ this.props.KeyTag+option.id } value={ option.value } >{ option.label }</option>
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
