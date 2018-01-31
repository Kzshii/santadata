import React, { Component } from 'react';

/*
    Props:
      Submit: submit function pointer, defined on parent Component
      InputList: json Object that contains all input fields
*/

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      formData: {},
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.Submit(this.state.formData);
  }

  render() {
    return(
      <div className="Form">
        <form action="" onSubmit={ this.handleSubmit }>
          {
            Object.keys(this.props.InputList).map(
              (input) => {
                switch( this.props.InputList[input] ) {
                  default:
                    console.log(this.props.InputList[input]);
                    break;
                }
              }
            )
          }
        </form>
      </div>
    );
  }
}

export default Form;
