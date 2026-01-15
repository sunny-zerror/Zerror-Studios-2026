"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const createTexture = (color1, color2, text) => {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 100; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.1})`;
    ctx.fillRect(Math.random() * 512, Math.random() * 512, 30, 30);
  }

  ctx.font = "bold 90px Arial";
  ctx.fillStyle = "rgba(255,255,255,1)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 256, 256);

  return new THREE.CanvasTexture(canvas);
};

const TyrsaCube = () => {
  const meshRef = useRef(null);

  const isDragging = useRef(false);
  const prev = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  const materials = useMemo(
    () => [
      new THREE.MeshStandardMaterial({
        map: createTexture("#012CBA", "#012CBA", "ZERROR"),
        roughness: 0.7,
        metalness: 0.3,
      }),
      new THREE.MeshStandardMaterial({
        map: createTexture("#012CBA", "#012CBA", "ZERROR"),
        roughness: 0.7,
        metalness: 0.3,
      }),
      new THREE.MeshStandardMaterial({
        map: createTexture("#012CBA", "#012CBA", "ZERROR"),
        roughness: 0.7,
        metalness: 0.3,
      }),
      new THREE.MeshStandardMaterial({
        map: createTexture("#012CBA", "#012CBA", "ZERROR"),
        roughness: 0.7,
        metalness: 0.3,
      }),
      new THREE.MeshStandardMaterial({
        map: createTexture("#012CBA", "#012CBA", "ZERROR"),
        roughness: 0.7,
        metalness: 0.3,
      }),
      new THREE.MeshStandardMaterial({
        map: createTexture("#012CBA", "#012CBA", "ZERROR"),
        roughness: 0.7,
        metalness: 0.3,
      }),
    ],
    []
  );

  useFrame(() => {
    // Auto Rotate
    // if (!isDragging.current) {
    //   target.current.y += 0.01;
    // }

    if (!meshRef.current) return;

    meshRef.current.rotation.y +=
      (target.current.y - meshRef.current.rotation.y) * 0.1;
    meshRef.current.rotation.x +=
      (target.current.x - meshRef.current.rotation.x) * 0.1;
  });

  const onPointerDown = (e) => {
    isDragging.current = true;
    prev.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    target.current.y += (e.clientX - prev.current.x) * 0.01;
    target.current.x += (e.clientY - prev.current.y) * 0.01;
    prev.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  const groupRef = useRef();
  useLayoutEffect(() => {
    if (!groupRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ABOUTMAINCONT",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    // tl.to(groupRef.current.position, {
    //   x: 0,
    //   y: 0.5,
    //   z: 0,
    //   ease: "none",
    // },'a1');
    tl.to(groupRef.current.rotation, {
      y: "+=" + Math.PI * 2, // full rotation
      x: "+=" + Math.PI * 2, // full rotation
      ease: "none",
    },'a1');
    tl.to(groupRef.current.rotation, {
      x: "+=" + Math.PI * 2,
      y: "+=" + Math.PI / 2,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);


  useLayoutEffect(() => {
    if (!groupRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ModelAnimationStartCont",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
    tl.to(groupRef.current.position, {
      x: 0,
      y: 0.5,
      z: 0,
      ease: "none",
    },'a1');
    tl.to(groupRef.current.rotation, {
      y: "+=" + Math.PI * 2, // full rotation
      x: "+=" + Math.PI * 2, // full rotation
      ease: "none",
    },'a1');
    tl.to(groupRef.current.rotation, {
      x: "+=" + Math.PI * 2,
      y: "+=" + Math.PI / 2,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);


  useEffect(()=>{

    const ST = gsap.timeline({
      scrollTrigger:{
        trigger:'.stoperSection',
        start:'top top',
        end:'bottom bottom',
        toggleActions: "play none none reverse",
        // markers:true
      }
    })

    ST.to('.CanvasDiv',{
      // position:'sticky'
      position:'absolute'
    })

  },[])

  return (
    <group ref={groupRef} position={[-5.5, 3, 0]}>
      <mesh
        scale={0.6}
        ref={meshRef}
        geometry={new THREE.BoxGeometry(3, 3, 3)}
        material={materials}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      />
    </group>
  );
};

export default TyrsaCube;
