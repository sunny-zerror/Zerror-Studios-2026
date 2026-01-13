"use client";
import TicketEffect from '@/components/home/TicketEffect'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';

gsap.registerPlugin(ScrollTrigger)

const projectsData = [
  {
    title: "Disrptve",
    img: "https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?q=80&w=1204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Website Design"
  },
  {
    title: "Disrptve",
    img: "https://images.unsplash.com/photo-1759978244716-ed4b77300a47?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Website Design"
  },
  {
    title: "Disrptve",
    img: "https://images.unsplash.com/photo-1583306346437-f2143c0f11fc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Website Design"
  },
  {
    title: "Disrptve",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Website Design"
  },
  {
    title: "Disrptve",
    img: "https://images.unsplash.com/photo-1531384370597-8590413be50a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Website Design"
  },
]

const WorkDetail = () => {

  useGSAP(() => {
const wrk_anim_txt = SplitText.create(".wrk_anim_txt", {
  type: "lines",
  linesClass: "wrk-line",
});

const more_project_header_split_wrd = SplitText.create(
  ".more_project_header_split_wrd",
  {
    type: "lines",
    linesClass: "wrk-line",
  }
);

[wrk_anim_txt.lines, more_project_header_split_wrd.lines].forEach(lines => {
  lines.forEach(line => {
    const wrapper = document.createElement("div");
    wrapper.className = "overflow-hidden block";

    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);

    line.classList.add("block");
  });
});


    gsap.to(".wrk_hero_video", {
      y: 400,
      filter: "brightness(0.3)",
      ease: "linear",
      scrollTrigger: {
        trigger: ".wrk_hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers:true
      }
    })

    gsap.fromTo(wrk_anim_txt.lines, {
      yPercent: 100,
      opacity: 0,
    }, {
      yPercent: 0,
      opacity: 1,
      ease: "power3.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".wrk_hero",
        start: "bottom 30%",
        toggleActions: "play none none reverse",
        // scrub: true,
        // markers: true
      }
    })

    gsap.to(".mob_1", {
      y: -300,
      ease: "linear",
      scrollTrigger: {
        trigger: ".mob_1",
        start: "top bottom",
        end: "bottom top",
        // toggleActions: "play none none reverse",
        scrub: true,
        // markers: true
      }
    })
    gsap.to(".mob_2", {
      y: -300,
      ease: "linear",
      scrollTrigger: {
        trigger: ".mob_2",
        start: "top bottom",
        end: "bottom top",
        // toggleActions: "play none none reverse",
        scrub: true,
        // markers: true
      }
    })
    gsap.to(".mob_3", {
      y: -300,
      ease: "linear",
      scrollTrigger: {
        trigger: ".mob_3",
        start: "top bottom",
        end: "bottom top",
        // toggleActions: "play none none reverse",
        scrub: true,
        // markers: true
      }
    })
    const clip_img_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".clip_img_effect",
        start: "top 60%",
        toggleActions: "play none none reverse",
        // scrub: true,
        // markers: true
      }
    })
    clip_img_tl.to(".clip_img_effect", {
      opacity: 1,
      clipPath: "inset(0%)",
      stagger: 0.03,
      duration: 1,
      ease: "expo.out",
    })
    clip_img_tl.to(".clip_img_effect_img", {
      scale: 1,
      stagger: 0.03,
      duration: 1,
      ease: "expo.out",
    }, "<")


    gsap.fromTo(more_project_header_split_wrd.lines, {
      yPercent: 100,
      opacity: 0,
    }, {
      yPercent: 0,
      opacity: 1,
      ease: "power3.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".more_project_header",
        start: "top 50%",
        toggleActions: "play none none reverse",
        // scrub: true,
        // markers: true
      }
    })

  })

  return (
    <>
      <div className="w-full wrk_hero overflow-hidden h-screen">
        <video className='cover wrk_hero_video brightness-100 ' loop autoPlay muted playsInline src="https://www.pexels.com/download/video/16834483/"></video>
      </div>

      <div className="w-full py-32! text_blue  padding grid grid-cols-[80%_20%]">
        <div className=" uppercase space-y-10">
          <p className='wrk_anim_txt font-bold text-9xl '>
            Disrupting the Norm
          </p>
          <div className="w-[60%]  space-y-5  capitalize leading-tight text-lg">
            <div className="">
              <p className='wrk_anim_txt'>This project reimagines how digital products should feel and function. By blending clear strategy, thoughtful design, and robust engineering, we created an experience that removes friction and elevates interaction.</p>
            </div>
            <div className="">
              <p className='wrk_anim_txt'>This project reimagines how digital products should feel and function. By blending clear strategy, thoughtful design, and robust engineering, we created an experience that removes friction and elevates interaction.</p>
            </div>
          </div>
        </div>

        <div className="space-y-10 pt-16">
          <div className="space-y-2">
            <p className='wrk_anim_txt font-bold text-xl uppercase'>CLIENT</p>
            <p className='wrk_anim_txt'>Disrptve</p>
          </div>
          <div className="space-y-2">
            <p className='wrk_anim_txt font-bold text-xl uppercase'>Project type</p>
            <div className="">

              <p className='wrk_anim_txt'>Product Build</p>
              <p className='wrk_anim_txt'>Full-Stack App</p>
              <p className='wrk_anim_txt'>Scalable Platform</p>
              <p className='wrk_anim_txt'>Custom Build</p>
              <p className='wrk_anim_txt'>End-to-End Build</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className='wrk_anim_txt  font-bold text-xl uppercase'>team</p>
            <div className="">
              <p className='wrk_anim_txt'>Product Design </p>
              <p className='wrk_anim_txt'> Development</p>
            </div>
          </div>
        </div>

      </div>


      <div className="wrk_images_parent w-full">
        <div className="w-full center flex-col relative">
          <img className='w-full h-full absolute z-[-1] ' src="/images/work/bg_img1.png" alt="" />
          <img className=' w-[90%]' src="/images/work/image_1.png" alt="" />
          <img className=' w-[75%]' src="/images/work/image_2.png" alt="" />
          <img className=' mob_1  absolute right-20 top-[35%]' src="/images/work/image_3.png" alt="" />
          <img className=' mob_2  absolute right-20 bottom-[5%]' src="/images/work/image_4.png" alt="" />
        </div>

        <div className="w-full center flex-col relative">
          <img className='w-full h-full absolute z-[-1] ' src="/images/work/bg_img2.png" alt="" />
          <img className='w-full h-full absolute z-[-1] ' src="/images/work/bg_img3.png" alt="" />
          <div className="flex">
            <div className="w-1/2 center p-32">
              <div style={{ clipPath: "inset(50%)" }} className=" clip_img_effect w-[30vw] overflow-hidden opacity-0 ">
                <img className='scale-150 clip_img_effect_img' src="/images/work/bg_img1.png" alt="" />
              </div>
            </div>
            <div className="w-1/2 center p-20">
              <div style={{ clipPath: "inset(50%)" }} className=" clip_img_effect w-[35vw] overflow-hidden opacity-0 ">
                <img className='scale-150 clip_img_effect_img' src="/images/work/image_6.png" alt="" />
              </div>
            </div>
          </div>

          <img className=' w-[75%]' src="/images/work/image_7.png" alt="" />
          <img className=' w-[75%] mt-32' src="/images/work/image_8.png" alt="" />
          <img className=' w-[75%] mt-32 mb-48' src="/images/work/image_10.png" alt="" />

          <img className=' mob_3 absolute right-20 bottom-[5%]' src="/images/work/image_9.png" alt="" />

        </div>
      </div>


      <div className=" more_project_header w-screen py-32!  padding text_blue grid grid-cols-[28%_29%_43%]">
        <div className="">
          <p className=' more_project_header_split_wrd text-6xl uppercase font-bold leading-none'>Projects</p>
        </div>
        <div className="text-xs uppercase leading-tight pt-5">
          <p className='more_project_header_split_wrd'>Brands we’ve </p>
          <p className='more_project_header_split_wrd'>worked with.</p>
        </div>
        <div className="text-4xl  pl-2">
          <p className=" more_project_header_split_wrd  "> <span className='opacity-0 pointer-events-none'>.........................</span> We work with startups, studios, and growing brands to design and build digital products that are clear, scalable, and impactful.</p>
        </div>
      </div>


      <div className="padding py-0!">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className="mySwiper relative  text_blue cursor-grab active:cursor-grabbing">

          {projectsData.map((item, i) => (
            <SwiperSlide key={i} style={{ width: "35vw" }}>
              <div
                className=" w-full cursor-grab active:cursor-grabbing"
              >
                <div className=" w-full aspect-[5/6]">
                  <img src={item.img} alt="" className="cover" />
                </div>
                <div className="mt-2">
                  <div className="w-full flex items-center justify-between">
                    <p className="text-lg uppercase font-semibold ">{item.title}</p>
                    <p className="text-lg font-semibold ">2025</p>
                  </div>
                  <p className="text-sm">{item.category}</p>

                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

      <TicketEffect />
    </>
  )
}

export default WorkDetail