
import React, { useRef, Suspense } from "react";
import { Dom, useLoader, useFrame } from "react-three-fiber";
import Lights from './Lights';
import Terrain from "./Terrain";
import img from "../../Images/img1.jpg"
import { TextureLoader } from "three";

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

const Scene = (props) => (
  <>
    <Lights />
        <Suspense fallback={
          <Dom center className="loading" children="loading..." />} > 
    {props.tabs.map((t, i) =>
          <>
          <Terrain position={t.position} rotation={t.rotation} size={props.size}
          frag={t.frag} test={test(t)} url={img} key={i} />
          <axesHelper position={t.position} rotation={t.rotation} key={i+10} />
          </>
        )}
          <gridHelper/>
          </Suspense>
  </>
);

export default Scene;

