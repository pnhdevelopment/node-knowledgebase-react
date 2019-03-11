import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Home from './Home/Home.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Post from './Post/Post.js';
import PageNotFound from './PageNotFound/PageNotFound.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App Site">
            <div className="Site-content">
                <div className="App-header">
                  <Header />
                </div>
                <div className="main">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:slug" component={Post} />
                    <Route exact component={PageNotFound} />
                  </Switch>
                </div>  
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
