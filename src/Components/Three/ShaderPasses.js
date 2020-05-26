
import React, { useState, useRef, useEffect } from "react";
import { extend, Canvas, useFrame, useThree, useLoader } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { TextureLoader, CubeTextureLoader, Color } from 'three'
import cubeMapUrl from "../../Images/StandardCubeMap.png"
import px from "../../Images/px.png"
import py from "../../Images/py.png"
import pz from "../../Images/pz.png"
import nx from "../../Images/nx.png"
import ny from "../../Images/ny.png"
import nz from "../../Images/nz.png"

extend({ EffectComposer, RenderPass, GlitchPass, ShaderPass })

//      <glitchPass attachArray="passes" renderToScreen />
const colorShader = {
    uniforms: {
      tDiffuse: { value: null },
      cubeMap: { value: null },
      color:    { value: new Color(0x88CCFF) },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform sampler2D tDiffuse;
      uniform samplerCube cubeMap;
      varying vec2 vUv;

vec3	camera(vec2 uv) {
    float fov = 1.;
    vec3 forw = vec3( 0.0, 0.0, 1.0 );
    vec3 right = vec3( 1.0, 0.0, 0.0) ;
    vec3 up = vec3( 0.0, 1.0, 0.0) ;
    return ( normalize((uv.x-1.)*right + (uv.y-.5)*up + fov*forw) );
}
      void main() {
        vec3 dir = camera(vUv);
        vec4 previousPassColor = texture2D(tDiffuse, vUv);
//        vec4 colCubeMap = textureCube(cubeMap, dir);
        gl_FragColor = vec4(
            previousPassColor.rgb * color,
            previousPassColor.a);// + vec4(colCubeMap.rgb,1.);
      }
    `,
  };

export function loadCubeMap() {
/*
  var loader = new CubeTextureLoader();
  loader.setPath( '../../Images/' );

  var textureCube = loader.load( 
    ['px.png', 'nx.png',
    'py.png', 'ny.png',
    'pz.png', 'nz.png'] );

  return textureCube;
*/
/*return useLoader(CubeTextureLoader(), 
    ['px.png', 'nx.png',
    'py.png', 'ny.png',
    'pz.png', 'nz.png'] );
*/}

function Effects() {
  const { gl, scene, camera, size } = useThree()
  const composer = useRef()
//  const [cubeMap, loadCubeMap] = useState();
//  useEffect( () => composer.current.passes[1].material.uniforms.loadCubeMap, [cubeMap]);


//  const cubeMap = useLoader(CubeTextureLoader, [cubeMapUrl]);
// const cubeMaps = useLoader(TextureLoader, [px, nx, py, ny, pz, nz] );
//  const cubeMaps = useLoader(CubeTextureLoader, [px, nx, py, ny, pz, nz]);//, "../../Images/" );
//  const cubeMap = loadCubeMap();

//  useEffect(() => void composer.current.setSize(size.width, size.height), [size])
  useFrame(() => composer.current.render(), 1)
//  useEffect(() => composer.current.passes[1].material.uniforms.cubeMap = cubeMap, console.log(cubeMap), [] );
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <shaderPass attachArray="passes" args={[colorShader]} renderToScreen />
    </effectComposer>
  );
}

export default Effects;

