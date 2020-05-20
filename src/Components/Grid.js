

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

//const = (Comp1, Comp2) => {
export class RowHalf extends React.Component {
  render() {
    return (
      <div className="row half-bottom">
        {this.props.children} 
      </div>
    );
  }
}

export const Column6 = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <div className="column large-6 tab-full">
          <WrappedComponent />
        </div>
      );
    }
  }
  return HOC;
};

export const ColumnFull = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <div className="column large-full tab-full">
          <WrappedComponent />
        </div>
      );
    }
  }
  return HOC;
};

export const Merge = (Comp1, Comp2) => {
  class HOC extends React.Component {
    render() {
      return (
        <div>
          <Comp1 />
          <Comp2 />
        </div>
      );
    }
  }
  return HOC;
};

export const Page = (Comp1, Comp2) => {
  class HOC extends React.Component {
    render() {
      return (
        <div>
          <Comp1 />
          <Comp2 />
        </div>
      );
    }
  }
  return HOC;
};

