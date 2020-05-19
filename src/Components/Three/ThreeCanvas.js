
import React, {Suspense} from "react";
import "./Three.css";
import {Canvas, Dom} from "react-three-fiber";
import {Vector3, Quaternion} from "three";
import OrbitCam, {FlyCam, FPCam} from "./Controls";
import Scene from "./Scene";
import Voronoi from "../../Shaders/Voronoi.js";


class ThreeC extends React.Component {
  render() {
    const pi  = 3.141592;
    const pi2 = 1.570796;
    const pi3 = 1.047197;
    const pi4 = .785398;
    const spi4 = .707106;
    const pi6 = .523598;
    var y_axis = new Vector3( 0., 1., 0. );
    var quat = new Quaternion();
    let tabs = Array();
    for( let i = 0 ; i < 8 ; i++ ) {
      //console.log( "angle "+i+" : "+pi4*i);
      quat.setFromAxisAngle( y_axis, pi4*i );
      let pos = new Vector3(1.25,0,0).applyQuaternion(quat);
      let dir = new Vector3(0,0,1).applyQuaternion(quat);
      tabs.push( { position: pos, rotation:[0,dir.z,0], frag: Voronoi } );
    }
      /*const tabs = [
      { position: [     1,  0,     0 ], rotation: [ 0,   pi2, 0 ], frag: Voronoi },
      { position: [     0,  0,     1 ], rotation: [ 0,     0, 0 ], frag: Voronoi },
      { position: [  spi4,  0,  spi4 ], rotation: [ 0,   pi4, 0 ], frag: Voronoi },
      { position: [ -spi4,  0,  spi4 ], rotation: [ 0, 3*pi4, 0 ], frag: Voronoi },
      ];*/
    return (
      <Canvas camera={{zoom:1., position:[0,0,3]}} >
        <Suspense fallback={
          <Dom center className="loading" children="loading..." />} > 
          <OrbitCam />
          <Scene tabs={tabs} size={1.} />
        </Suspense>
      </Canvas>
    );
  }
}

export default ThreeC;
