import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Link } from "react-router-dom";


import './Header.css';
import logo from '../assets/logo.svg';

class Header extends Component {


  // constructor(props) {
  //   super(props);
  // }


  handleSubmit(e){
    e.preventDefault();
    this.props.history.push({
      pathname: '/',
      search: '?q=' + e.target.querySelector('input').value
    });
  }

  toggleButton(el){
  	document.querySelector('.circle.icon').classList.toggle("closed");
  	//console.log( el.target );
    // el.target.classList.toggle("closed");
    document.querySelector('#mobileNavbar').classList.toggle("reveal");
  }



  render() {
    return (
		<div className="mb-3">
		  <nav className="navbar navbar-expand-lg navbar-dark">
		    <Link to={`/`}>
		  	 <img className="logo" src={logo} alt="Node Knowledgebase" />
		    </Link>

		    <div id="wrapper" className="d-lg-none" onClick={this.toggleButton.bind(this)} >
		      <div className="circle icon">
		        <span className="line top"></span>
		        <span className="line middle"></span>
		        <span className="line bottom"></span>
		      </div>
		    </div>

		    <div className="ml-auto d-lg-inline-block d-none" id="navbarSupportedContent">
		      <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={this.handleSubmit.bind(this)} >
		        <input
		          className="form-control mr-sm-2"
		          type="search" placeholder="Search" aria-label="Search"
		          name="q" />
		        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
		      </form>
		    </div>
		    
		  </nav>

		  <div id="mobileNavbar" className="d-lg-none">
		    <form className="w-100 p-3 my-2 my-lg-0" onSubmit={this.handleSubmit.bind(this)} >
		      <input
		        className="form-control mb-2 mr-sm-2"
		        type="search" placeholder="Search" aria-label="Search"
		        name="q" />
		      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
		    </form>
		  </div>
		</div>
    );
  }
}
 
export default withRouter(Header);







