import React, { Component } from 'react';
// import { BrowserRouter as Link } from "react-router-dom";

import './PageNotFound.css';

// import Header from '../Header/Header.js';
// import Footer from '../Footer/Footer.js';


class PageNotFound extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {

  }

  render() {
      return (
        <div className="container" id="page-not-found">
          <div className="row">
            <div className="col-12">
              <h1>Page Not Found</h1>
              <p>Please go <a onClick={this.props.history.goBack}>back.</a></p>
            </div>
          </div>
        </div>
      );
  }


}

export default PageNotFound;
