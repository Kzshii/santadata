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

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      Value: this.props.Value
    });
  }
  
  handleChange(event) {
    this.setState({
      Value: event.target.value
    });

    this.props.OnChange(event);
  }

  render() {        
    return(
      <div className="Input">
        <label htmlFor={ this.props.Id }>{ this.props.Label }</label>
        <input
          type={ this.props.Type }
          name={ this.props.Name }
          id={ this.props.Id }
          onChange={ this.handleChange }
          disabled={ this.props.Disabled && (this.props.Disabled !== "false") ? true : false }
          readOnly={ this.props.ReadOnly && (this.props.ReadOnly !== "false") ? true : false }
          required={ this.props.Required && (this.props.Required !== "false") ? true : false }
          value={ this.state.Value }
        />
      </div>
    );
  }
}

export default Input;
