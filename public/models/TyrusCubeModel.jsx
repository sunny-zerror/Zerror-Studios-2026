import React, { useEffect, useRef } from 'react'
import { useLoader } from '@react-three/fiber'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { createGLTFLoader } from '@/components/lib/gltfLoader'
gsap.registerPlugin(ScrollTrigger)

export default function TyrusCubeModel(props) {
  const modelRef = useRef()

  const gltf = useLoader(
    createGLTFLoader,
    '/models/Tyrus_dice.glb'
  )

  const { nodes, materials } = gltf

  useEffect(() => {
    if (!modelRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about_hero_paren',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    tl.to(".tyrus_canvas", {
      top: "0%",
      left: "0%",
      ease: "none",
      duration: .2
    })
    tl.to(
      modelRef.current.rotation,
      {
        x: Math.PI * 2,
        ease: 'none',
        duration: .2
      }, "<"
    )

    tl.fromTo(
      modelRef.current.scale,
      { x: 0.6, y: 0.6, z: 0.6 },
      { x: 1.0, y: 1.0, z: 1.0, duration: .2, ease: 'none' }, "<"
    )

    tl.to(
      modelRef.current.rotation,
      {
        x: Math.PI * 5,
        ease: 'none',
      }, "<+=0.2"
    )

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Plan001.geometry}
        material={materials.Material_0}
        castShadow
        receiveShadow
      />
    </group>
  )
}
