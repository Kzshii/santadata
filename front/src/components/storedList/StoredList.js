import React, { Component } from 'react';
import './StoredList.css';



class StoredList extends Component{

    constructor(props){
        super(props)


    }

    render(){

        if ((this.props.list.length)>0){
          
           
            return(
            <div className="storedList">
                <h3>{this.props.title}</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Visualizar</th>
                            <th>Remover</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.list.map(
                                (elemen,index)=>{
                                    return(
                                        <tr key={index}>    
                                            <td>{(elemen.name)}</td>                                 
                                            <td><button onClick={()=>{this.props.showPopup(index)}}><span className="fas fa-eye"></span></button></td>
                                            <td><button onClick={()=>{this.props.remove(index)}}><span className="fas fa-trash-alt"></span></button></td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
            )
        }else{
            
            return(
                
                <div className="storedList">
                    <h3>{this.props.title}</h3>
                    <h4>Nada Adicionado</h4>
                </div>
            )
        }
    }
}

export default StoredList;