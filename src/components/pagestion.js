import React, { Component } from 'react';
import Pagination from "react-js-pagination";

export default class Pagestion extends Component {
    state = {
        data: [],
        activePage: 1,
        noPerPage: 10,
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json })
                console.log(this.state.data, "fgf")
            })
    }
    handlePageChange = (v) => {
        this.setState({ activePage: v })
    }
    educationDetails = () => {
        this.props.history.push("/education")
    }
    addressDetails = () => {
        this.props.history.push("/details")
    }
    render() {
        const { data, activePage, noPerPage } = this.state;
        const end = activePage * noPerPage;
        const begin = end - noPerPage;
        const data2 = data.slice(begin, end);
        return (
            <div>
                <div className="container">
                    <div className="header">
                        <a href="#default" class="logo">CompanyLogo</a>
                        <div className="header-right">
                            <a class="active" href="#home">Info</a>
                            <a href="#contact">Contact</a>
                            <a href="#about">About</a>
                        </div>
                    </div>
                    <div className="topnav">
                        <a href="#" onClick={this.educationDetails}>Education</a>
                        <a href="#" onClick={this.addressDetails}>Address</a>
                        <a href="#">Project</a>
                        <a href="#" style={{ float: 'right' }}>Contact Num</a>
                    </div>
                    <div className="pagination">
                        <div className="leftcolumn">
                            <div className="card">
                                <table id="customers">
                                    <tr>
                                        <th>Company</th>
                                        <th>Contact</th>
                                        <th>Country</th>
                                    </tr>
                                    {data2.map((val, key) => (
                                        <tr key={key}>
                                            <td>{val.userId}</td>
                                            <td>{val.title}</td>
                                            <td>{val.body}</td>

                                        </tr>
                                    ))}
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
                        <div className="rightcolumn">
                            <div className="card">
                                <h2>Hobbies</h2>
                                <div className="fakeimg" style={{ height: "100px" }}>Image</div>
                                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

