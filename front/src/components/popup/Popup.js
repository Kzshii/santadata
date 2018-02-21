import React, { Component } from 'react';
import './Popup.css';


class Popup extends Component{


    constructor(props){
        super(props)
    }



    render(){
        return(
            <div className="popup">
                <div className="bar">
                    <button className="close" onClick={this.props.close}><span className="fas fa-times-circle"></span></button>
                </div>
                <h3>{this.props.title}</h3>
                <h4>{this.props.content}</h4>


            </div>

        )
    }


}

export default Popup;
