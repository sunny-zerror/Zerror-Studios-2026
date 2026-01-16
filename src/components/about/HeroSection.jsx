import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import PixelTrail from "@/components/about/PixelTrail";

const HeroSection = () => {
  const rows = 40;
  const cols = 40;
  const totalCells = rows * cols;
  const gridRefl = useRef(null);
  const gridRefR = useRef(null);

  useEffect(() => {
    const cells = gridRefl.current.children;
    const cells2 = gridRefR.current.children;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ImgEffectContL",
        start: "top 50%",
        toggleActions: "play none none reverse",
        //   markers: true,
      },
    });

    tl.to(cells, {
      opacity: 0,
      duration: 0.5,
      stagger: {
        each: 0.001,
        from: "random",
      },
      ease: "expo.out",
    },'a1');
    tl.to(cells2, {
      opacity: 0,
      duration: 0.5,
      stagger: {
        each: 0.001,
        from: "random",
      },
      ease: "expo.out",
    },'a1');

    return () => {
      tl.scrollTrigger.kill();
    };
  }, []);


  useEffect(() => {
    // Animate the form once when it mounts
    gsap.to('.aboutTitle', {
      opacity: 1,
      y: 0,          // slide up from below
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,   // if multiple child elements, animate them one by one
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col px-10 pb-[10vw]">
      {/* Title */}
      <div className="w-full aboutTitle flex py-[10vw] translate-y-50 opacity-0">
        <h1 className="text-[6vw] leading-[6vw] capitalize spirit text-[#002BBA]">
          We believe a great user experience is not just intuitive it’s
          entertaining. Because clarity is good, but delight is better.
        </h1>
      </div>

      {/* 2-Section */}
      <div className="w-full flex">
        {/* left */}
        <div className="w-1/2 flex flex-col gap-7 ">
          <div className="w-1/2 ">
            <p className="spirit text-[#002BBA]  text-[2rem] leading-[2.3rem]">
              We make stuff look good. We make it work better. Creative.
              Scalable. Reliable. Fresh. Tech-first. Entertaining.
            </p>
          </div>

          {/* Img */}
          <div className="w-full ImgEffectContL h-screen  overflow-hidden relative">
            <div
              ref={gridRefl}
              className=" absolute pointer-events-none top-0 left-0 w-full h-full  z-40 grid grid-rows-40 grid-cols-40"
            >
              {Array.from({ length: totalCells }).map((_, i) => (
                <div key={i} className="bg-white opacity-100" />
              ))}
            </div>

            {/* img */}
            <img src={'/images/about/AboutMainBg.jpg'} alt="l-Img"  className="w-full h-full object-cover object-center"/>
            
          </div>
        </div>

        {/* Right */}
        <div className="w-1/2 flex flex-col text-[#002BBA] items-end ">
          {/* cont*/}
          <div className="w-1/2 flex flex-col gap-3">
            {/* Text */}
            <h1 className="text-[1rem] capitalize ibm font-semibold">
              Why we exist
            </h1>
            <div className="w-full flex flex-col gap-3">
              <p className="text-[0.8rem] leading-[1rem] font-medium ibm">
                We’re here to help you stand out—even in a crowded digital
                world. From turning napkin sketches into fully functional
                platforms to moving fast without breaking your brand, we focus
                on building experiences that scale smoothly and entertain, not
                just inform or convert.
              </p>
              <p className="text-[0.8rem] leading-[1rem] font-medium ibm">
                While most teams do either design or development, few truly
                understand both—and even fewer do it fast. We’re here to change
                that.
              </p>
            </div>

            {/* Img */}
            <div className="w-full h-[50vh] mt-8 bg-[#002BBA] overflow-hidden relative">
              <div
              ref={gridRefR}
              className=" absolute pointer-events-none top-0 left-0 w-full h-full  z-40 grid grid-rows-40 grid-cols-40"
            >
              {Array.from({ length: totalCells }).map((_, i) => (
                <div key={i} className="bg-white opacity-100" />
              ))}
            </div>
            <img src={'/images/about/AboutMainBg.jpg'} alt="l-Img"  className="w-full h-full object-cover object-center"/>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default HeroSection;
