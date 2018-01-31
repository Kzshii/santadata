import React, { Component } from 'react';

/* 
    Props:
    prepare.med - med individual inputs
    prepare.commom - med commom inputs;
*/

class MedicineForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
      prepare: {
        med: {},
        commom: {}
      }
    }
  }
  
  componentWillMount() {
    this.setState(
      {
        prepare: this.props.prepare
      }
    );
  }

  render() {
    return(
      <div className="MedicineForm">
        {
          Object.keys(this.props.prepare.med).map(
            (input) => {
              switch(input.type) {
                
                case "select":
                  return(
                    <div className="Select">
                      <label htmlFor="">{ input.title }</label>
                      <select name="" id="" onChange="" >
                        {
                          input.options.map(
                            (option) => {
                              return(
                                <option key={ option.id } value={ option.id } >{ option.label }</option>
                              );
                            }
                          )
                        }
                      </select>
                    </div>
                  );
                  break;
                
                case "":
                  break;
                
                default:
                  break;
              }
            }
          )
        }
      </div>
    );
  }
}

export default MedicineForm;
