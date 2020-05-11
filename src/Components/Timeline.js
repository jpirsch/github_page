
import React from "react";

class Timeline extends React.Component {

  render() {
    return (
      <div className="timeline">
        <div className="timeline__block">
          <div className="timeline__bullet"></div>
          <div className="timeline__header">
            <p className="timeline__timeframe">July 2015 - Present</p>
            <h3>Awesome Studio</h3>
            <h5>Lead Designer</h5>
          </div>
          <div className="timeline__desc">
            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
