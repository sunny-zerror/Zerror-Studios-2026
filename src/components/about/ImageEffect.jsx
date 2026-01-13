import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import PixelTrail from "@/components/about/PixelTrail";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ImageEffect = () => {
  const rows = 40;
  const cols = 20;
  const totalCells = rows * cols;
  const gridRef = useRef(null);

  useEffect(() => {
        const cells = gridRef.current.children;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".ImgEffectCont",
                start: "top 50%",
                toggleActions: "play none none reverse",
                //   markers: true,
            },
        });

        tl.to(cells, {
            opacity: 0,
            duration:0.5,
            stagger: {
                each: 0.001,
                from: "random",
            },
            ease: "expo.out",
        });

        return () => {
            tl.scrollTrigger.kill();
        };
    }, []);

  return (
    <div className="w-full ImgEffectCont h-screen overflow-hidden relative">
      <Image
        src={"/images/about/AboutMainBg.jpg"}
        className="w-full h-full object-center object-cover"
        width={1000}
        height={1000}
        alt="img"
      />

      <div className="w-full h-screen absolute top-0 left-0 overflow-hidden z-30 ">
        <PixelTrail
          gridSize={30}
          trailSize={0.1}
          maxAge={250}
          interpolate={5.4}
          color="#FFFFFF80"
          gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
        />
      </div>

      <div ref={gridRef} className=" absolute pointer-events-none top-0 left-0 w-full h-full  z-40 grid grid-rows-20 grid-cols-40">
         {Array.from({ length: totalCells }).map((_, i) => (
                        <div key={i} className="bg-white opacity-100" />
                    ))}
      </div>
    </div>
  );
};

export default ImageEffect;
