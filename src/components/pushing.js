import React, { Component } from 'react'

export default class Pushing extends Component {
    state = {
        sign: this.props.history.location.state
    }
    render() {

        return (
            <div>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Id</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.sign != undefined && this.state.sign.map((val,key) => (
                            <tr key={key}>
                                <td>{val.title}</td>
                                <td>{val.userId}</td>
                                <td>{val.id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
