
import React from "react";
import HeaderNav from "./Header/HeaderNav";
import HeaderTop from "./Header/HeaderTop";

//var Header = React.createClass({
class Header extends React.Component {

  render() {
//  render: function() {
    return (
      <header className="s-header">
      <HeaderTop/>
      <HeaderNav/>
      </header>
    );
  }
}
//);

export default Header;
