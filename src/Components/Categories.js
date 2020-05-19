
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

class Categories extends React.Component {
  render() {
    const InCol = Column6(Item);
    const In    = RowHalf(InCol, InCol);
    return (
      <div className="s-content content">
        <main className="row s-styles">
          <section id="Categories" className="column large-full">
            <InCol/>
            <In/>
          </section>
        </main>
      </div>
    );
  }
}

class Graphics extends React.Component {
  render() {
    const InCol = Column6(Item);
    const In    = RowHalf(InCol, InCol);
    return (
      <div className="s-content content">
        <main className="row s-styles">
          <section id="Graphics" className="column large-full">
            <InCol/>
            <In/>
          </section>
        </main>
      </div>
    );
  }
}

class Physics extends React.Component {
  render() {
    const InCol = Column6(Item);
    const In    = RowHalf(InCol, InCol);
    return (
      <div className="s-content content">
        <main className="row s-styles">
          <section id="Physics" className="column large-full">
            <InCol/>
            <In/>
          </section>
        </main>
      </div>
    );
  }
}

class AI extends React.Component {
  render() {
    const InCol = Column6(Item);
    const In    = RowHalf(InCol, InCol);
    return (
      <div className="s-content content">
        <main className="row s-styles">
          <section id="AI" className="column large-full">
            <InCol/>
            <In/>
          </section>
        </main>
      </div>
    );
  }
}

class UI extends React.Component {
  render() {
    const InCol = Column6(Item);
    const In    = RowHalf(InCol, InCol);
    return (
      <div className="s-content content">
        <main className="row s-styles">
          <section id="UI" className="column large-full">
            <InCol/>
            <In/>
          </section>
        </main>
      </div>
    );
  }
}

export default Categories;
export { Graphics, Physics, AI, UI };
