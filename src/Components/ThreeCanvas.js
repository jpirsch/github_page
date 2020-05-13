
import React, {Suspense} from "react";
import "./Three.css";
import {Canvas, Dom} from "react-three-fiber";
//import OrbitCam from "./Controls";
import FlyCam from "./Controls";
import Scene from "./Scene";


class ThreeC extends React.Component {
  render() {
    const pi  = 3.141592;
    const pi2 = 1.570796;
    const pi3 = 1.047197;
    const pi4 = .785398;
    const pi6 = .523598;
    const tabs = [
      { position: [ 0, 0, 0 ], rotation: [ 0,     0, 0 ] },
      { position: [ 0, 1, 0 ], rotation: [ 0,   pi4, 0 ] },
      { position: [ 0, 2, 0 ], rotation: [ 0, 2*pi4, 0 ] },
      { position: [ 0, 3, 0 ], rotation: [ 0, 3*pi4, 0 ] },
      { position: [ 0, 4, 0 ], rotation: [ 0,    pi, 0 ] }
    ];
//    return (<h1> HOHO </h1>);
    return (
      <Canvas camera={{zoom:1., position:[0,6,-25]}} >
        <Suspense fallback={
          <Dom center className="loading" children="loading..." />} > 
          <FlyCam/>
          <Scene tabs={tabs}/>
        </Suspense>
      </Canvas>
    );
  }
}

export default ThreeC;
