
import React from "react";
import {Link } from "react-router-dom";
import BasicImage from "../Images/img1.jpg";
import Row, {Column6, RowHalf} from "./GridHOC.js"

//class Page_item extends React.Component {
//  render() {
function Item() {
  return (
    <div>
      <h3>A test</h3>
      <p> Ask for more</p>
    </div>
  );
//  }
}

class Article extends React.Component {
  render() {
    return (
      <article className="masonry__brick entry format-standard ">
        <div className="entry__thumb">
          <a href="single-standard.html" className="entry__thumb-link">
            <img src={BasicImage} alt="">
            </img>
          </a>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <h2 className="entry__title">
              <Link to="/ShaderGallery">Explore a Shader Gallery</Link>
            </h2>
            <div className="entry__meta">
              <span className="entry__meta-cat">
          	<Link to="/Graphics">Graphics</Link>
          	<Link to="/Web">Web</Link>
              </span>
              <span className="entry__meta-date">
                <a href="single-standard.html">Apr 29, 2019</a>
              </span>
            </div>
          </div>
          <div className="entry__excerpt">
            <p>
            Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
            </p>
          </div>
        </div>
      </article>
    );
  }
}

class Category extends React.Component {
  render() {
    return (
      <div className="s-content">
        <header className="listing-header">
          <h1 className="h2">Category: {this.props.name}</h1>
        </header>
        <div className="masonry-wrap">
          <div className="masonry">
            <div className="grid-sizer"></div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
                      /*srcset="images/thumbs/masonry/woodcraft-600.jpg 1x, images/thumbs/masonry/woodcraft-1200.jpg 2x"*/

class Graphics extends React.Component {
  render() {
    return (
      <Category name="Graphics" >
        <Article />
      </Category>
    );
  }
}

class Physics extends React.Component {
  render() {
    return (
      <Category name="Physics" >
        <Article />
      </Category>
    );
  }
}

class AI extends React.Component {
  render() {
    return (
      <Category name="AI" >
        <Article />
      </Category>
    );
  }
}

class Web extends React.Component {
  render() {
    return (
      <Category name="Web" >
        <Article />
      </Category>
    );
  }
}

export default Category;
export { Graphics, Physics, AI, Web };
