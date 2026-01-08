"use client";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import HeroScene from "@/components/Scene/HeroScene.jsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  useGSAP(() => {

    const split_hero_title = SplitText.create(".split_hero_title", { type: "words, chars" });
    const txt_anime = SplitText.create(".txt_anime", { type: "words, chars" });
    const txt_anime_2 = SplitText.create(".txt_anime_2", { type: "words, chars" });
    gsap.set(txt_anime.chars, { y: 50, opacity: 0, display: "inline-block" })
    gsap.set(txt_anime_2.words, { y: 20, opacity: 0, display: "inline-block" })


    gsap.fromTo(
      ".site-background",
      { "--scene-mix": 0 },
      {
        "--scene-mix": 1,
        delay: 3,
        duration: 1,
        ease: "power2.out"
      }
    );

    const first9Chars = split_hero_title.chars.slice(0, 9);
    gsap.fromTo(
      first9Chars,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "expo.out",
        stagger: 0.05,
        delay: 4,
      }
    );
    gsap.to(".hero_scroll_txt", {
      transform: "translateX(-242vw) translateY(-54.5%)",
      top: "50%",
      ease: "linear",
      scrollTrigger: {
        trigger: '.txt_slider_paren',
        start: 'top top',
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      }
    })

    const text_chars = split_hero_title.chars.slice(9);
    const imageLetters = gsap.utils.toArray(".hero_letter_img");

    const combinedSequence = [...text_chars, ...imageLetters];
    gsap.fromTo(
      combinedSequence,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "expo.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".txt_slider_paren",
          start: "top top",
          end: "bottom 30%",
          scrub: true,
          // markers: true
        },
      }
    );

    const trans_z_tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.txt_slider_paren',
        start: 'bottom bottom',
        end: "+=300%",
        scrub: true,
        // markers: true,
      }
    })
    trans_z_tl.to(".icon_z", {
      opacity: 0,
      duration: 0.001
    })
      .to(".letter_z", {
        opacity: 1,
        duration: 0.001
      })
      .to(".letter_z", {
        rotate: -180,
        clipPath: "inset(42% 42% 42% 42%)",
        ease: "linear",
      })
      .to(".works_header", {
        width: "100vw",
        height: "100vh",
        ease: "linear",
      })
      .to(".letter_z", {
        opacity: 0,
        duration: 0.001
      }, ">")
      .to(txt_anime.chars, {
        y: 0,
        opacity: 1,
        stagger: 0.01
      })
      .to(txt_anime_2.words, {
        y: 0,
        opacity: 1,
        stagger: 0.02
      }, "<+=0.1")


      gsap.to([".site-background",".letter_z", ".works_header"],{
        scrollTrigger:{
          trigger:".work_paren",
          start:"bottom bottom",
          end:"bottom bottom",
          scrub:true
        },
        display:"none"
      })
  });


  return (
    <div className=" hero_paren w-full relative   ">

      <div className="site-background fixed top-0 left-0   w-full h-screen z-[-1]">
        <HeroScene />
      </div>

      <div className=" txt_slider_paren w-full h-[400vh]  ">
        <div className="w-full h-screen top-0 sticky">
          <div className=" z-[2] hero_scroll_txt w-full translate-x-[30vw] absolute top-[80%] -translate-y-1/2 text-white uppercase whitespace-nowrap left-0  ">
            <div className="flex  w-fit gap-[2.5vw] items-center">
              <p className=" split_hero_title text-[12vw] origin-bottom-left font-bold">We Design. We Build. We Create Impact with </p>
              <div className=" h-[8.5vw] translate-y-[.8vw] gap-[1vw] shrink-0 flex">
                <div className="icon_z h-full">
                  <img className="hero_letter_img h-full inline-block shrink-0 " src="/svg/z.svg" alt="" />
                </div>
                <img className="hero_letter_img inline-block shrink-0" src="/svg/e.svg" alt="" />
                <img className="hero_letter_img inline-block shrink-0" src="/svg/r.svg" alt="" />
                <img className="hero_letter_img inline-block shrink-0" src="/svg/r.svg" alt="" />
                <img className="hero_letter_img inline-block shrink-0" src="/svg/o.svg" alt="" />
                <img className="hero_letter_img inline-block shrink-0" src="/svg/r.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full h-[300vh]  padding text-white bg-gradient-to-t from-[#012cba] via-[#012cba]/70 to-transparent">
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
      </div>

      <div className="letter_z opacity-0  pointer-events-none fixed top-1/2 -translate-y-1/2 left-1/2  -translate-x-1/2">
        <img className='w-[8.5vw]' src="/svg/letter_z.svg" alt="" />
      </div>

      <div className=" works_header fixed overflow-hidden whitespace-nowrap top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 bg-white">
        <div className="w-full h-[40%] center">
          <p className=' txt_anime text-9xl uppercase font-bold text_blue'>Our Work</p>
        </div>
        <div className="w-full h-[60%] center pt-44">
          <p className=' txt_anime_2 text-xl uppercase font-bold text_blue'>Work That Speaks for itself</p>
        </div>
      </div>

    </div>
  );
};

export default Hero;
