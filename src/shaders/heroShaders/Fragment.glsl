precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

// Circle
uniform float inRadius;
uniform float outRadius;
uniform vec2 center;

// Gradient
uniform float gradLength;
uniform float gradStrength;

// Scene
uniform float sceneMix;

// Constants
#define t time/2.
#define X uv.x*32.
#define Y uv.y*32.

/**
 * Background color
 */
vec3 bgColor() {
  vec2 uv = (gl_FragCoord.xy - resolution.xy) / resolution.xy;

  // Base color
  float c = sin( (X + mouse.x * 0.025) / ( 20. + cos( (t + 100.) * 1. ) * 10. ) + (Y + mouse.y * 0.035) / ( 25. + sin( t * 0.5 ) * 15. ) ) * sin( (((X + mouse.x * 0.015) * cos( t ) + (Y + mouse.y * 0.025) * sin( t ) * 1.5) * (.025 + sin( t ) * .05)) );

  c = c + cos( (X + mouse.x * 0.015) * (.075 + (cos( t ) * 0.025)) + t ) * (abs(sin( Y * (.05 + (sin( t + 75. ) * 0.025)) )));

  c = smoothstep(-1.0, 1.0, c);
  c = clamp(c, 0.0, 1.0);

  // Blue
  float b = c - .1;

  // Green
  float g = b * (( pow((gl_FragCoord.x / resolution.x - 0.5 + cos( t + 66. ) * .25) , 2.) + pow((gl_FragCoord.y / resolution.y - 0.5 + sin( t * .3 + 33. ) * .25) , 2.) )) * 4.0 - .5;

  g = mix(0., b, g);
  g = smoothstep(-0.15, 1.85, g);

  return vec3(0., g, b);
}

/**
 * Sun color
 */
vec3 sunColor() {
  // Pixel position
  float rx = gl_FragCoord.x;
  float ry = resolution.y - gl_FragCoord.y;

  // Center position
  float cx = center.x;
  float cy = center.y;

  // Distance
  float dx = abs(cx - rx);
  float dy = abs(cy - ry);
  float d = sqrt(dx * dx + dy * dy);

  // Blue
  float b = step(d, inRadius);

  float diff = d - inRadius;
  float donutRadius = outRadius - inRadius;

  if (diff > 0. && diff < donutRadius) {
    // If inside the donut, fade out the blue
    b = (donutRadius - diff) / donutRadius;
  } else if (diff > (gradLength * -1.) && diff < 0.) {
    // If inside the inner radius, fade in the blue with a gradient
    b = 1. - ((inRadius - d) / gradLength);
  } else {
    // If outside the outer radius, no blue
    b = 0.;
  }

  // Smoothen the gradient
  b = smoothstep(0.75 - gradStrength * 0.75, 1.5 - gradStrength * .5, b);

  // Blend the two colors for a better transition
  b = mix(b, b * bgColor().z * 5., sceneMix);

  return vec3(0., 0., b);
}

/**
 * Main
 */
void main( void ) {
  vec3 color = smoothstep(0., 1., mix(sunColor(), bgColor(), sceneMix));

  gl_FragColor = vec4( color, 1.0 );
}