
import React, {Suspense} from "react";
import {Dom} from "react-three-fiber";
import Lights from './Lights';
import Terrain from "./Terrain";
import img from "../Images/img1.jpg"

const test = (t) => (
  console.log("test rot :"+t)
)

const Scene = (props) => (
  <>
    <Lights />
        <Suspense fallback={
          <Dom center className="loading" children="loading..." />} > 
    {props.tabs.map((t, i) =>
          <Terrain position={t.position} rotation={t.rotation} test={test(t.rotation)} url={img} />
        )}
          </Suspense>
  </>
);
/*
<Terrain position={t.position} test={test(t.position)} url={img} />*/

export default Scene;

