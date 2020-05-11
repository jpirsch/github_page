
import React from "react";
import CV from "./CV.js"

class Styles extends React.Component {

  render() {
    return (
      <div className="s-content content">
        <main className="row s-styles">
          <section id="styles" className="column large-full">

            <div className="row">
              <div className="column large-full">
                <h3>A test</h3>
                <p> Ask for more</p>
              </div>
            </div>

            <CV/>

          </section>
        </main>
      </div>
    );
  }
}

export default Styles;
