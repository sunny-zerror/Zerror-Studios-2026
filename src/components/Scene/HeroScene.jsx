"use client";
import { fragmentShader, vertexShader } from "@/shaders/heroShaders/HeroShaderGLSL";
import { useEffect, useRef } from "react";

export default function SunBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl", { preserveDrawingBuffer: true });
    if (!gl) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexShader));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentShader));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const u = n => gl.getUniformLocation(program, n);

    const targetMouse = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };

    window.addEventListener("mousemove", e => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
    });


    let start = performance.now();
    let intro = true;

    const animate = (now) => {
      const introDuration = 2500;
      const expandDelay = 500;
      const elapsed = now - start;
      const t = elapsed * 0.0003;

      const easeOutExpo = (t) =>
        t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

      const p = Math.min(elapsed / introDuration, 1);
      const ease = easeOutExpo(p);

      const movePhase = ease;

      const moveEndTime = start + introDuration * 0.6;
      const expandStartTime = moveEndTime + expandDelay;

      let expandPhase = 0;
      if (now > expandStartTime) {
        const expandElapsed = now - expandStartTime;
        expandPhase = Math.min(expandElapsed / (introDuration * 0.3), 1);
      }

      const centerY =
        canvas.height +
        (canvas.height / 2 - canvas.height) * movePhase;

      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      const maxRadius = Math.sqrt(
        canvas.width * canvas.width +
        canvas.height * canvas.height
      );

      const baseRadius = canvas.width * 0.2;
      const radius =
        expandPhase === 0
          ? baseRadius
          : baseRadius + expandPhase * maxRadius;

      if (expandPhase >= 1) intro = false;

      gl.uniform1f(u("time"), t);
      gl.uniform2f(u("resolution"), canvas.width, canvas.height);
      gl.uniform2f(u("mouse"), mouse.x, canvas.height - mouse.y);
      gl.uniform1f(u("inRadius"), radius * 0.3);
      gl.uniform1f(u("outRadius"), radius);
      gl.uniform2f(u("center"), canvas.width / 2, centerY);
      gl.uniform1f(u("gradLength"), 2);
      gl.uniform1f(u("gradStrength"), intro ? 0.6 : 0.0);
      gl.uniform1f(u("sceneMix"), intro ? expandPhase : 1);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

