import React, { Component } from 'react';
import Login from "../login/Login"

class App extends Component{

    constructor(props){
        super(props)
        this.state={

            currentPage: "login",
            login: null
        }
    }

    handleLogin = (data)=> {
        this.setState({login: data})
    }

    render(){
        switch(this.state.currentPage){
            case "login":
                return <Login onLogin={this.handleLogin}/>
            default:
                return "opa"
        }
    }
}

export default App;