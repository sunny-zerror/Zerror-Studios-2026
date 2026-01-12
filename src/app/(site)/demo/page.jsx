"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageEffect = () => {
    const rows = 20;
    const cols = 40;
    const totalCells = rows * cols;

    const gridRef = useRef(null);

    useEffect(() => {
        const cells = gridRef.current.children;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".ImgEffectCont",
                start: "top 60%",
                toggleActions: "play none none reverse",
                //   markers: true,
            },
        });

        tl.to(cells, {
            opacity: 0,
            duration: 0.1,
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
        <>
            <div className="w-full h-screen" />

            <div className="w-full ImgEffectCont h-screen relative overflow-hidden">
                <Image
                    src="/images/homePage/mask_img.webp"
                    alt="img"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                />

                <div
                    ref={gridRef}
                    style={{
                        gridTemplateColumns: `repeat(${cols}, 1fr)`,
                        gridTemplateRows: `repeat(${rows}, 1fr)`
                    }}
                    className="absolute top-0 left-0 w-full h-full z-40 grid"
                >
                    {Array.from({ length: totalCells }).map((_, i) => (
                        <div key={i} className="bg-white opacity-100" />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ImageEffect;
