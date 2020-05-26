
import React, {Suspense} from "react";
import "./Three.css";
import {Canvas, Dom} from "react-three-fiber";
import OrbitCam, {FlyCam, FPCam} from "./Controls";


class ThreeC extends React.Component {
  render() {
    return (
      <Canvas camera={{zoom:1., position:[0,0,3]}} >
        <Suspense fallback={
          <Dom center className="loading" children="loading..." />} > 
          <OrbitCam />
          {this.props.children}
        </Suspense>
      </Canvas>
    );
  }
}

export default ThreeC;
