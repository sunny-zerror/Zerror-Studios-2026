"use client";
import Form from "@/components/about/Form";
import HeroSection from "@/components/about/HeroSection";
import ImageEffect from "@/components/about/ImageEffect";
import InfoSection from "@/components/about/InfoSection";
import OurTeam from "@/components/about/OurTeam";
import StoperSection from "@/components/about/StoperSection";
import TyrsaCube from "@/components/about/TyrsaCube";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";

const SceneComp = () => {
  return (
    <>
      {/* <ambientLight intensity={0.5} /> */}

      {/* <pointLight position={[10, 10, 10]} intensity={2} /> */}
      {/* <pointLight position={[-10, -10, 10]} intensity={1.5} /> */}

      {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}
      <TyrsaCube />
    </>
  );
};

const CanvasSection = () => {
  return (
    <div className="CanvasDiv w-full h-screen fixed top-0 left-0 z-100 pointer-events-none ">
      <Canvas
        className=" w-full h-full pointer-events-none "
        camera={{ position: [0, 0, 7], fov: 45 }}
      >
        <SceneComp />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

const about = () => {
  const [memberActive, SetmemberActive] = useState(false);
  const flipStateRef = useRef(null);
  const [FormAnimDeactive, SetFormAnimDeactive] = useState(true);

  return (
    <>
      <div className="w-full relative ABOUTMAINCONT">
        <HeroSection />
        <CanvasSection />
      </div>

      <div className="w-full ModelAnimationStartCont ">
        <ImageEffect />
        <InfoSection />
        <OurTeam SetmemberActive={SetmemberActive} flipStateRef={flipStateRef} FormAnimDeactive={FormAnimDeactive} SetFormAnimDeactive={SetFormAnimDeactive} />

        {/* <div className="w-full relative">
        <StoperSection />
        </div> */}
      </div>

      {/* Contact-FORM */}
      {memberActive == true && (
        <div
          className={` transition-all duration-600 ease-out ${
            memberActive
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          } w-full h-screen bg-[#f5f5f577] backdrop-blur-[4px] fixed top-0 left-0 z-101 flex justify-center items-center `}
        >
          <Form SetmemberActive={SetmemberActive} SetFormAnimDeactive={SetFormAnimDeactive} />
        </div>
      )}
    </>
  );
};

export default about;
