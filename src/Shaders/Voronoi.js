
const Voronoi = `

varying vec2 vUv;
uniform float time;
uniform sampler2D texture;
uniform samplerCube cubeMap;

#define I_MAX	20 // Should be at least 50 but my computer is old...
#define FAR		5.
#define E		.02 // Could also be switched to 0.002
#define SCALE	4.
#define LIGHTS
#define REFL_I	.5

float st;
mat3	rotX( float a ) {
    float c = cos( a );
    float s = sin( a );
    return mat3( 1, 0, 0, 0, c, -s, 0, s, c );
}
mat3	rotY( float a ) {
    float c = cos( a );
    float s = sin( a );
    return mat3( c, 0, s, 0, 1, 0, -s, 0, c );
}
mat3	rotZ(float a) {
	float c = cos( a );
	float s = sin( a );
	return mat3( c, s, 0, -s, c, 0, 0, 0, 1.0 );
}
vec2 random2( vec2 p ) {
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

vec3	voronoi(vec2 uv)
{
    // Scaling
    uv *= SCALE;
    // Space tiling
    vec2 i_uv = floor(uv);
    uv = fract(uv);

    float mdist = 1.;
    vec2 mpt;
    for (int y = -1; y <= 1; y++)
    {
        for (int x = -1; x <= 1; x++)
        {
            vec2 neighbor = vec2(float(x), float(y));
            vec2 pt = random2(i_uv + neighbor);
            pt = .5 + .5 * sin(time + 6.28*pt);
            //pt = .5 + .5 * sin(6.28*pt);
            vec2 diff = neighbor + pt - uv;
            float dist = length(diff);
            if (dist < mdist)
            {
                mdist = dist;
                mpt = pt;
            }
        }
    }
    return vec3(mdist, mpt);
}

// Sphere uv mapping from aiekick : https://www.shadertoy.com/view/MtS3DD
vec3	voronoi_sphere_map(vec3 p)
{
    //vec2 uv = vec2( atan(n.x, n.z), acos(n.y) );
    vec2 uv;
    uv.x = 0.5 + atan(p.z, p.x) / (2.*3.14159);
    uv.y = 0.5 - asin(p.y) / 3.14159;
    return voronoi(uv);
}

float	map(vec3 p)
{
    p *= rotX(.127*time) * rotY(.127*time);
    //p *= rotX(.127) * rotY(.127);
    vec3 ret = voronoi_sphere_map(normalize(p));
//    return length(p) - .5;
	return length(p) - .5 - .05*ret.x;
//    return length(p) - .5-.05*(1.-ret.x);
//    return length(p) - .5-.05*ret.x*ret.y*ret.z;
}

float	march(vec3 pos, vec3 dir)
{
    float d = 0.;
    float prec = E;
    for (int i = -1; i < I_MAX; i++)
    {
        prec = map(pos + dir * d);
        d += prec;
        if (d < E || d > FAR)
            break;
    }
    return d;
}

vec3	camera(vec2 uv) {
    float fov = 1.;
    vec3 forw = vec3( 0.0, 0.0, 1.0 );
    vec3 right = vec3( 1.0, 0.0, 0.0) ;
    vec3 up = vec3( 0.0, 1.0, 0.0) ;
    return ( normalize((uv.x-1.)*right + (uv.y-.5)*up + fov*forw) );
}

void main() {
    st = sin(.5*time);
    vec2 uv = vUv;
//    uv.x *= iResolution.x / iResolution.y;
    vec3 pos = vec3(.2, .0, -1.25+.08*st)*rotX(.3*time);
    vec3 dir = camera(uv)*rotX(-.1+.3*time);
    vec3 col = vec3(.942, .732, .523);
    
	float d = march(pos, dir);
    if (d < FAR)
    {
		vec3 p = pos + dir * d;
        col += voronoi_sphere_map(normalize(p*rotX(.127*time) * rotY(.127*time)));
        //col += voronoi_sphere_map(normalize(p*rotX(.127) * rotY(.127)));
#ifdef LIGHTS
        vec2 e = vec2(-1., 1.)*0.005;
        vec3 n = normalize(e.yxx*map(p + e.yxx) + e.xxy*map(p + e.xxy) + e.xyx*map(p + e.xyx) + e.yyy*map(p + e.yyy) );
		vec3 ev = normalize( p - pos );
		vec3 ref_ev = reflect( ev, n );
//        vec3 refl_cube = texture(iChannel1, ref_ev).rgb * REFL_I;
//        col *= clamp(refl_cube, .15, 1.);
        vec3 light_pos = pos + vec3(st, 0., -.1);

        vec3 vl = normalize( light_pos - p );
		float diffuse  = max( 0.001, dot( vl, n ) );
		float specular = pow( max( 0.001, dot( vl, ref_ev ) ), 1. );
        float	brdf = (diffuse + specular) * 1.00 + .00;
        col *=  brdf;
#endif
    }
    else
        col = textureCube(cubeMap, dir.xyz).rgb;

    vec3 gamma = pow( col, vec3(2.25) ); // + texture2D(texture, dir.xy).rgb;
    gl_FragColor = vec4( gamma, 1. );
}

`;

/*let uniforms = {texture:{type:'t', value: textures[1]},
                value:{type:'f', value: 1},
                time:{type:'f', value: 0}};
*/
/*const VoronoiUni = [[name:'texture', type:'t', url:img]
                    [name:'value', type:'f']]
export VoronoiUni;*/
export default Voronoi;
