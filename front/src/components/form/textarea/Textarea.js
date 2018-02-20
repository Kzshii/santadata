import React, { Component } from 'react';
import './Textarea.css';

/* 
    Props = {
      Label: text,
      Id: text,
      Name: text,
      Value: any,
      OnChange: function pointer,
      Disabled: boolean,
      ReadOnly: boolean,
      Required: boolean
    }
*/

class Textarea extends Component {

  componentWillMount() {
    this.setState({
      Value: this.props.Value
    });
  }

  render() {        
    return(
      <div className="Textarea">
        <label htmlFor={ this.props.Id }>{ this.props.Label }</label>
        <textarea
          name={ this.props.Name }
          id={ this.props.Id }
          onChange={ this.props.OnChange }
          disabled={ this.props.Disabled && (this.props.Disabled !== "false") ? true : false }
          readOnly={ this.props.ReadOnly && (this.props.ReadOnly !== "false") ? true : false }
          required={ this.props.Required && (this.props.Required !== "false") ? true : false }
          value={ this.state.Value }
        />
      </div>
    );
  }
}

export default Textarea;
