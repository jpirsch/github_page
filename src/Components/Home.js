
import React from "react";
import Row, {Column6, RowHalf} from "./GridHOC.js"

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

class Home extends React.Component {

  render() {
    const InCol = Column6(Item);
    const In    = RowHalf(InCol, InCol);
    return (
      <div className="s-content content">
        <main className="row s-styles">
          <section id="styles" className="column large-full">

            <InCol/>
            <In/>

          </section>
        </main>
      </div>
    );
  }
}

export default Home;
