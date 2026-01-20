"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGLTF, useAnimations } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

const TyrsaCube = () => {
  const groupRef = useRef();
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  const gsapGroup = useRef();
  const dragGroup = useRef();

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
    tl.to(
      groupRef.current.position,
      {
        x: 0,
        y: 0.5,
        z: 0,
        ease: "none",
      },
      "a1",
    );
    tl.to(
      groupRef.current.rotation,
      {
        y: "+=" + Math.PI * 2, // full rotation
        x: "+=" + Math.PI * 2, // full rotation
        ease: "none",
      },
      "a1",
    );
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
    tl.to(
      groupRef.current.position,
      {
        x: 0,
        y: 0.5,
        z: 0,
        ease: "none",
      },
      "a1",
    );
    tl.to(
      groupRef.current.rotation,
      {
        y: "+=" + Math.PI * 2, // full rotation
        x: "+=" + Math.PI * 2, // full rotation
        ease: "none",
      },
      "a1",
    );
    tl.to(groupRef.current.rotation, {
      x: "+=" + Math.PI * 2,
      y: "+=" + Math.PI / 2,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    // const ST = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".ABOUTMAINCONT",
    //     start: "bottom 50%",
    //     // end:'bottom bottom',
    //     toggleActions: "play none none reverse",
    //     // markers:true
    //   },
    // });

    // ST.to(".CanvasDiv", {
    //   // position:'sticky'
    //   position: "absolute",
    //   top: 200,
    //   // left:0
    // });

    const ST = gsap.timeline({
      scrollTrigger: {
        trigger: ".IVMainCont",
        start: "top 30%",
        end: "top -20%",
        // toggleActions: "play none none reverse",
        scrub:true,
        // markers: true,
      },
    });
    ST.to(".CanvasDiv", {
     top:-800,
     ease:'none'
    });
  }, []);

  useEffect(() => {
    if (!groupRef.current) return;

    const tween = gsap.to(groupRef.current.rotation, {
      // x: "+=" + Math.PI * 2, // 360°
      y: "+=" + Math.PI * 2, // 360°
      duration: 10,
      repeat: -1, // infinite
      ease: "none", // constant speed
    });

    return () => {
      tween.kill();
    };
  }, []);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/AboutModel.glb");
  const { actions } = useAnimations(animations, group);

  // useEffect(() => {
  //   const onMouseDown = (e) => {
  //     isDragging.current = true;
  //     lastMouse.current.x = e.clientX;
  //     lastMouse.current.y = e.clientY;
  //   };

  //   const onMouseMove = (e) => {
  //     if (!isDragging.current || !groupRef.current) return;

  //     const deltaX = e.clientX - lastMouse.current.x;
  //     const deltaY = e.clientY - lastMouse.current.y;

  //     // sensitivity
  //     const rotationSpeed = 0.005;

  //     groupRef.current.rotation.y += deltaX * rotationSpeed;
  //     groupRef.current.rotation.x += deltaY * rotationSpeed;

  //     lastMouse.current.x = e.clientX;
  //     lastMouse.current.y = e.clientY;
  //   };

  //   const onMouseUp = () => {
  //     isDragging.current = false;
  //   };

  //   window.addEventListener("mousedown", onMouseDown);
  //   window.addEventListener("mousemove", onMouseMove);
  //   window.addEventListener("mouseup", onMouseUp);

  //   return () => {
  //     window.removeEventListener("mousedown", onMouseDown);
  //     window.removeEventListener("mousemove", onMouseMove);
  //     window.removeEventListener("mouseup", onMouseUp);
  //   };
  // }, []);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   if (!groupRef.current) return;

  //   const isDragging = { current: false };
  //   const lastMouse = { x: 0, y: 0 };

  //   const onMouseDown = (e) => {
  //     isDragging.current = true;
  //     lastMouse.x = e.clientX;
  //     lastMouse.y = e.clientY;
  //   };

  //   const onMouseMove = (e) => {
  //     if (!isDragging.current || !groupRef.current) return;

  //     const deltaX = e.clientX - lastMouse.x;
  //     const deltaY = e.clientY - lastMouse.y;

  //     const rotationSpeed = 0.005;

  //     // 🔥 Quaternion based infinite rotation
  //     const quatX = new THREE.Quaternion();
  //     const quatY = new THREE.Quaternion();

  //     quatY.setFromAxisAngle(
  //       new THREE.Vector3(0, 1, 0),
  //       deltaX * rotationSpeed
  //     );

  //     quatX.setFromAxisAngle(
  //       new THREE.Vector3(1, 0, 0),
  //       deltaY * rotationSpeed
  //     );

  //     // order is important
  //     groupRef.current.quaternion.multiplyQuaternions(
  //       quatY,
  //       groupRef.current.quaternion
  //     );
  //     groupRef.current.quaternion.multiplyQuaternions(
  //       quatX,
  //       groupRef.current.quaternion
  //     );

  //     lastMouse.x = e.clientX;
  //     lastMouse.y = e.clientY;
  //   };

  //   const onMouseUp = () => {
  //     isDragging.current = false;
  //   };

  //   window.addEventListener("mousedown", onMouseDown);
  //   window.addEventListener("mousemove", onMouseMove);
  //   window.addEventListener("mouseup", onMouseUp);

  //   return () => {
  //     window.removeEventListener("mousedown", onMouseDown);
  //     window.removeEventListener("mousemove", onMouseMove);
  //     window.removeEventListener("mouseup", onMouseUp);
  //   };
  // }, []);

  useEffect(() => {
    const isDragging = { current: false };
    const last = { x: 0, y: 0 };

    const onDown = (e) => {
      isDragging.current = true;
      last.x = e.clientX;
      last.y = e.clientY;
    };

    const onMove = (e) => {
      if (!isDragging.current || !dragGroup.current) return;

      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;

      const speed = 0.005;

      const qx = new THREE.Quaternion();
      const qy = new THREE.Quaternion();

      qy.setFromAxisAngle(new THREE.Vector3(0, 1, 0), dx * speed);
      qx.setFromAxisAngle(new THREE.Vector3(1, 0, 0), dy * speed);

      dragGroup.current.quaternion.multiply(qy);
      dragGroup.current.quaternion.multiply(qx);

      last.x = e.clientX;
      last.y = e.clientY;
    };

    const onUp = () => (isDragging.current = false);

    window.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <group ref={groupRef} position={[-5.5, 3, 0]}>
      <group ref={group} dispose={null}>
        <group ref={gsapGroup} name="Sketchfab_Scene">
          <group
            ref={dragGroup}
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <group
              name="784609a9569d41359a3046ddbb5e1fc7fbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Frame" position={[0, 8.661, 0]} scale={106.817}>
                    <mesh
                      name="Frame_m_Frame_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Frame_m_Frame_0.geometry}
                      material={materials.m_Frame}
                    />
                    <group name="Glow">
                      <mesh
                        name="Glow_m_Glow_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Glow_m_Glow_0.geometry}
                        material={materials.m_Glow}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default TyrsaCube;
