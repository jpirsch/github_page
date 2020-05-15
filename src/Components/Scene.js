
import React, {Suspense} from "react";
import {Dom} from "react-three-fiber";
import Lights from './Lights';
import Terrain from "./Terrain";
import img from "../Images/img1.jpg"

function test(props) {
  console.log("test pprops : "+props[0]);
  for (const [key, value] in props[0]) {
    console.log( "props key : " + key + ", value : " + value );
  }
}

const Scene = (props) => (
  <>
    <Lights data={test( props.data )} />
        <Suspense fallback={
          <Dom center className="loading" children="loading..." />} > 
        {props.data.map((t, i) =>
          <Terrain truc={t} />
        )}
          </Suspense>
  </>
);
//    <Terrain url={img}/>

export default Scene;

