

/* By Palliaci
 * License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
 */

varying vec2 vUv;
uniform float time;
uniform sampler2D texture;

#define I_MAX	50
#define FAR		5.
#define E		.01
#define LIGHTS
#define REFL_I	.5
//#define MARCH		// Disable if you wanna see only the noise

#define SCALE 8.

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

vec2 hash( vec2 p ) // replace this by something better
{
	p = vec2( dot(p,vec2(127.1,311.7)),
			  dot(p,vec2(269.5,183.3)) );
	return -1.0 + 2.0*fract(sin(p)*43758.5453123);
}

float noise( in vec2 p )
{
    const float K1 = 0.366025404; // (sqrt(3)-1)/2;
    const float K2 = 0.211324865; // (3-sqrt(3))/6;

	vec2 i = floor( p + (p.x+p.y)*K1 );
	
    vec2 a = p - i + (i.x+i.y)*K2;
    vec2 o = step(a.yx,a.xy);    
    vec2 b = a - o + K2;
	vec2 c = a - 1.0 + 2.0*K2;

    vec3 h = max( 0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );

	vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
    return dot( n, vec3(70.0) );
}
float fbm(vec2 uv)
{
    float ret;
    ret = noise(uv);
    uv *= 2.;
    ret += .5 * noise(uv);
    uv *= 2.;
    ret += .125 * noise(uv);
    uv *= 2.;
    ret += .0625 * noise(uv);
    return ret;
}
float random (vec2 st) { 
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}
float noise2(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners porcentages
    return mix(a, b, u.x) + 
            (c - a)* u.y * (1.0 - u.x) + 
            (d - b) * u.x * u.y;
}


float fbm2(vec2 uv)
{
    float ret;
    vec3 tmp = voronoi(uv);

    ret = noise2(uv);
    uv *= 2.;
    ret += .5 * noise2(uv);
    uv *= 2.;
    ret += .125 * noise2(uv);
    uv *= 2.;
    ret += .0625 * noise2(uv);
    return ret;// + tmp.z;
}
mat2	rot2X( float a ) {
    float c = cos( a );
    float s = sin( a );
    return mat2( c, -s, s, c );
}
mat2	rot2Y( float a ) {
    float c = cos( a );
    float s = sin( a );
    return mat2( c, s, -s, c );
}
vec3 get_col(vec2 uv)
{
    uv -= .5; // center uv

    // Transform uv before hashing it
    vec2 scale	= vec2( 1., 1.5 ) * 3.;
    mat2 rot	= rot2X( 0. ) * rot2Y( 0. );
    vec2 scroll	= vec2( time, time ) * .05;
    vec2 uv_trans = uv * scale * rot + scroll;
    
    // Hashed uv
//	float val = random( uv_trans );
//	float val = voronoi( uv ).x;
//	float val = noise( uv_trans );
//	float val = noise2( uv_trans );
//    float val = fbm( uv_trans );
    float val = fbm2( uv_trans );
    
    // number of periods => influence nb of lines
//    float cycles = 32.;
    float cycles = 3.5 * sin( time );
   
    // Gray mode
//    vec3 col = vec3( sin( val * cycles ) ); 
//  // Cyclic color mode
    float line_1 = abs( sin( val * cycles - 1. ) );
    float line_2 = abs( cos( val * cycles + 1. ) );
    float line_3 = abs( sin( val * cycles * 1. ) );
    vec3 lines = vec3( line_1, line_2, line_3 );
    
    vec3 col = lines.xyz; // use switzle to switch colors
//    
	return col;
}

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

// Sphere uv mapping from aiekick : https://www.shadertoy.com/view/MtS3DD
vec2	sphere_map(vec3 p)
{
    vec2 uv;
    uv.x = 0.5 + atan(p.z, p.x) / (2.*3.14159);
    uv.y = 0.5 - asin(p.y) / 3.14159;
	return uv;
}
float sdRoundBox( vec3 p, vec3 b, float r )
{
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0) - r;
}

float decalit = .5;
float	map(vec3 p) {
    //float d = dot(p, vec3(0,1,0)) -.6;
    //vec2 sp_uv = sphere_map(normalize(p));
	float d = sdRoundBox( p, vec3( .4, .01, .4 ), .05 );
    d += -.05*length( get_col( p.xz + decalit ) );
	return d;
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
        if (d < 0.) {
        	d = E;
            break;
        }
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

void main()
{
	vec2 uv = vUv;
#ifdef MARCH
//    uv.x *= iResolution.x / iResolution.y;

//    vec2 mickey = ((iMouse.xy) / iResolution.xy )*3.14+vec2(.0,.57);
//    mickey.x *= iResolution.x / iResolution.y;

//    vec3 pos = vec3(.2, .0, -.5*(mickey.x+mickey.y))*rotX(mickey.y+.15)*rotY(mickey.x-.12);
//    vec3 dir = camera( uv ) * rotX( mickey.y+.15)*rotY(mickey.x-.12);
    vec3 pos = vec3( .2, .0, -.5 ) * rotX( 0. ) * rotY( 0. );
    vec3 dir = camera( uv ) * rotX( 0. + 0. ) * rotY( 0. - 0. );
    vec3 col = vec3( 0. );
    
	float d = march( pos, dir );
    if( d < FAR )
    {
		vec3 p = pos + dir * d;
//        vec2 sp_uv = sphere_map(normalize(p));
        col += get_col(p.xz); //texture(iChannel0, fract(p.xz+decalit)).xyz; // ou sp_uv
# ifdef LIGHTS
        vec2 e = vec2(-1., 1.)*0.005;
        vec3 n = normalize(e.yxx*map(p + e.yxx) + e.xxy*map(p + e.xxy) + e.xyx*map(p + e.xyx) + e.yyy*map(p + e.yyy) );
		vec3 ev = normalize( p - pos );
		vec3 ref_ev = reflect( ev, n );
//        vec3 refl_cube = texture(texture, ref_ev).rgb * REFL_I;
       // col *= clamp(refl_cube, .15, 1.);
        vec3 light_pos = pos + vec3( sin( time ), 0., -.1 );

        vec3 vl = normalize( light_pos - p );
		float diffuse  = max( 0.001, dot( vl, n ) );
		float specular = pow( max( 0.001, dot( vl, ref_ev ) ), 1. );
        float	brdf = (diffuse + specular) * .5 + .5;
        col *= brdf;
# endif
    }
    else
        col = texture(texture, dir).rgb * vec3(.2, .3, .5);

    col = pow( col, vec3(.75) );
#else
    vec3 col = get_col( uv );
#endif
	fragColor = vec4(col, 1.0);
}

