import React, { Component } from 'react';
import Pagination from "react-js-pagination";

export default class Newlogin extends Component {
    state = {
        data: [],
        searchItems: "",
        searchResults: [],
        searchData: false,
        activePage: 1,
        noPerPage: 10
    }
    componentDidMount() {
        fetch('/data.json')
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
            <td>{val.id}</td>
            <td>{val.name}</td>
            <td>{val.company}</td>
            <td>{val.email}</td>
            <td><button type="button" class="btn btn-success">Edit</button></td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
    ))
    handlePageChange = (v) => {
        this.setState({ activePage: v })
    }
    render() {
        const { data, activePage, noPerPage } = this.state;
        const end = activePage * noPerPage;
        const begin = end - noPerPage;
        const data2 = data.slice(begin, end);
        return (
            <div>
                <div className="sidenav">
                    <button className="dropdown-btn">Table
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-container" >
                        <a href="#">Link1</a>
                        <a href="#">Link1</a>
                        <a href="#">Link1</a>
                        <a href="#">Link1</a>
                    </div>
                    <a href="#contact">Flow Charts</a>
                </div>
                <div className="pagination">
                    <div className="main">
                        <input type="text" id="myInput" onChange={this.handleCatch} placeholder="Search for names.." title="Type in a name" name="searchItems" />
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>name</th>
                                    <th>Company</th>
                                    <th>Email</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.searchData ? this.truncate(this.state.searchResults) : this.truncate(this.state.data)}
                            </tbody>
                        </table>
                        <Pagination
                            prevPageText='prev'
                            nextPageText='next'
                            firstPageText='first'
                            lastPageText='last'
                            activePage={activePage}
                            itemsCountPerPage={noPerPage}
                            totalItemsCount={data.length}
                            onChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


