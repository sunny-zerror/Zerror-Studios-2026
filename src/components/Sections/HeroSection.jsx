"use client";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import HeroScene from "@/components/Scene/HeroScene.jsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  const textPreCont = useRef();
  const TextMainCont = useRef();

  useEffect(() => {
    if (!TextMainCont.current) return;
    const maxX = TextMainCont.current.scrollWidth - window.innerWidth;

    const HeroTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".HeroMainSection",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });

    HeroTL.to(textPreCont.current, { top: "35%", ease: "none" }, "<").to(
      TextMainCont.current,
      { x: -maxX, ease: "none" },
      "<"
    );
  }, []);

  useGSAP(() => {
    const animateText_Chars = SplitText.create(".animateText", {
      type: "chars",
    });
    gsap.set(animateText_Chars.chars.slice(0, 10), {
      y: 0,
    });
    const images = gsap.utils.toArray(".animateImage");
    gsap.set(images, { y: 250 });

    console.log(images)

    const HeroTL2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".HeroMainSection",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });

    HeroTL2.fromTo(
      animateText_Chars.chars.slice(10),
      { y: 250 },
      {
        y: 0,
        stagger: 0.1,
        ease: "linear",
      }
    );
    // IMAGES
   HeroTL2.to(
    images,
    {
      y: 0,
      stagger: 0.1,
      ease: "linear",
    },
    ">" 
  );
  });

  return (
    <div className="w-full h-screen z-20 absolute top-0 left-0">
      {/* Text-Pre-Cont */}
      <div
        ref={textPreCont}
        className="w-full h-fit  flex absolute bottom-2 select-none "
      >
        {/* Text-Main-Cont */}
        <div
          ref={TextMainCont}
          className="w-fit h-fit flex pl-[36vw] pr-[10vw] items-center "
        >
          <p className="animateText text-white text-[11vw] whitespace-nowrap RF_Font leading-none">
            We Design. We Build. We Create.
          </p>
          <div className="animateImage text-white w-[8vw] whitespace-nowrap  mr-[10px]  flex justify-center translate-y-[250%] items-center ml-[20px] h-fit mb-3.5 ">
            <img
              src={"/svg/z.svg"}
              className="w-full object-cover object-center"
              alt="z"
            />
          </div>
          <div className="animateImage text-white w-[7vw] whitespace-nowrap mr-[10px]  flex justify-center translate-y-[250%] items-center h-fit  mb-3.5 ">
            <img
              src={"/svg/e.svg"}
              className="w-full object-cover object-center"
              alt="e"
            />
          </div>
          <div className="animateImage text-white w-[5vw] whitespace-nowrap mr-[10px]  flex justify-center  items-center h-fit  mb-3.5 ">
            <img
              src={"/svg/r.svg"}
              className="w-full object-cover object-center"
              alt="r"
            />
          </div>
          <div className="animateImage text-white w-[5vw] whitespace-nowrap mr-[10px]  flex justify-center  items-center h-fit  mb-3.5 ">
            <img
              src={"/svg/r.svg"}
              className="w-full object-cover object-center"
              alt="r"
            />
          </div>
          <div className="animateImage text-white w-[7vw] whitespace-nowrap mr-[10px]  flex justify-center  items-center h-fit  mb-3.5 ">
            <img
              src={"/svg/o.svg"}
              className="w-full object-cover object-center"
              alt="o"
            />
          </div>
          <div className="animateImage text-white w-[5vw] whitespace-nowrap mr-[10px]  flex justify-center  items-center h-fit  mb-3.5 ">
            <img
              src={"/svg/r.svg"}
              className="w-full object-cover object-center"
              alt="r"
            />
          </div>
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
          <img
            className="w-full h-full opacity-30"
            src={
              "https://soleilnoir.com/wp-content/themes/soleil-noir/static/images/noise.png"
            }
            alt="Noise"
          />
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
