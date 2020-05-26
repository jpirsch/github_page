

varying vec2 vUv;
uniform float time;


void main() {
    vec2 uv = vUv;
//    uv.x *= iResolution.x / iResolution.y;

    // Time varying pixel color
//    vec3 col = 0.5 + 0.5*cos(time+uv.xyx+vec3(0,2,4));
    vec3 bias = vec3(0,2,4);
    vec3 osc = cos( -time + length(uv.xyx -.5) * 35. + bias);
    vec3 col = 0.5 + 0.5 * osc;

//    vec3 gamma = pow( col, vec3(2.25) );
    vec3 gamma = pow( col, vec3(1.) );
    gl_FragColor = vec4( gamma, 1. );
}
