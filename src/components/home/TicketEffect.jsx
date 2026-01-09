"use client"
import React, { useRef } from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from 'gsap';

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
            <div className="w-full center text_blue text-center space-y-10 flex-col">
                <p className='text-[7.5rem] pf_nine  leading-none'>Ready for your <br />
                    game-changing <br />
                    <i>   website?</i></p>

                <p className='text-lg'>Step on the Double Play court and <br />
                    request a project with a few clicks.</p>

                <button className='flex group items-center gap-2'>
                    <p className=''>Contact</p>
                    <DotLottieReact
                        src="/icons/tennis_ball_spin.lottie"
                        loop
                        autoplay
                        className="w-5 h-5 group-hover:scale-[.8] transition-all duration-300"
                    />
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
                            src="https://cdn.prod.website-files.com/67fcd4974b30a00d13095550/685475608688de6dd0a58668_ticket_layer_1.avif"
                            alt=""
                        />
                    </div>

                    <div
                        ref={img2Ref}
                        className="absolute top-0 rotate-[3deg] transform-style-preserve-3d"
                    >
                        <img
                            className="w-full pointer-events-none select-none"
                            src="https://cdn.prod.website-files.com/67fcd4974b30a00d13095550/685ba89e7b72a33dd98defc0_d571628e17f0e46b5e7b1559aaeecb3e_ticket-p-2000.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketEffect