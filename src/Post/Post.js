import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import queryString from 'query-string';
import { Helmet } from "react-helmet";

import sprite from '../assets/sprite.svg';

import './Post.css';

class Post extends Component {

  constructor(props){
    super(props);

    this.url = 'http://www.node-knowledgebase-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed&slug=' + this.props.match.params.slug;

    this.state = {
      error: null,
      postIsLoaded: false,
      post: []
    };

  }
 
  componentDidMount() {

    fetch(this.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            postIsLoaded: true,
            post: result[0]
          });
        },
        (error) => {
          this.setState({
            postIsLoaded: true,
            error
          });
        }
      )

  }

  imageFadeIn(el){
    el.target.style.opacity = 1;
  }

  render() {
        const { error, postIsLoaded, post } = this.state;

        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!postIsLoaded) {
          return <div className="loader"></div>;
        } else {
          return(
            <section className="container" id="post">
              
              <Helmet>
                  <title>Node Knowledgebase | {post.title.rendered}</title>
              </Helmet>

              <div className="row">


                <div className="col-12 col-lg-8 m-auto">
                  {/* Title */}
                  <h1 className="text-center">{post.title.rendered}</h1>
                  
                  {/* Info */}
                  <div className="text-center mb-2">
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
                  </div>
                </div>

                <div className="col-12 col-md-8 col-lg-6 m-auto">
                  {/* Image */}
                  <div className="text-center mb-2 img-wrapper">
                    <img
                      src={post["_embedded"]["wp:featuredmedia"][0]["source_url"]}
                      alt={post.title.rendered}
                      onLoad={this.imageFadeIn}
                    />
                  </div>
                </div>


                <div className="col-12 col-lg-8 m-auto">
                  {/* Content */}
                  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />    
                </div>


              </div>
            </section>
          )
        }


  }

}

export default Post;
