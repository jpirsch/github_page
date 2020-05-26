
import React, { useRef, useState, Suspense } from "react";
import { Dom, useLoader, useFrame, useUpdate } from "react-three-fiber";
import Lights from './Lights';
import Terrain from "./Terrain";
import img from "../../Images/img1.jpg"
import {Vector3, Quaternion} from "three";
import Voronoi from "../../Shaders/Voronoi.js";
import Because from "../../Shaders/Because.js";
import Noises from "../../Shaders/Noises.js";
import Effects from "./ShaderPasses.js";
import {Sky}from "drei";


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

const circle_points = () => {
  const pi4 = Math.PI/4;
  let circ_pts = Array();
  let circ_nors = Array();
  for( let i = 0; i < 8 ; i++ ) {
    let pos = new Vector3( Math.cos(pi4*i), 0, Math.sin(pi4*i) );
    let nor = new Vector3( -Math.cos(pi4*i), 0, -Math.sin(pi4*i) );
    circ_pts.push( pos );
    circ_nors.push( nor );
  }
  return [circ_pts, circ_nors];
}

const data = () => {
    const pi4 = .785398;
    var y_axis = new Vector3( 0., 1., 0. );
    var quat = new Quaternion();
    let tabs = Array();
    let frags = [ Voronoi, Because, Voronoi, Voronoi, Voronoi,
                  Voronoi, Noises, Voronoi ];
    const ret = circle_points();
    const pts = ret[0];
    const nors = ret[1];
    for( let i = 0 ; i < 8 ; i++ ) {
      console.log( "angle "+i+" : "+pi4*i);
      quat.setFromAxisAngle( y_axis, pi4*i );
      let pos = new Vector3(1.25,0,0).applyQuaternion(quat);
      let dir = new Vector3(0,0,1).applyQuaternion(quat);
      tabs.push( { position: pts[i], rotation:[0,0,0], frag: frags[i] } );
    }
    return tabs;
}

function Box(props) {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame(() => {
    if (active) {
      mesh.current.rotation.z += .785398;
      setActive(false);
    }
  })
  const size = props.size;
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[size, size, size]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'blue'} />
      {props.children}
    </mesh>
  )
}
/*
*/

const Scene2 = (props) => (
  <>
    <Lights />
      <Suspense fallback={
        <Dom center className="loading" children="loading..." />} > 
          <Box position={[-.5,0,2.5]} size={.25} ></Box>
    {data().map((t, i) =>
          <>
            <Terrain position={t.position} rotation={t.rotation} size={props.size}
          frag={t.frag} test={test(t)} url={img} key={i} />
          
          <axesHelper position={t.position} rotation={t.rotation} key={i+10} />
          </>
    )}
        <axesHelper />
        <gridHelper/>
        <Effects />
      </Suspense>
  </>
);

export default Scene2;

