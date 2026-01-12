"use client";
import HeroSection from "@/components/about/HeroSection";
import ImageEffect from "@/components/about/ImageEffect";
import InfoSection from "@/components/about/InfoSection";
import OurTeam from "@/components/about/OurTeam";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";



const SceneComp = () => {

  return (
   <>
   </>
  );
};

const CanvasSection = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 ">
      <Canvas className=" w-full h-full">
        <SceneComp />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

const about = () => {
  return (
    <div className="w-full min-h-screen relative">
      <HeroSection />
      <ImageEffect />
      <InfoSection />
      <OurTeam />
      <CanvasSection />
    </div>
  );
};

export default about;
