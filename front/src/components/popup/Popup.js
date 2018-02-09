import React, { Component } from 'react';
import './Popup.css';


class Popup extends Component{


    constructor(props){
        super(props)
    }



    render(){
        return(
            <div className="popup">
                <h4>{this.props.title}</h4>
                <button className="close" onClick={this.props.close}><span className="fas fa-times-circle"></span></button>

            </div>

        )
    }


}

export default Popup;