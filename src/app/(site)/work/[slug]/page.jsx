"use client";
import TicketEffect from '@/components/home/TicketEffect'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

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

const page = () => {
  return (
    <>
      <div className="w-full h-screen">
        <video className='cover' loop autoPlay muted playsInline src="https://www.disrptve.com/video/show_reel.mp4"></video>
      </div>

      <div className="w-full py-32! text_blue  padding grid grid-cols-[80%_20%]">
        <div className="w-[60%]  space-y-10">
          <p className='spirit text-9xl '>
            Disrupting the Norm
          </p>
          <div className="space-y-5 leading-tight text-lg">
            <p>This project reimagines how digital products should feel and function. By blending clear strategy, thoughtful design, and robust engineering, we created an experience that removes friction and elevates interaction.</p>
            <p>This project reimagines how digital products should feel and function. By blending clear strategy, thoughtful design, and robust engineering, we created an experience that removes friction and elevates interaction.</p>
          </div>
        </div>

        <div className="space-y-10 pt-16">
          <div className="">
            <p className='font-bold text-xl uppercase'>CLIENT</p>
            <p className='font-thin'>Disrptve</p>
          </div>
          <div className="">
            <p className='font-bold text-xl uppercase'>Project type</p>
            <p className='font-thin'>Product Build</p>
            <p className='font-thin'>Full-Stack App</p>
            <p className='font-thin'>Scalable Platform</p>
            <p className='font-thin'>Custom Build</p>
            <p className='font-thin'>End-to-End Build</p>
          </div>
          <div className="">
            <p className='font-bold text-xl uppercase'>team</p>
            <p className='font-thin'>Product Design </p>
            <p className='font-thin'> Development</p>
          </div>
        </div>

      </div>


      <div className="w-full padding gap-5 grid grid-cols-2">
        <div className="col-span-2 h-screen w-full">
          <img className='cover' src="https://cdn.prod.website-files.com/63dbcb270006fb086fcc5eef/66db085097593d24144a2197_la-graine-1.avif" alt="" />
        </div>
        <div className="w-full">
          <img className='cover' src="https://cdn.prod.website-files.com/63dbcb270006fb086fcc5eef/66db084c3d2c9af608765bbd_la-graine-2.avif" alt="" />
        </div>
        <div className="w-full">
          <img className='cover' src="https://cdn.prod.website-files.com/63dbcb270006fb086fcc5eef/66db084b9125c48c80555466_la-graine-4.avif" alt="" />
        </div>
      </div>


      <div className="w-screen py-32!  padding text_blue grid grid-cols-[25%_32%_43%]">
        <div className="">
          <p className=' split_wrd text-6xl spirit leading-none'>Projects</p>
        </div>
        <div className="text-xs uppercase leading-tight pt-5">
          <p className='split_wrd'>Brands we’ve </p>
          <p className='split_wrd'>worked with.</p>
        </div>
        <div className="text-4xl  pl-2">
          <p className="spirit split_wrd"> <span className='opacity-0 pointer-events-none'>..............................</span> We work with startups, studios, and growing brands to design and build digital products that are clear, scalable, and impactful.</p>
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
                <div className=" w-full aspect-[3.2/4]">
                  <img src={item.img} alt="" className="cover" />
                </div>
                <div className="">
                <div className="w-full flex items-center justify-between">
                <p className="text-lg font-semibold ">{item.title}</p>
                <p className="text-lg font-semibold ">2025</p>
                </div>
                <p className="text-sm uppercase">{item.category}</p>

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

export default page