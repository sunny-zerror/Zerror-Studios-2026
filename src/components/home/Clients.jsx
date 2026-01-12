"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const clientsData = [
    {
        icon: "/images/homePage/clients/1_Vishwa_Samudra.png"
    },
    {
        icon: "/images/homePage/clients/2_Rupay.png"
    },
    {
        icon: "/images/homePage/clients/3_Devgn.png"
    },
    {
        icon: "/images/homePage/clients/4_Flipkart.png"
    },
    {
        icon: "/images/homePage/clients/5_Golden.png"
    },
    {
        icon: "/images/homePage/clients/6_Imagine.png"
    },
    {
        icon: "/images/homePage/clients/7_Kuwait.png"
    },
    {
        icon: "/images/homePage/clients/8_TATA.png"
    },
    {
        icon: "/images/homePage/clients/9_Piramal.png"
    },
    {
        icon: "/images/homePage/clients/10_Prominance.png"
    },
    {
        icon: "/images/homePage/clients/11_Proost.png"
    },
    {
        icon: "/images/homePage/clients/12_Punjab Kings.png"
    },
    {
        icon: "/images/homePage/clients/13_Flaunt Your Ink.png"
    },
    {
        icon: "/images/homePage/clients/14_SDAF.png"
    },
    {
        icon: "/images/homePage/clients/15_Superyou.png"
    },
    {
        icon: "/images/homePage/clients/16_TLH.png"
    },
    {
        icon: "/images/homePage/clients/17_Candor_Foods.png"
    },
    {
        icon: "/images/homePage/clients/18_Guyana.png"
    },
    {
        icon: "/images/homePage/clients/19_Ellementry.png"
    },
    {
        icon: "/images/homePage/clients/20_Dalhousie.png"
    },
]

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
                {clientsData.map((item, i) => {
                    return (
                        <div key={i} className="client-box w-full  overflow-hidden border border-white/10 relative aspect-square center">
                            <div className="w-full h-full center">
                                <img className='client-icon w-[80%] absolute z-[1]' src={item.icon} alt="" />
                                <img
                                    className="client-img absolute w-full h-full object-cover opacity-0 "
                                    src="https://www.zerrorstudios.com/projects/Manifest/manifest_cover.webp"
                                    alt="loading" title="Disrptive"
                                />
                            </div>
                            <div className="w-full  uppercase text-sm absolute z-[4] bottom-0 flex justify-between p-3">
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