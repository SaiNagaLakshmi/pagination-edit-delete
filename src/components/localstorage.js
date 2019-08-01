import React, { Component } from 'react'

export default class Localstorage extends Component {
    state ={
        inputValues:'',
        email:"",
    }
   
    change1=(event)=>{
        this.setState({ [event.target.name]: event.target.value })
         localStorage.getItem('rememberMe');
       
    }
    change=()=>{
     
       localStorage.setItem('rememberMe', JSON.stringify(this.state)); 
       for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        alert(`${key}: ${localStorage.getItem(key)}`);
      }
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.change1} placeholder="Enter key.... " name="email" />
                <input type="text" onChange={this.change1} placeholder="Enter value.... " name="inputValues"/>
                <button  onClick={this.change}>Insert Data</button>
            </div>

        )
    }
}
