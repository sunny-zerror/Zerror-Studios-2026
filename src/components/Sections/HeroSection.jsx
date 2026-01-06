"use client";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import HeroScene from "@/components/Scene/HeroScene.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TextAnimation = () => {
  const text = [
    "W",
    "e",
    " ",
    "D",
    "e",
    "s",
    "i",
    "g",
    "n",
    ".",
    " ",
    "W",
    "e",
    " ",
    "B",
    "u",
    "i",
    "l",
    "d",
    ".",
    " ",
    "W",
    "e",
    " ",
    "C",
    "r",
    "e",
    "a",
    "t",
    "e",
    " ",
    " ",
    "I",
    "m",
    "p",
    "a",
    "c",
    "t",
    ".",
  ];
  const textPreCont = useRef();
  const TextMainCont = useRef();

  useEffect(() => {
    if (!TextMainCont.current) return;
    const maxX = TextMainCont.current.scrollWidth - window.innerWidth;

    // Tile-Line
    const HeroTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".HeroMainSection",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers:true,
      },
    });
    HeroTL.to(
      textPreCont.current,
      {
        top: "30%",
        ease: "ease.out",
      },
      "a1"
    );
    HeroTL.to(
      TextMainCont.current,
      {
        x: -maxX,
        ease: "ease.out",
      },
      "a1"
    );
  }, []);

  return (
    <div className="w-full h-screen z-20 absolute top-0 left-0">
      {/* Text-Pre-Cont */}
      <div
        ref={textPreCont}
        className="w-full h-fit overflow-hidden flex absolute bottom-2 select-none "
      >
        {/* Text-Main-Cont */}
        <div
          ref={TextMainCont}
          className="w-fit h-fit flex pl-[36vw] pr-[26vw] "
        >
          {text.map((item, index) => {
            return (
              <span
                key={index}
                className={`heroChar text-[11vw]  flex ${
                  index > 13 && " textDownAimate"
                } leading-[11vw] tracking-tighter ${
                  item === " " && "w-[2vw]"
                } uppercase RF_Font text-white`}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="w-full h-[400vh] relative flex HeroMainSection ">
      {/* Canvas-Div */}
      <div className="w-full h-screen sticky top-0 left-0 ">
        {/* Noise PNG */}
        <div className="w-full h-screen mix-blend-overlay absolute top-0 left-0 z-40">
          <img className="w-full h-full opacity-30" src={'https://soleilnoir.com/wp-content/themes/soleil-noir/static/images/noise.png'} alt="Noise" />
        </div>
       
        <TextAnimation />
        <Canvas
          className="w-full absolute top-0 h-screen z-10"
          gl={{ antialias: true }}
        >
          <HeroScene />
        </Canvas>
      </div>
    </div>
  );
};

export default HeroSection;
