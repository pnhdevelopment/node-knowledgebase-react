import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactPaginate from 'react-paginate';

// import Pagination from "react-js-pagination";


// import Header from '../Header/Header.js';
// import Footer from '../Footer/Footer.js';

import queryString from 'query-string';
import sprite from '../assets/sprite.svg';


// import logo from './logo.svg';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      q: null,
      postsAreLoaded: false,
      posts: []
    };

  }


  performSearch(query){

    if (!query) query = '';
    
    this.url = 'https://www.node-knowledgebase-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed&search=' + query;

    fetch(this.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            q: query,
            postsAreLoaded: true,
            posts: result
          });
        },
        (error) => {
          this.setState({
            postsAreLoaded: true,
            error
          });
        }
      )

  }



  componentDidUpdate(nextProps){
    if (nextProps.location !== this.props.location) {
      this.setState({
        postsAreLoaded: false,
      });
      const values = queryString.parse(this.props.location.search);
      this.performSearch(values.q);
      
    }
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    //console.log(values.q);
    this.performSearch(values.q);
  }



  imageFadeIn(el){
    el.target.style.opacity = 1;
  }


  render() {
    const { error, q, postsAreLoaded, posts } = this.state;
    //console.log(posts);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!postsAreLoaded) {
      return <div className="loader"></div>;
    } else {
      return (
        <section className="container" id="home">

          <Helmet>
            <title>Node Knowledgebase</title>
          </Helmet>

          {posts.map(post => (            
            <div className="row mb-4" key={post.id} >
              <div className="col-12 col-md-6">
                <Link to={post.slug}>
                  {/* Image */}
                  {post['_embedded']['wp:featuredmedia'][0]['source_url'] &&
                    <div className="img-wrapper">
                      <img
                        className="w-100"
                        src={post["_embedded"]["wp:featuredmedia"][0]["source_url"]}
                        onLoad={this.imageFadeIn}
                        alt={post.title.rendered}
                      />
                    </div>
                  }
                </Link>
              </div>

              <div className="col-12 col-md-6">
                {/* Title */}
                <Link to={post.slug}>
                  <h1 dangerouslySetInnerHTML={{__html: `${post.title.rendered}`}} />
                </Link>
                
                {/* Details */}
                <div className="d-inline-block mr-3">
                  <svg className="icon mr-2">
                    <use xlinkHref={`${sprite}#calendar`}></use>
                  </svg>
                  <small>{ new Date(post.date).toLocaleString('en-us', { day: 'numeric', month: 'long',year: 'numeric' }) }</small>
                </div>

                <div className="d-inline-block mr-3">
                  <svg className="icon mr-2">
                    <use xlinkHref={`${sprite}#profile`}></use>
                  </svg>
                  <small>By Pascale</small>
                </div>
                
                {/* Body text */}
                <div className="text-left">
                  <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <Link to={`/${post.slug}`} className="continue-reading">Continue reading &rarr;</Link>
                </div>

              </div>
            </div>
          ))}



        </section>
      );
    }
  }



}

export default Home;
