
import React from "react";
import {Link } from "react-router-dom";
import BasicImage from "../Images/img1.jpg";
//import Row, {Column6, RowHalf} from "./GridHOC.js"

class Article extends React.Component {
  render() {
    const dat = this.props.data;
    return (
      <article className="masonry__brick entry format-standard ">
        <div className="entry__thumb">
          <Link to={dat.route} className="entry__thumb-link">
            <img src={BasicImage} alt={dat.name}>
            </img>
          </Link>
        </div>
        <div className="entry__text">
          <div className="entry__header">
            <h2 className="entry__title">
              <Link to={dat.route}>{dat.name}</Link>
            </h2>
            <div className="entry__meta">
              <span className="entry__meta-cat">
                {dat.categories.map((t, i) =>
          	  <Link to={"/"+t} key={i}>{t}</Link>
                )}
              </span>
              <span className="entry__meta-date">
                <Link to={dat.route}>{dat.date}</Link>
              </span>
            </div>
          </div>
          <div className="entry__excerpt">
            <p>
              {dat.brief}
            </p>
          </div>
        </div>
      </article>
    );
  }
}

class PagesNav extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="column large-full">
          <nav className="pgn">
            <ul>
              <li><a className="pgn__prev" href="#0">Prev</a></li>
              <li><a className="pgn__num" href="#0">1</a></li>
              <li><span className="pgn__num current">2</span></li>
              <li><a className="pgn__num" href="#0">3</a></li>
              <li><a className="pgn__num" href="#0">4</a></li>
              <li><a className="pgn__num" href="#0">5</a></li>
              <li><span className="pgn__num dots">…</span></li>
              <li><a className="pgn__num" href="#0">8</a></li>
              <li><a className="pgn__next" href="#0">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer className="s-footer">
        <div className="row">
          <div className="column large-full footer__content">
            <div className="footer__copyright">
              <span>© Copyright Jean Pirsch 2020</span> 
              <span>Design template from
                <a href="https://www.styleshout.com/"> StyleShout</a>
              </span>
            </div>
          </div>
        </div>
        <div className="go-top">
          <a className="smoothscroll" title="Back to Top" href="#top"></a>
        </div>
      </footer>
    );
  }
}

//	<div id="top"></div>
class Category extends React.Component {
  render() {
    return (
      <>
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
        <PagesNav/>
      </div>
      <Footer/>
      </>
    );
  }
}
                      /*srcset="images/thumbs/masonry/woodcraft-600.jpg 1x, images/thumbs/masonry/woodcraft-1200.jpg 2x"*/
function shader_post() {
  const name = "Explore a Shader Gallery";
  const route = "/ShaderGallery";
  const categories = ["Graphics", "Web"];
  const date = "May 20 2020";
  const brief = `Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                 incididunt mollit id et sit proident dolor nulla sed commodo
                 est ad minim elit reprehenderit nisi officia aute incididunt
                 velit sint in aliqua...`;
  return ({name:name, route:route, categories:categories,
           date:date, brief:brief });
}

function bullet_post() {
  const name = "Experiments with bullet physics library";
  const route = "/Bullet";
  const categories = ["Physics", "AI"];
  const date = "May 20 2020";
  const brief = `Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                 incididunt mollit id et sit proident dolor nulla sed commodo
                 est ad minim elit reprehenderit nisi officia aute incididunt
                 velit sint in aliqua...`;
  return ({name:name, route:route, categories:categories,
           date:date, brief:brief });
}

class Graphics extends React.Component {
  render() {
    return (
      <Category name="Graphics" >
        <Article data={shader_post()} />
      </Category>
    );
  }
}

class Physics extends React.Component {
  render() {
    return (
      <Category name="Physics" >
        <Article data={bullet_post()} />
      </Category>
    );
  }
}

class AI extends React.Component {
  render() {
    return (
      <Category name="AI" >
        <Article data={bullet_post()} />
      </Category>
    );
  }
}

class Web extends React.Component {
  render() {
    return (
      <Category name="Web" >
        <Article data={shader_post()} />
      </Category>
    );
  }
}

export default Category;
export { Graphics, Physics, AI, Web };
