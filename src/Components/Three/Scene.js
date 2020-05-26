
import React, { useRef, Suspense } from "react";
import { Dom, useLoader, useFrame } from "react-three-fiber";
import Lights from './Lights';
import ShaderQuad from "./ShaderQuad";
import img from "../../Images/img1.jpg"
import {Vector3, Quaternion} from "three";
import Voronoi from "../../Shaders/Voronoi.js";
import Noises from "../../Shaders/Noises.js";
import Because from "../../Shaders/Because.js";

const test = (t) => {
  //console.log("test :"+t);
  //for ( const k in t ) {
  //  if ( k!== "frag")
  //    console.log( "Key : " + k + ", value : " + t[k] );
  //  if( k === "position" )
  //    console.log( t.position )
  //  if( k === "rotation" )
  //    console.log( t.rotation )
  //}
};

const data = () => {
    const pi4 = .785398;
    var y_axis = new Vector3( 0., 1., 0. );
    var quat = new Quaternion();
    let tabs = Array();
    let frags = [ Voronoi, Because, Voronoi, Voronoi, Voronoi,
                  Voronoi, Noises, Voronoi ];
//    let uniforms = [VoronoiUni, BecauseUni, VoronoiUni, VoronoiUni,
//                    VoronoiUni, NoisesUni, VoronoiUni ]
    for( let i = 0 ; i < 8 ; i++ ) {
      console.log( "angle "+i+" : "+pi4*i);
      quat.setFromAxisAngle( y_axis, pi4*i );
      let pos = new Vector3(1.25,0,0).applyQuaternion(quat);
      let dir = new Vector3(0,0,1).applyQuaternion(quat);
      tabs.push( { position: pos, rotation:[0,dir.z,0], frag: frags[i],
                   uniform: '' } );//uniforms[i] } );
    }
    return tabs;
}

const Scene = (props) => (
  <>
    <Lights />
        <Suspense fallback={
          <Dom center className="loading" children="loading..." />} > 
    {data().map((t, i) =>
          <>
          <ShaderQuad position={t.position} rotation={t.rotation} size={1}
          frag={t.frag} test={test(t)} url={img} key={i} />
          <axesHelper position={t.position} rotation={t.rotation} key={i+10} />
          </>
        )}
          <gridHelper/>
          </Suspense>
  </>
);

export default Scene;

