import React, { Component } from 'react';
import { connect } from 'react-redux';
import { test } from './Actions';

class Newdata extends Component {
    manoj = () => {
        this.props.adress()
    }

    render() {
        console.log(this.props.abhi)
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <button onClick={this.manoj}>accept my apology</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
abhi:state
})

const mapDispatchToProps = dispatch => ({
    adress: () => dispatch(test())

})

export default connect(mapStateToProps, mapDispatchToProps)(Newdata)
