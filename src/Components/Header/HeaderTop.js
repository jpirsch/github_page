
import React from "react";
//import SiteLogo from "./logo.svg";
import {Link } from "react-router-dom";


class HeaderTop extends React.Component {

  render() {
    return (
      <div className="header__top">
        <div className="header__logo">
          <Link to="/Home">
            /Dev/Book/>
            {/*<img src={SiteLogo} alt="Homepage" />*/}
          </Link>
        </div>
{/*        <div className="header__search">
          <form role="search" method="get" className="header__search-form" action="#">
            <label>
              <span className="hide-content">Search for:</span>
              <input type="search" className="header__search-field" placeholder="Type Keywords" defaultValue name="s" title="Search for:" autoComplete="off" />
            </label>
            <input type="submit" className="header__search-submit" defaultValue="Search" />
          </form>
          <a href="#0" title="Close Search" className="header__search-close">Close</a>
        </div>  */}{/* end header__search */}
        {/* toggles */}
{/*        <a href="#0" className="header__search-trigger" />
        <a href="#0" className="header__menu-toggle"><span>Menu</span></a> */}
      </div>
    );
  }
}

export default HeaderTop;
