
import React, { useRef, UseMemo } from "react";
import { useLoader, useFrame, useUpdate } from "react-three-fiber";
import { DoubleSide, TextureLoader, CubeTextureLoader } from "three";
import MyShader from "./Shader.js";
import px from "../../Images/px.png"
import py from "../../Images/py.png"
import pz from "../../Images/pz.png"
import nx from "../../Images/nx.png"
import ny from "../../Images/ny.png"
import nz from "../../Images/nz.png"

const ShaderQuad = (props) => {
  const textures = useLoader(TextureLoader, [props.url]);
//  const cubeMaps = useLoader(TextureLoader, [props.url]);
//  const cubeMaps = useLoader(CubeTextureLoader, [px, nx, py, ny, pz, nz]);
  const time = useRef(0);
  let uniforms = {texture:{type:'t', value: textures[0]},
//                  cubeMap:{type:'t', value: cubeMaps[0]},
                  value:{type:'f', value: 1},
                  time:{type:'f', value: 0}};
  // todo for dynamic uniforms received from props
//  for( const i in props.uniforms )
//    console.log(props.uniforms[i]);
//  uniforms['texture1'] = {type:'t', value:textures[0]};

    const mesh = useUpdate(({ geometry }) => {
    });
    // Raf loop
    let time_uni = 0.;
    useFrame((state,delta) => {
      time.current.uniforms.time.value += delta;
    });

  return (
    <mesh ref={mesh} position={props.position} rotation={props.rotation} >
      <planeBufferGeometry attach="geometry" args={[props.size, props.size, 5, 5]} />
      <shader ref={time} attach="material" side={DoubleSide}
              fragmentShader={props.frag}
              uniforms={uniforms} />
    </mesh>
  );
};

export default ShaderQuad;

