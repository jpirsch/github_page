
import React from "react";
import {useResource} from "react-three-fiber";

export default () => {
  const FakeSphere = () => (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[0.7, 30, 30]} />
      <meshBasicMaterial attach="material" color={0xddd1cf} />
    </mesh>
  );
  const [ref, pLight1] = useResource();
  const [ref2, pLight2] = useResource();

//  <FakeSphere />
  return (
    <group>
      <ambientLight ref={ref2} position={[0, 4, 0]} intensity={0.3} />
      <directionalLight intensity={0.5} position={[0, 0, 0]} color={0xffffff} />
      <pointLight ref={ref} intensity={1.9} position={[-6, 3, -6]} color={0xffcc77} >
        {pLight1 && <pointLightHelper args={[pLight1]} />}
      </pointLight>
      <pointLight ref={ref} intensity={1.9} position={[6, 3, 6]} color={0xffcc77} >
        {pLight2 && <pointLightHelper args={[pLight2]} />}
      </pointLight>
    </group>
  );
};

