
import React from "react";
import Skills from "./Skills.js"
import Timeline from "./Timeline.js"
import {Column6, RowHalf} from "./GridHOC.js"

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
class CV extends React.Component {

  render() {
    const R1Col1  = Column6(Timeline);
    const R1Col2  = Column6(Item);
    const Row1    = RowHalf(R1Col1, R1Col2);
    const R2Col1  = Column6(Item);
    const R2Col2  = Column6(Skills);
    const Row2    = RowHalf(R2Col1, R2Col2);
    return (
      <div>
        <Row1/>
        <Row2/>
      </div>
    );
  }
}

export default CV;
