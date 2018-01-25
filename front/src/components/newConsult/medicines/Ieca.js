import React, { Component } from 'react';
import Base64 from '../../../lib/base64';
import axios from 'axios';




class Ieca extends Component{

    constructor(props){
        super(props)
    }


    render(){
        console.log(this.props.form)
        return(
            <h1>IECA</h1>
        )
    }
}

export default Ieca;