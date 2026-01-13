"use client"
import React, { useRef } from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from 'gsap';
import { RiArrowRightUpLine } from '@remixicon/react';

const TicketEffect = () => {

    const wrapRef = useRef(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);

    const handleEnter = () => {
        gsap.to([img1Ref.current, img2Ref.current], {
            rotate: 0,
            duration: 0.5,
            ease: "power3.out",
        });
    };

    const handleMove = (e) => {
        const bounds = wrapRef.current.getBoundingClientRect();

        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;

        gsap.to([img1Ref.current, img2Ref.current], {
            rotateX,
            rotateY,
            duration: 0.3,
            ease: "expo.out",
            transformPerspective: 1000,
        });
    };

    const handleLeave = () => {
        gsap.to([img1Ref.current, img2Ref.current], {
            rotateX: 0,
            rotateY: 0,
            duration: 0.4,
            ease: "expo.out",
        });

        gsap.to(img1Ref.current, {
            rotate: -5,
            duration: 0.5,
            ease: "expo.out",
        });

        gsap.to(img2Ref.current, {
            rotate: 3,
            duration: 0.5,
            ease: "expo.out",
        });
    };

    return (
        <div>
            <div className="w-full pt-32 center text_blue text-center space-y-10 flex-col">
                <p className='text-8xl font-bold uppercase   leading-none'>Ready for your <br />
                    game-changing <br />website?</p>

                <p className='text-sm '>Step on the Zerror Studios and <br />
                    request a project with a few clicks.</p>

                <button className='flex relative group items-center gap-1'>
                    <div className="w-0 group-hover:w-full transition-all duration-300 absolute bg_blue bottom-0 rounded-full h-0.5"></div>
                    <p className=''>Contact</p>
                    <RiArrowRightUpLine size={18} />
                </button>


                <div
                    ref={wrapRef}
                    onMouseEnter={handleEnter}
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}
                    className="relative h-[30vw] my-[5vw]  w-[65%] perspective-[1000px]"
                >
                    <div
                        ref={img1Ref}
                        className="absolute top-0 rotate-[-5deg] transform-style-preserve-3d"
                    >
                        <img
                            className="w-full pointer-events-none select-none"
                            src="/images/homePage/ticket_back.svg"
                            alt=""
                        />
                    </div>

                    <div
                        ref={img2Ref}
                        className="absolute top-0 rotate-[3deg] transform-style-preserve-3d"
                    >
                        <img
                            className="w-full pointer-events-none select-none"
                            src="/images/homePage/ticket_front.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketEffect