
import React from "react";
import { Canvas, useResource } from "react-three-fiber";

function MyMesh(props) {
  const size = 1.5;
/*  const mesh = useRef();
  mesh.current.rotation.x = 1.57;
  mesh.current.rotation.y = 1.57;*/
  return (
      <mesh {...props}>
        <boxBufferGeometry attach="geometry" args={[size, size, size]} />
        <meshStandardMaterial attach="material" color={'orange'} />
      </mesh>
  );
}

function Ex() {
    const [ref_l1, pl1] = useResource();
    const [ref_l2, pl2] = useResource();
//    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
      <group>
        <MyMesh position={[-2, -2, 0]}/>
        <MyMesh position={[2, 2, 0]}/>
        <pointLight ref={ref_l1} >
          { pl1 && <pointLightHelper args={[pl1]} /> }
        </pointLight>
        <pointLight ref={ref_l2} position={[10, 10, 10]} />
      </group>
    );
}


class ThreeBase extends React.Component {
  render() {
    return (
      <Canvas>
      <Ex/>
      </Canvas>
    );
  }
}

export default ThreeBase;

