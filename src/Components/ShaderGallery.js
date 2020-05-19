
import React from "react";
import Row, {Column6, RowHalf} from "./GridHOC.js"
import "./ShaderGallery.css"
import ThreeC from "./Three/ThreeCanvas.js"

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

class ShaderGallery extends React.Component {

  render() {
    const InCol = Column6(Item);
    const In    = RowHalf(InCol, InCol);
    return (
      <div className="s-content content">
        <main className="row s-styles">
          <section id="Graphics" className="column large-full">

            <div className="backshadow">
              <ThreeC/>
            </div>

          </section>
        </main>
      </div>
    );
  }
}
    //const Col = ColumnFull(ThreeCanvas); 
    //const Row1 = Row(Col);

export default ShaderGallery;
