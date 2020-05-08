import React from "react";


class Skills extends React.Component {

  render() {
    return (
      <div className="row half-bottom">
        <div className="col-six tab-full">
        </div>
        <div className="col-six tab-full">
          <h3>Skill Bars</h3>
          <ul className="skill-bars">
            <li>
              <div className="progress percent90"><span>90%</span></div>
              <strong>HTML5</strong>
            </li>
            <li>
              <div className="progress percent85"><span>85%</span></div>
              <strong>CSS3</strong>
            </li>
            <li>
              <div className="progress percent70"><span>70%</span></div>
              <strong>JQuery</strong>
            </li>
            <li>
              <div className="progress percent95"><span>95%</span></div>
              <strong>PHP</strong>
            </li>
            <li>
              <div className="progress percent75"><span>75%</span></div>
              <strong>Wordpress</strong>
            </li>
            <li>
              <div className="progress percent90"><span>90%</span></div>
              <strong>Angular JS</strong>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;
