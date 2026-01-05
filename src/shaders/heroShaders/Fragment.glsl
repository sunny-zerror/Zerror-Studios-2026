precision mediump float;

varying vec2 vUv;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

/* Circle */
uniform float inRadius;
uniform float outRadius;
uniform vec2 center;

/* Gradient */
uniform float gradLength;
uniform float gradStrength;

/* Scene */
uniform float sceneMix;

/* Time shortcut */
#define t time * 0.5

/* ----------------------------------
   Background Color
---------------------------------- */
vec3 bgColor() {
  vec2 uv = vUv * 2.0 - 1.0;

  float X = uv.x * 32.0;
  float Y = uv.y * 32.0;

  float c = sin(
    (X + mouse.x * 0.025) / (20.0 + cos((t + 100.0)) * 10.0) +
    (Y + mouse.y * 0.035) / (25.0 + sin(t * 0.5) * 15.0)
  );

  c += cos((X + mouse.x * 0.015) * (0.075 + cos(t) * 0.025) + t)
       * abs(sin(Y * (0.05 + sin(t + 75.0) * 0.025)));

  c = smoothstep(-1.0, 1.0, c);
  c = clamp(c, 0.0, 1.0);

  float b = c - 0.1;

  float g = b * (
    pow(uv.x - 0.5 + cos(t + 66.0) * 0.25, 2.0) +
    pow(uv.y - 0.5 + sin(t * 0.3 + 33.0) * 0.25, 2.0)
  ) * 4.0 - 0.5;

  g = mix(0.0, b, g);
  g = smoothstep(-0.15, 1.85, g);

  return vec3(0.0, g, b);
}

/* ----------------------------------
   Sun Color
---------------------------------- */
vec3 sunColor() {
  vec2 frag = gl_FragCoord.xy;

  float d = distance(frag, center);

  float b = step(d, inRadius);

  float diff = d - inRadius;
  float donutRadius = outRadius - inRadius;

  if (diff > 0.0 && diff < donutRadius) {
    b = (donutRadius - diff) / donutRadius;
  } 
  else if (diff > -gradLength && diff < 0.0) {
    b = 1.0 - ((inRadius - d) / gradLength);
  } 
  else {
    b = 0.0;
  }

  b = smoothstep(
    0.75 - gradStrength * 0.75,
    1.5 - gradStrength * 0.5,
    b
  );

  b = mix(b, b * bgColor().z * 5.0, sceneMix);

  return vec3(0.0, 0.0, b);
}

/* ----------------------------------
   MAIN
---------------------------------- */
void main() {
  vec3 color = mix(sunColor(), bgColor(), sceneMix);
  color = smoothstep(0.0, 1.0, color);

  gl_FragColor = vec4(color, 1.0);
}
