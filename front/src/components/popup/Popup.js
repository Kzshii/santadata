import React, { Component } from 'react';
import './Popup.css';


class Popup extends Component{


	constructor(props){
		super(props)
	}



	render(){
			return(
				<div className="popup">
					<div className="popup_inner">
						<button className="close" onClick={this.props.close}><span className="fas fa-times-circle"></span></button>
						<h3>{this.props.title}</h3>
						<h4>{this.props.content}</h4>
					</div>

				</div>

			)
	}


}

export default Popup;
