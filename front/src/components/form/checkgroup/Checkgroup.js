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
        <input type="checkbox" name="" id=""/>
        <label htmlFor=""></label>
      </div>
    );
  }
}

export default Checkgroup;
