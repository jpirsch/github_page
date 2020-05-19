
import React from "react";
import * as THREE from 'three';
import {extend} from "react-three-fiber";

class MyShader extends React.Component {
//  constructor(props) {
//    console.log("before myshader constructor props : "+props);
//    super();
//    console.log("after myshader constructor props : "+props);
//  }
  render() {
    //for ( const k in this.props )
    //  console.log( "Key : " + k + ", value : " + this.props[k] );
    //console.log( "frag : " + this.props.fragment );
    return (
      <shader attach="material" side={THREE.DoubleSide}
      fragmentShader={this.props["fragment"]} />
    );
  }
};
export default MyShader;
export class Shader extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        effectFactor: { type: 'f', value: 1.2 },
        dispFactor: { type: 'f', value: 0 },
        texture: { type: 't', value: undefined },
        texture2: { type: 't', value: undefined },
        disp: { type: 't', value: undefined }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`
    });
  }

  get texture() {
    return this.uniforms.texture.value
  }
  set texture(v) {
    this.uniforms.texture.value = v
  }
  get texture2() {
    return this.uniforms.texture2.value
  }
  set texture2(v) {
    this.uniforms.texture2.value = v
  }
  get disp() {
    return this.uniforms.disp.value
  }
  set disp(v) {
    this.uniforms.disp.value = v
  }
  get dispFactor() {
    return this.uniforms.dispFactor.value
  }
  set dispFactor(v) {
    this.uniforms.dispFactor.value = v
  }
}

// register element in react-spring (a.fade)
//apply({ Fade })
// register element in r3f (<fade />)
extend({Shader});