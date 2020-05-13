
import React from "react";
import {Link } from "react-router-dom";


class SubMenu extends React.Component {

  render() {
    return (
      <div>
        <li className="has-children">
          <a href="#0" title="">Categories</a>
          <ul className="sub-menu">
            <li><Link to="/Graphics">Graphics</Link></li>
            <li><Link to="/Machine-Learning">Machine-Learning</Link></li>
            <li><Link to="/Deep-Learning">Deep-Learning</Link></li>
            <li><Link to="/Web">Web</Link></li>
              
          </ul>
        </li>
        <li className="has-children">
          <a href="#0" title="">Blog Posts</a>
          <ul className="sub-menu">
            <li><a href="single-video.html">Video Post</a></li>
            <li><a href="single-audio.html">Audio Post</a></li>
            <li><a href="single-gallery.html">Gallery Post</a></li>
            <li><a href="single-standard.html">Standard Post</a></li>
          </ul>
        </li>
      </div>
    );
  }
}
//);

export default SubMenu;
