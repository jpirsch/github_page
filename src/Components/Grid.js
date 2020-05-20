
import React from "react";

class Row extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.children} 
      </div>
    );
  }
}

export default Row;

export class RowHalf extends React.Component {
  render() {
    return (
      <div className="row half-bottom">
        {this.props.children} 
      </div>
    );
  }
}

export class Column6 extends React.Component {
  render() {
    return (
      <div className="column large-6 tab-full">
        {this.props.children} 
      </div>
    );
  }
}

export class ColumnFull extends React.Component {
  render() {
    return (
      <div className="column large-full tab-full">
        {this.props.children} 
      </div>
    );
  }
}
