import { useThree, useFrame } from "@react-three/fiber";
import React, { useRef, useMemo } from "react";
// import Vertex from "@/shaders/heroShaders/Vertex.glsl";
// import Fragment from "@/shaders/heroShaders/Fragment.glsl";
import {Vertex,Fragment} from '@/shaders/heroShaders/HeroShaderGLSL.jsx'
import * as THREE from "three";

const HeroScene = () => {
  const { viewport, size, pointer } = useThree();
  const meshRef = useRef();

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      resolution: { value: new THREE.Vector2(size.width, size.height) },
      mouse: { value: new THREE.Vector2(0, 0) },
      inRadius: { value: 0.0 },
      outRadius: { value: 100 },
      center: { value: new THREE.Vector2(size.width / 2, size.height / 2) },
      gradLength: { value: 400 },
      gradStrength: { value: 3.5 },
      sceneMix: { value: 0.4 },
    }),
    [size]
  );

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.time.value = state.clock.elapsedTime;
      meshRef.current.material.uniforms.mouse.value.set(
        (pointer.x * size.width) / 2 + size.width / 2,
        (pointer.y * size.height) / 2 + size.height / 2
      );
    }
  });

  return (
    <mesh
     ref={meshRef}
    >
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        vertexShader={Vertex}
        fragmentShader={Fragment}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default HeroScene;
