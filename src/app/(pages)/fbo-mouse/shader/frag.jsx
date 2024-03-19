export const frag = /* glsl */ `
varying vec2 vUv;
uniform vec2 uPointer;
uniform float uAspect;
uniform float uTime;
uniform sampler2D uTexture;
uniform float uSpeed;

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
	vec2 ip = floor(p);
	vec2 u = fract(p);
	u = u*u*(3.0-2.0*u);
	
	float res = mix(
		mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
		mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
	return res*res;
}



void main() {
  vec2 uv = vUv;

  vec2 mouse = uPointer * .5 + .5;

  uv.x *= uAspect;
  mouse.x *= uAspect;


  float dist = distance(mouse, uv) ;
  float circle = smoothstep(.1, .0, dist);

  float nSpeed = clamp(uSpeed * 10., 0., 300.) / 300.;

  float r = mix(0., 1., nSpeed * .8) * (nSpeed + .2) * 1.2;
  float g = mix(0.15, 1., nSpeed * .5) ;
  float b = mix(0.2, 1., nSpeed * .2);

vec3 color = vec3(r, g, b);

  vec3 colorCircle = circle * color;

  vec4 texture = texture2D(uTexture,vUv);


vec4 final = vec4(colorCircle, 1.) + texture * .9;

              gl_FragColor =  final;

}
`;
