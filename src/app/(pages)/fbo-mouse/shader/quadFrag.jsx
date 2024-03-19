export const quadFrag = /* glsl */ `
varying vec2 vUv;
uniform vec2 uPointer;
uniform float uAspect;
uniform float uTime;
uniform sampler2D uTexture;


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

  uv.x *= uAspect;

  vec2 newUv = vUv;

  
  vec4 texture = texture2D(uTexture, vec2(newUv.x + (noise(vec2(uTime * .9)) - .5) * .003 , newUv.y - .003));

  
  vec4 final = texture;
  // final.a = (final.r+final.g+final.b)/3.0 * 1.1 - 0.1;
  gl_FragColor = final;

}
`;
