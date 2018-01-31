import React, { Component } from 'react';
import './Checkgroup.css';

/*
  Props: {
    Label: text,
    Name: text,
    Id: text,
    OptionValue: text,
    Options: [
      id: numeric,
      value: any,
      label: text
    ],
  }
*/

class Checkgroup extends Component {
  render() {
    return(
      <div className="Checkgroup">
        <label>{ this.props.Label }</label>
        {
          this.props.Options.map(
            (option) => {
              return(
                <div className="Checkbox" key={ this.props.KeyTag+option.id }>
                  <input
                    type="checkbox"
                    value={ option[this.props.OptionValue] }
                    id={ this.props.KeyTag+option.id }
                    onChange={ this.props.OnChange }
                    name={ this.props.Name }
                  />
                  <label htmlFor={ this.props.KeyTag+option.id }>{ option.label }</label>
                </div>
              );
            }
          )
        }
      </div>
    );
  }
}

export default Checkgroup;
