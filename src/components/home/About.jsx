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
        gsap.set([txt_anime.chars,txt_anime_2.words], { yPercent: 100,  display: "inline-block" })

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about_paren",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        })
        tl.from(".circ_3", {
            x: "25vw",
            ease:"linear"
        })
        tl.from(".circ_1", {
            x: "-25vw",
            ease:"linear"
        }, "<")
        tl.to([".circ_1 p", ".circ_2 p", ".circ_3 p"], {
            y: -15,
            opacity: 0,
        })
        tl.to([".circ_1", ".circ_2", ".circ_3"], {
            backgroundColor: "#07207100"
        })
        tl.from(".anim_letter", {
            yPercent: 100,
            ease: "expo.out",
            stagger: 0.05
        }, "<")
        tl.to(".div_scale", {
            scale: 1,
            ease: "expo.out",
            duration: 1
        })
        tl.to([".circ_1", ".circ_2", ".circ_3"], {
            opacity: 0,
            duration: 0.5
        }, "<")

        tl.to(".opacity_z", {
            opacity: 0,
            duration: 0.01
        })
        tl.to(".drop_ltr_z", {
            opacity: 1,
            duration: 0.01
        }, "<")
        tl.to(".opacity_z", {
            rotate: -180,
            clipPath: "inset(42.5% 42.5% 42.5% 42.5%)",
            ease: "linear",
        }, "<")
        tl.to(".drop_ltr_z", {
            rotate: -180,
            clipPath: "inset(42.5% 42.5% 42.5% 42.5%)",
            ease: "linear",
        }, "<")
        tl.to(".div_scale", {
            top: "-12vw",
            ease: "linear",
        }, "<")
        tl.to(".drop_ltr_z", {
            left: "50%",
            ease: "linear",
        })
        tl.to(".works_paren_header", {
            width: "100vw",
            height: "100vh",
            ease: "linear",
        })
        tl.to(".drop_ltr_z", {
            opacity: 0,
            duration: 0.001
        }, ">")
        tl.to(txt_anime.chars, {
            yPercent: 0,
            stagger: 0.05
        })
        tl.to(txt_anime_2.words, {
            yPercent: 0,
            stagger: 0.05
        }, "<+=0.1")


    })


    return (
        <>
            <div className=" about_paren   text-white   w-full h-[500vh] relative ">

                <div className="sticky top-0 center w-full h-screen ">
                    <div className="circ_1 size-[25vw] center bg-[#071F71] absolute  border border-white rounded-full">
                        <p className=' text-5xl uppercase'>Creativity</p>
                    </div>
                    <div className="circ_2 size-[25vw] center bg-[#071F71] absolute  border border-white rounded-full">
                        <p className=' text-5xl uppercase'>Efficiency</p>
                    </div>
                    <div className="circ_3 size-[25vw] center bg-[#071F71] absolute  border border-white rounded-full">
                        <p className=' text-5xl uppercase'>Empathy</p>
                    </div>

                    <div className=" drop_ltr_z opacity-0 z-[2] fixed top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2">
                        <img className='h-[10vw]' src="/svg/z.svg" alt="" />
                    </div>

                    <div className=" div_scale overflow-hidden scale-[.25]  gap-4 absolute flex justify-center items-center">
                        <div className="  word_error flex gap-4">
                            <div className=" anim_letter opacity_z">
                                <img className='h-[10vw]' src="/svg/z.svg" alt="" />
                            </div>
                            <div className=" anim_letter">
                                <img className='h-[10vw]' src="/svg/e.svg" alt="" />
                            </div>
                            <div className=" anim_letter">
                                <img className='h-[10vw]' src="/svg/r.svg" alt="" />
                            </div>
                            <div className=" anim_letter">
                                <img className='h-[10vw]' src="/svg/r.svg" alt="" />
                            </div>
                            <div className=" anim_letter">
                                <img className='h-[10vw]' src="/svg/o.svg" alt="" />
                            </div>
                            <div className=" anim_letter">
                                <img className='h-[10vw]' src="/svg/r.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className=" works_paren_header fixed overflow-hidden whitespace-nowrap top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 bg-white">
                        <div className="w-full h-[40%] center">
                            <div className="block shrink-0 overflow-hidden">
                            <p className=' txt_anime text-9xl uppercase font-bold text_blue'>Our Work</p>
                            </div>
                        </div>
                        <div className="w-full h-[60%] center pt-44">
                            <div className="block shrink-0 overflow-hidden">
                            <p className=' txt_anime_2 text-xl uppercase font-bold text_blue'>Work That Speaks for itself</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default About