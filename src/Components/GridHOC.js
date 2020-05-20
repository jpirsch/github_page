
import React from "react";

const RowHOC = (WrappedComponent) => {
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

export default RowHOC;

export const RowHalfHOC = (Comp1, Comp2) => {
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

export const Column6HOC = (WrappedComponent) => {
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

export const ColumnFullHOC = (WrappedComponent) => {
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

