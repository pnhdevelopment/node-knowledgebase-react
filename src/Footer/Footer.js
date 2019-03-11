import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

import './Footer.css';
import reactjs from './reactjs.svg'; 




class Footer extends Component {

  componentDidMount() {

  }

  render() {
      return (
        <footer className="container-fluid">

          <div className="row">
            <div className="col-md-8 col-12 text-center text-md-left">
              &copy; 2018 Youtube University 
            </div>
            
            <div className="col-md-4 col-12 text-center text-md-right">
              Built with
              <a href="https://reactjs.org" className="ml-1">
                <img src={reactjs} className="d-inline-block" alt="reactjs" />
              </a>
            </div>
          </div>

        </footer>
      );
  }

}

export default Footer;
