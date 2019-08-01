import React, { Component } from 'react'

export default class Editable extends Component {
    state= {
        value:"sai",
        isEditMode:false
    }
    changeValue=()=>{
        this.setState({
            isEditMode:!this.state.isEditMode
        })
    }
    upDateValue = ()=>{
        this.setState({
            isEditMode:false,
            value:this.refs.theTextInput.value
        })
    }
  render() {
    return (
        this.state.isEditMode?
        <div>
        <input type="text" defaultValue= {this.state.value} ref="theTextInput"/>
        <button className="btn btn-primary" onClick={this.changeValue}><i className="fa fa-trash" aria-hidden="true"></i></button>
        <button className="btn btn-primary" onClick={this.upDateValue}><i className="fa fa-edit" aria-hidden="true"></i></button>
        </div>:
      <div onClick={this.changeValue}>
        {this.state.value}
      </div>
    )
  }
}
