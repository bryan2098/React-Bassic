import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="page-caption">
                  <h1 className="page-title">Hike Pageheader</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-section">
          <div className="container">
            <div className="card-block bg-white mb30">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="section-title mb-0">
                    <h2>All about Hike. We share our knowledge on blog</h2>
                    <p>Our approach is very simple: we define your problem and give the best solution. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
