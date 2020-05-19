
import React from "react";

class Timeline extends React.Component {
  render() {
    return (
      <div className="timeline">
        <div className="timeline__block">
          <div className="timeline__bullet"></div>
          <div className="timeline__header">
            <p className="timeline__timeframe">{this.props.date}</p>
            <h3>{this.props.company}</h3>
            <h5>{this.props.role}</h5>
          </div>
          <div className="timeline__desc">
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;

