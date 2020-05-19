
import React, {useRef, UseMemo} from "react";
import { useLoader, useFrame, useUpdate } from "react-three-fiber";
import {DoubleSide, TextureLoader} from "three";
//import { noise } from "./perlin";
import MyShader from "./Shader.js";

const Terrain = (props) => {
  const group = useRef();
  const texture1 = useLoader(TextureLoader, [props.url]);
  //const texture = UseMemo(() => new TextureLoader().load(props.url), [props.url]);
  const time = useRef(0);

    const mesh = useUpdate(({ geometry }) => {
  //   noise.seed(Math.random());
      let pos = geometry.getAttribute("position");
      let pa = pos.array;
      const hVerts = geometry.parameters.heightSegments + 1;
      const wVerts = geometry.parameters.widthSegments + 1;
      for (let j = 0; j < hVerts; j++) {
        for (let i = 0; i < wVerts; i++) {
          const ex = 1.1;
          pa[3 * (j * wVerts + i) + 2] = 1;//Math.random()*.25;
        }
      }
      pos.needsUpdate = true;
    });
    // Raf loop
    let time_uni = 0.;
    useFrame(() => {
      time.current += .03;
      time_uni = time.current;
      //mesh.current.rotation.z += 0.001;
    });

  return (
    <mesh ref={mesh} position={props.position} rotation={props.rotation} >
      <planeBufferGeometry attach="geometry" args={[props.size, props.size, 5, 5]} />
      <shader attach="material" map={texture1[0]} side={DoubleSide}
              fragmentShader={props.frag}
              uniforms={{texture:{type:'t', value: texture1[0]},
                          time:{type:'f', value: time_uni}}} />
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

