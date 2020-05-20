
import React from "react";
import Skills from "./Skills.js"
import ExpRows from "./Experiences.js"
//import {Column6HOC, RowHalfHOC} from "../GridHOC.js"
import {Column6, RowHalf} from "../Grid.js"

//class Page_item extends React.Component {
//  render() {
function Item(props) {
    return (
      <div>
        <h3>A test</h3>
        <p> Ask for more</p>
	{props.children}
      </div>
    );
//  }
}

class CV extends React.Component {
  render() {
    return (
      <>
        <ExpRows/>
        <RowHalf>
          <Column6>
            <Skills/>
          </Column6>
        </RowHalf>
      </>
    );
  }
}

export default CV;

