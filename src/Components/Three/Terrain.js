
import React, {useRef, UseMemo} from "react";
import { useLoader, useFrame, useUpdate } from "react-three-fiber";
import {DoubleSide, TextureLoader} from "three";
//import { noise } from "./perlin";
import MyShader from "./Shader.js";

const Terrain = (props) => {
//function Terrain(url, ...props) {
  const group = useRef();
  const texture1 = useLoader(TextureLoader, [props.url]);
  //const texture = UseMemo(() => new TextureLoader().load(props.url), [props.url]);
    const mesh = useUpdate(({ geometry }) => {
  //   noise.seed(Math.random());
      let pos = geometry.getAttribute("position");
      let pa = pos.array;
      const hVerts = geometry.parameters.heightSegments + 1;
      const wVerts = geometry.parameters.widthSegments + 1;
      for (let j = 0; j < hVerts; j++) {
        for (let i = 0; i < wVerts; i++) {
          const ex = 1.1;
          pa[3 * (j * wVerts + i) + 2] = Math.random()*.25;
        }
      }
      pos.needsUpdate = true;
    });
    // Raf loop
    useFrame(() => {
      mesh.current.rotation.z += 0.001;
    });

  return (
    <mesh ref={mesh} position={props.position} rotation={props.rotation}>
      <planeBufferGeometry attach="geometry" args={[props.size, props.size, 5, 5]} />
      <shader attach="material" map={texture1[0]} side={DoubleSide}
              fragmentShader={props.frag}
              uniforms={{texture:{type:'t', value: texture1[0]}}} />
    </mesh>
  );
};

//<shader attach="material" map={texture1[0]} side={DoubleSide}
//fragmentShader={props.frag} />
//      <shader attach="material" texture={texture1} val={1} />
/*      <meshPhongMaterial
        attach="material"
        
        specular={"hotpink"}
        shininess={3}
        flatShading
      />*/

export default Terrain;

