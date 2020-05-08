import React from "react";
import Skills from "./Skills.js"

class Styles extends React.Component {

  render() {
    return (
      <main className="row s-styles">
        <section id="styles" className="column large-full">
            <Skills/>
        </section>
      </main>
    );
  }
}

export default Styles;
