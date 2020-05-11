
import React from "react";

const Row = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <div className="row">
          <WrappedComponent />
        </div>
      );
    }
  }

  return HOC;
};

export default Row;

export const RowHalf = (Comp1, Comp2) => {
  class HOC extends React.Component {
    render() {
      return (
        <div className="row half-bottom">
          <Comp1/>
          <Comp2/>
        </div>
      );
    }
  }

  return HOC;
};

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

