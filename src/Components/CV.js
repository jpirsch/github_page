
import React from "react";
import Skills from "./Skills.js"
import Timeline from "./Timeline.js"

class CV extends React.Component {

  render() {
    return (
      <div>
      <div className="row half-bottom">
        <div className="column large-6 tab-full">
          <Timeline/>
        </div>
      </div>
      <div className="row half-bottom">
        <div className="column large-6 tab-full">
        </div>
        <div className="column large-6 tab-full">
          <Skills/>
        </div>
      </div>
      </div>
    );
  }
}

export default CV;
