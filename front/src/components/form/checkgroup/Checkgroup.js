import React, { Component } from 'react';

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
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="Checkgroup">
        {
          this.props.Options.map(
            (option) => {
              return(
                <div className="Checkbox" key={ this.props.KeyTag+option.id }>
                  <input
                    type="checkbox"
                    value={ option[this.props.OptionValue] }
                    id={ this.props.KeyTag+option.id }
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
