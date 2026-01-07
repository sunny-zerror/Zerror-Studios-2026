import { useThree, useFrame } from "@react-three/fiber";
import React, { useRef, useMemo, useEffect } from "react";
// import Vertex from "@/shaders/heroShaders/Vertex.glsl";
// import Fragment from "@/shaders/heroShaders/Fragment.glsl";
import {Vertex,Fragment} from '@/shaders/heroShaders/HeroShaderGLSL.jsx'
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HeroScene = () => {
  const { viewport, size, pointer } = useThree();
  const meshRef = useRef();

  const uniforms = useMemo(
    () => ({
      time: { value: Math.random() * 99 },
      resolution: { value: new THREE.Vector2(size.width, size.height) },
      mouse: { value: new THREE.Vector2(0, 0) },
      inRadius: { value: 220 },
      outRadius: { value: 540 },
      center: { value: new THREE.Vector2(size.width / 2, size.height / 2) },
      gradLength: { value: 2 },
      gradStrength: { value: 0 },
      sceneMix: { value: 1 },
    }),
    [size]
  );

  // Update resolution when size changes
  useEffect(() => {
    uniforms.resolution.value.set(size.width, size.height);
    uniforms.center.value.set(size.width / 2, size.height / 2);
  }, [size, uniforms]);

  // useEffect(() => {
  //   const tl = gsap.timeline({});
  //   tl
  //   .from(uniforms.inRadius, {
  //     value: 10,
  //     ease: "none",
  //     duration:0.5,
  //   },"<")
  //   .to(uniforms.inRadius, {
  //     value: 100,
  //     ease: "none",
  //     duration:0.5,
  //   },"<")
  //   .from(uniforms.outRadius, {
  //     value: 10,
  //     ease: "none",
  //     duration:0.5,
  //   },"<")
  //   .from(uniforms.gradLength, {
  //     value: 0.5,
  //     ease: "none",
  //     duration:0.5,
  //   },"<")
  //   .from(uniforms.gradStrength, {
  //     value: 0.5,
  //     ease: "none",
  //     duration:0.5,
  //   },"<")
  //   .from(uniforms.sceneMix, {
  //     value: 0.5,
  //     ease: "none",
  //     duration:1,
  //   },"<")
  //   .from('.heroChar',{
  //     translateY:'100%',
  //     stagger:0.02,
  //     ease:'ease.out'
  //   })   
  // }, []);

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
    <mesh ref={meshRef}>
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
