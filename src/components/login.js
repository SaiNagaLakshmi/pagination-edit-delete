import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        data: [],
        searchItems: "",
        searchResults: [],
        searchData: false
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => this.setState({ data: json }))
    }
    handleCatch = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => this.catching())
    }
    catching = () => {
        const searchResults = this.state.data.reduce((acc, result) => {
            if (result && result.title.match(this.state.searchItems)) {
                acc.push(result)
            }
            return acc;
        }, [])
        this.setState({ searchResults, searchData: true })
    }
    truncate = (data) => data && data.map(val => (
        <tr>
            <td>{val.title}</td>
            <td>{val.userId}</td>
            <td>{val.id}</td>

        </tr>
    ))
    render() {
        console.log(this.state.searchResults)
        return (
            <div>
                <input type="text" id="myInput" onChange={this.handleCatch} placeholder="Search for names.." title="Type in a name" name="searchItems" />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Id</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.searchData ? this.truncate(this.state.searchResults) : this.truncate(this.state.data)}
                    </tbody>
                </table>
            </div>
        )
    }
}
