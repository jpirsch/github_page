
import React from "react";
import {Link } from "react-router-dom";


class SubMenu extends React.Component {
  render() {
    return (
      <>
        <li className="has-children">
          <a href={"/"+this.props.name} title="">{this.props.name}</a>
          <ul className="sub-menu">
        {this.props.list.map((t, i) =>
            <li key={i} >
              <Link to={t.route} key={i+10} >{t.name}</Link>
            </li>
        )}
          </ul>
        </li>
      </>
    );
  }
}
//);

export default SubMenu;
