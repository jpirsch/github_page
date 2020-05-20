
import React from "react";
import SubMenu from "./HeaderNavSub.js";
import {Link } from "react-router-dom";

class HeaderNav extends React.Component {
  render() {
    const categories = [
      {route:"/Graphics", name:"Graphics" },
      {route:"/Physics", name:"Physics" },
      {route:"/AI", name:"AI" },
      {route:"/Web", name:"Web" }
    ];
    const posts = [
      {route:"/ShaderGallery", name:"ShaderGallery" },
      {route:"/Bullet", name:"Bullet" }
    ];
    return (
      <nav className="header__nav-wrap">
        <ul className="header__nav">
          <li className="current"><Link to="/Home">Home</Link></li>
          <SubMenu name="Categories" list={categories} /> 
          <SubMenu name="Posts" list={posts} /> 
          <li><Link to="/About">About</Link></li>
        </ul> {/* end header__nav */}

        <ul className="header__social">
          <li className="ss-instagram">
            <a href="https://www.instagram.com/svaen42/">
              <span className="screen-reader-text">Instagram</span>
            </a>
          </li>
          <li className="ss-linkedin">
            <a href="https://www.linkedin.com/in/jpirsch/">
              <span className="screen-reader-text">Linkedin</span>
            </a>
          </li>
          <li className="ss-github">
            <a href="https://github.com/jpirsch">
              <span className="screen-reader-text">Github</span>
            </a>
          </li>
          <li className="ss-gitlab">
            <a href="https://gitlab.com/jeqn">
              <span className="screen-reader-text">Gitlab</span>
            </a>
          </li>
        </ul>
      </nav> 
    );
  }
}
//);

export default HeaderNav;
