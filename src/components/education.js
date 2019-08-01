import React, { Component } from 'react'

export default class Education extends Component {
    state = {
        data: [],
        searchItems: "",
        searchResults: [],
        searchData: false
    }
    componentDidMount() {
        fetch('/data.json')
            .then(res => res.json())
            .then(json => this.setState({ data: json }))
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                <div className="sidenav">
                    <button className="dropdown-btn">Table
                     <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-container"  >
                        <a href="#">Link1</a>
                        <a href="#">Link1</a>
                        <a href="#">Link1</a>
                        <a href="#">Link1</a>
                    </div>
                    <a href="#contact">Flow Charts</a>
                </div>
                <div className="main">
                <h4>Practice Edit and Delete :</h4>
                    <form >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter something..."
                            />
                        </div>
                    </form>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>name</th>
                                <th>Company</th>
                                <th>Email</th>
                                <th>Edit & Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data != + undefined ? this.state.data.map(val => (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.company}</td>
                                    <td>{val.email}</td>
                                </tr>
                            )) : ''}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
