
import React, {Suspense} from "react";
import {Dom} from "react-three-fiber";
import Lights from './Lights';
import Terrain from "./Terrain";
import img from "../Images/img1.jpg"

const Scene = () => (
  <>
    <Lights />
        <Suspense fallback={
          <Dom center className="loading" children="loading..." />} > 
    <Terrain url={img}/>
          </Suspense>
  </>
);

export default Scene;

