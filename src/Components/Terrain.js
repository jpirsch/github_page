
import React, {useRef} from "react";
import { useLoader, useFrame, useUpdate } from "react-three-fiber";
import {TextureLoader} from "three"
//import { noise } from "./perlin";
import Shader from "./Shader.js";
//import 

const Terrain = (props) => {
//function Terrain(url, ...props) {
  const group = useRef();
//  const [texture] = useLoader(TextureLoader, ["../Images/img1.jpg"]);
//const texture = UseMemo(() => new Three.TextureLoader().load(url), [url]);
/*    const mesh = useUpdate(({ geometry }) => {
  //   noise.seed(Math.random());
      let pos = geometry.getAttribute("position");
      let pa = pos.array;
      const hVerts = geometry.parameters.heightSegments + 1;
      const wVerts = geometry.parameters.widthSegments + 1;
      for (let j = 0; j < hVerts; j++) {
        for (let i = 0; i < wVerts; i++) {
          const ex = 1.1;
          pa[3 * (j * wVerts + i) + 2] = 1;
        }
      }
      pos.needsUpdate = true;
    });*/
    // Raf loop
    useFrame(() => {
 //     mesh.current.rotation.z += 0.001;
    });

  return (
    <group ref={group}>
    <mesh position={[0,0,0]}rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[25, 25, 75, 75]} />
      <shader attach="material" val={1} />
    </mesh>
    </group>
  );
};

//      <shader attach="material" texture={texture1} val={1} />
/*      <meshPhongMaterial
        attach="material"
        
        specular={"hotpink"}
        shininess={3}
        flatShading
      />*/

export default Terrain;

