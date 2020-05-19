
//import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

//import React from "react";
//import {Column6, RowHalf} from "./GridHOC.js"
import Row, {ColumnFull} from "./GridHOC.js"

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  const size = (props.size) ? props.size : 1;
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[size, size, size]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function ThreeCanvas() {
  return (
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-12., 0, 0]} />
          <Box position={[12., 0, 0]} size={2} />
        </Canvas>
  );
}

class ThreeTest extends React.Component {
  render() {
    return (
      <ThreeCanvas/>
    );
  }
}
    //const Col = ColumnFull(ThreeCanvas); 
    //const Row1 = Row(Col);
        //<ThreeCanvas size="10"/>

export default ThreeTest;


/*ReactDOM.render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>,
  document.getElementById('root')
)*/
