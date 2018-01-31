import React, { Component } from 'react';
import './Radiogroup.css';

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

class Radiogroup extends Component {
  render() {
    return(
      <div className="Radiogroup">
        <label>{ this.props.Label }</label>
        {
          this.props.Options.map(
            (option) => {
              return(
                <div className="Radio" key={ this.props.KeyTag+option.id } >
                  <input
                    type="radio"
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

export default Radiogroup;
