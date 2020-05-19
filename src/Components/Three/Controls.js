
import React, { useRef } from "react";
import { extend, useFrame, useThree } from "react-three-fiber";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls";
import { FlyControls } from "three/examples/jsm/controls/FlyControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

extend({ FirstPersonControls });

const FPCam = props => {
  const ref = useRef();
  const {
    camera,
    gl: { domElement }
  } = useThree();
  console.log(ref);
  useFrame(() => ref.current && ref.current.update());
  return <firstPersonControls ref={ref} args={[camera, domElement]} {...props} />;
};

export default OrbitCam;
export {FlyCam,FPCam};
