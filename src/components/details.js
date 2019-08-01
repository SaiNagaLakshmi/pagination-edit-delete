import React, { Component } from 'react'
import logo from '../images/first.jpg';


export default class Details extends Component {
  render() {
    return (
      <div>
        <div className="container smell">
          <div class="header">
            <a href="#weston">Weston</a>
            <div class="header-right">
              <a href="#home">Home</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
              <a href="#about">Contacts</a>
              <a href="#about">Service</a>
              <a href="#about">Orders</a>
            </div>
          </div>
          <div className="row small">
            <div className="col-md-6">
              <div className="card-body">
                <h6 className="desi">Gas Engineering <br />& Plumbing<br /> mechanical services</h6>
                <button type="button" className="btn btn-primary btn-circle box-model"><i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <img src={logo} className="desin" width="95%" alt="sai" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card-body">
                <button type="button" className="btn btn-warning sortin">Welcome</button>
                <h3 className="maribing">London & SouthEast<br />Commercial mechanical<br />Enginnering Services</h3>
                <p className="marib"> the Two Plus Four Agreement (German: Zwei-plus-Vier-Vertrag;[b] short: German Treaty), was negotiated in 1990 between the Federal Republic of Germany and the German Democratic Republic (the eponymous Two), and the Four Powers which occupied Germany at the end of World War II in Europe: France, the Soviet Union, the United Kingdom, and the United States. <span><a href="#" className="button-bres">Go to HOME</a></span></p>
                <div>
                  <button type="button" onClick={this.nextPage} className="btn btn-primary button-border">Click Here</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <img src={logo} className="manchu" width="95%" alt="sai" />
              </div>
            </div>
          </div>
        </div>
        <div className="container idedn">
          <h3>Some Recent Words From our customer</h3>
          <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src={logo} alt="sai" style={{ height: "267px" }} />
                <h4>Cleaning....</h4>
                <p class="price">$19.99</p>
                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                <button class="btn info">Read More</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={logo} alt="sai" style={{ height: "267px" }} />
                <h4>Cleaning....</h4>
                <p class="price">$19.99</p>
                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                <button type="button" class="btn btn-info">Read More</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={logo} alt="sai" style={{ height: "267px" }} />
                <h4>Cleaning....</h4>
                <p class="price">$19.99</p>
                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                <button class="btn info">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
