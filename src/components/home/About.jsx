"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger);
const About = () => {

    useGSAP(() => {

        const txt_anime = SplitText.create(".txt_anime", { type: "words, chars" });
        const txt_anime_2 = SplitText.create(".txt_anime_2", { type: "words, chars" });
        gsap.set(txt_anime.chars, { y: 80, opacity: 0, display: "inline-block" })
        gsap.set(txt_anime_2.words, { y: 20, opacity: 0, display: "inline-block" })

        gsap.to(".letter_z", {
            scrollTrigger: {
                trigger: '.letter_z',
                start: 'center center',
                end: 'center center',
                scrub: true
            },
            position: "fixed",
        })


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.about_paren',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                // markers: true,
            }
        })

        tl.to(".letter_z", {
            rotate: -180,
            clipPath: "inset(42% 42% 42% 42%)"
        })
        tl.to(".works_paren", {
            width: "100vw",
            height: "100vh",
            ease: "linear",
        })
        tl.to(".letter_z", {
            opacity: 0,
            duration: 0.001
        }, ">")
        tl.to(txt_anime.chars, {
            y: 0,
            opacity: 1,
            stagger: 0.05
        })
        tl.to(txt_anime_2.words, {
            y: 0,
            opacity: 1,
            stagger: 0.05
        }, "<+=0.1")

        gsap.to(".works_paren", {
            scrollTrigger: {
                trigger: ".work_paren",
                start: "bottom bottom",
                end: "bottom bottom",
                scrub: true,
                // markers:true
            },
            display: "none"
        })


    })

    return (
        <>
            <div className=" about_paren text-white overflow-hidden  w-full h-[350vh] padding relative bg_blue">
                <div className="w-full h-screen  flex flex-col justify-between">
                    <div className="space-y-5">
                        <div className="w-full">
                            <img src="/svg/built_our.svg" alt="" />
                        </div>
                        <div className="w-full relative flex justify-end gap-x-3">
                            <div className="letter_z pointer-events-none absolute top-1/2 -translate-y-1/2 left-1/2  -translate-x-1/2">
                                <img className='' src="/svg/letter_z.svg" alt="" />
                            </div>
                            <img src="/svg/error.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full  grid grid-cols-[25%_25%_50%]">
                    <div className="">
                        <p className=' font-bold text-5xl uppercase'>ABOUT</p>
                    </div>
                    <div className="text-base leading-none capitalize">
                        <p className=''>Thoughtful design.</p>
                        <p className=''>Strong technology.</p>
                    </div>
                    <div className="capitalize text-3xl pl-2">
                        <p> <span className='opacity-0 pointer-events-none'>......................................</span> We exist to end that trade-off.  At Zerror, design and technology move as one — from first thought to final build. Every decision is intentional. Every detail measured. Every release stable.</p>
                    </div>
                </div>

                <div className=" works_paren fixed overflow-hidden whitespace-nowrap top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 bg-white">
                    <div className="w-full h-[40%] center">
                        <p className=' txt_anime text-9xl uppercase font-bold text_blue'>Our Work</p>
                    </div>
                    <div className="w-full h-[60%] center pt-44">
                        <p className=' txt_anime_2 text-xl uppercase font-bold text_blue'>Work That Speaks for itself</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About