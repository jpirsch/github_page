
import React, { useRef } from "react";
import { extend, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FlyControls } from "three/examples/jsm/controls/FlyControls";

extend({ OrbitControls });

const OrbitCam = props => {
  const ref = useRef();
  const {
    camera,
    gl: { domElement }
  } = useThree();
  useFrame(() => ref.current && ref.current.update());
  return <orbitControls ref={ref} args={[camera, domElement]} {...props} />;
};

extend({ FlyControls });

const FlyCam = props => {
  const ref = useRef();
  const {
    camera,
    gl: { domElement }
  } = useThree();
  useFrame(() => ref.current && ref.current.update());
  return <flyControls ref={ref} args={[camera, domElement]} {...props} />;
};

export default OrbitCam;
export {FlyCam};
