
import React from "react";
import SubMenu from "./HeaderNavSub.js";
import {Link } from "react-router-dom";

class HeaderNav extends React.Component {

  render() {
    return (
      <nav className="header__nav-wrap">
        <ul className="header__nav">
          <li className="current">
            <a href="index.html" title="">
              <Link to="/Home">Home</Link>
            </a>
          </li>
          <SubMenu/> 
          <li>
            <a href="" title="">
              <Link to="/Styles">Styles</Link>
            </a>
          </li>
          <li>
            <a href="page-about.html" title="">
              <Link to="/Three">Three</Link>
            </a>
          </li>
          <li><a href="page-contact.html" title="">Contact</a></li>
        </ul> {/* end header__nav */}

        <ul className="header__social">
          <li className="ss-facebook">
            <a href="https://facebook.com/">
              <span className="screen-reader-text">Facebook</span>
            </a>
          </li>
          <li className="ss-twitter">
            <a href="#0">
              <span className="screen-reader-text">Twitter</span>
            </a>
          </li>
          <li className="ss-dribbble">
            <a href="#0">
              <span className="screen-reader-text">Dribbble</span>
            </a>
          </li>
          <li className="ss-pinterest">
            <a href="#0">
              <span className="screen-reader-text">Behance</span>
            </a>
          </li>
        </ul>
      </nav> 
    );
  }
}
//);

export default HeaderNav;
