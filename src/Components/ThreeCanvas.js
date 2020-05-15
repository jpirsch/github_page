
import React, {Suspense} from "react";
import "./Three.css";
import {Canvas, Dom} from "react-three-fiber";
//import OrbitCam from "./Controls";
import FlyCam from "./Controls";
import Scene from "./Scene";

class ThreeC extends React.Component {
  render() {
    const tabs = [
      { title: "ichi" },
      { title: "ni" },
      { title: "san" },
      { title: "Log in" },
      { title: "Github" }
    ];
//    return (<h1> HOHO </h1>);
    return (
      <Canvas camera={{zoom:1., position:[0,5,-10]}} >
        <Suspense fallback={
          <Dom center className="loading" children="loading..." />} > 
          <FlyCam/>
          <Scene data={tabs} />
        </Suspense>
      </Canvas>
    );
  }
}


export const ThreeCanvas = (WrappedThree) => {
  class HOC extends React.Component {
    render() {
      return (
        <Canvas>
        </Canvas>
      );
    }
  }
  return HOC;
}

export default ThreeC;
