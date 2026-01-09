"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        const boxes = containerRef.current.querySelectorAll(".client-box");

        boxes.forEach((box) => {
            const icon = box.querySelector(".client-icon");
            const img = box.querySelector(".client-img");

            box.addEventListener("mouseenter", () => {
                gsap.to(icon, { filter: "invert(100%)", duration: 0.3, ease: "power1.out" });
                gsap.to(img, { opacity: 1, scale: 1, duration: 0.3, ease: "power1.out" });
            });

            box.addEventListener("mouseleave", () => {
                gsap.to(icon, { filter: "invert(0%)", duration: 0.3, ease: "power1.in" });
                gsap.to(img, { opacity: 0, scale: 1.05, duration: 0.3, ease: "power1.in" });
            });
        });

        return () => {
            boxes.forEach((box) => {
                box.replaceWith(box.cloneNode(true)); // cleanup event listeners
            });
        };
    }, []);
    
    return (
        <div className=' clients_paren relative bg_blue -mt-1 text-white w-full'>
            <div
                ref={containerRef}
                className="w-full grid grid-cols-5 ">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 1, 1, 1].map((item, i) => {
                    return (
                        <div key={i} className="client-box w-full  overflow-hidden border border-white/10 relative aspect-square center">
                            <div className="w-full h-full center">
                                <img className='client-icon w-[60%] absolute z-[1]' src="/images/homePage/clients_logos/manifest.svg" alt="" />
                                <img
                                    className="client-img absolute w-full h-full object-cover opacity-0 "
                                    src="https://www.zerrorstudios.com/projects/Manifest/manifest_cover.webp"
                                    alt="loading" title="Disrptive"
                                />
                            </div>
                            <div className="w-full  absolute z-[4] bottom-0 flex justify-between p-3">
                                <p>Manifest</p>
                                <p>2025</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Clients