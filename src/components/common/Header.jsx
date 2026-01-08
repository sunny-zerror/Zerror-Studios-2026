"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Link } from "next-view-transitions";

const Header = () => {
  const menuTL = useRef(null);

  const menuItems = [
    {
      id: "home",
      label: "Home",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop",
    },
    {
      id: "studio",
      label: "Studio",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop",
    },
    {
      id: "work",
      label: "Our Work",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    },
    {
      id: "expertise",
      label: "Expertise",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    },
    {
      id: "contact",
      label: "Contact",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
    },
  ];

  useEffect(() => {
    menuTL.current = gsap.timeline({ paused: true });

    menuTL.current
      .set(".opnMenu", {
        transformOrigin: "top",
        scaleY: 0,
        height: "48px",
        opacity: 0,
        pointerEvents: "none",
      })
      .to(".opnMenu", {
        scaleY: 1,
        height: "auto",
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        pointerEvents: "auto",
      })
      .to(
        ".fixMenu",
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.3"
      )

       // MENU ITEMS ANIMATION
  .to(
    ".menu-item",
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out",
    },
    "-=0.3"
  )

  // IMAGE ZOOM-IN
  .to(
    ".menu-img",
    {
      scale: 1,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
    },
    "<"
  )

  // SOCIAL LINKS
  .to(
    ".social-item",
    {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.06,
      ease: "power3.out",
    },
    "-=0.3"
  )

  // HIDE PRE MENU
  .to(
    ".pre-menu",
    {
      opacity: 0,
      pointerEvents: "none",
    },
    0
  )
  }, []);

  const ManuActivate = () => {
    menuTL.current.play();
  };

  const ManuDeActivate = () => {
    menuTL.current.reverse();
  };

  const socialLinks = ["LinkedIn", "Instagram", "Behance"];

  return (
    <>
      <div className="w-full h-fit px-10 flex justify-center py-5 items-center fixed top-0 left-0 z-80">
        {/* <img
          src={`/svg/Logo.svg`}
          alt="logo"
          className="w-[2rem] select-none cursor-pointer"
        /> */}

        <div className="w-fit h-fit flex  gap-4  ">
          <div className="w-full h-12 rounded-lg relative flex  bg-[#FFFFFF5C] backdrop-blur-3xl group gap-88 transition-all ease-in cursor-pointer duration-200 px-7 justify-center items-center">
            <p
              onClick={ManuActivate}
              className="RF_Font text-[0.8rem] text-[#f5f5f5] tracking-wide pre-menu"
            >
              MENU
            </p>

            <div
              onClick={ManuActivate}
              className="w-fit h-12 flex flex-col gap-1 group-hover:gap-2 z-70 pre-menu justify-center items-center transition-all ease-in cursor-pointer duration-200"
            >
              <div className="w-[0.5rem] h-[0.10rem] rounded-full bg-[#f5f5f5] flex mr-auto"></div>
              <div className="w-[0.9rem] h-[0.10rem] rounded-full bg-[#f5f5f5] flex"></div>
              <div className="w-[0.5rem] h-[0.10rem] rounded-full bg-[#f5f5f5] flex ml-auto"></div>
            </div>

            {/* Open-Menu */}

            <div className="w-full opnMenu h-12 opacity-0 pb-5 rounded-lg flex flex-col bg-white pointer-events-none absolute top-0 left-0 z-60">
              {/* Lable */}
              <div
                onClick={ManuDeActivate}
                className="w-full h-12 flex justify-between fixMenu opacity-0 items-center px-7 pt-3 whitespace-nowrap"
              >
                <img
                  src={"/svg/zerror.svg"}
                  className="h-[40%] object-cover object-center whitespace-nowrap"
                  alt=""
                />
                <div className="w-[0.9rem] h-[0.10rem] rounded-full bg-[#001BA7] flex whitespace-nowrap"></div>
              </div>

              {/* Menu-Content */}
              <div className="w-full h-fit   flex flex-col px-4 pt-10 ">
                {menuItems.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-full menu-item ${
                        index == 0 && "border-t border-[#e0e0e0]"
                      } h-fit flex border-b border-[#e0e0e0] items-center gap-4 py-4 ${
                        index == 3 && " justify-between items-start"
                      } `}
                    >
                      {/* Img-div*/}
                      <div className=" w-20.5 h-13.5 overflow-hidden ">
                        <img
                          src={item.image}
                          alt="img"
                          className=" menu-img w-full h-full object-cover object-center"
                        />
                      </div>
                      <p className=" tracking-tight text-[#002BBA] mr-auto">
                        {item.label}
                      </p>

                      <div
                        className={` w-1/2 h-fit flex flex-col items-end text-[#002BBA]  gap-4 ${
                          index !== 3 && "hidden"
                        } `}
                      >
                        {/* Top */}
                        <div className="w-full h-fit flex  text-[0.9rem] leading-[0.9rem] justify-center items-center">
                          {/* Left */}
                          <div className="w-1/2 h-fit flex flex-col justify-center  gap-2">
                            <p className="font-semibold">01/</p>
                            <p>Website Development</p>
                          </div>
                          {/* right */}
                          <div className="w-1/2 h-fit flex flex-col justify-center  gap-2">
                            <p className="font-semibold">02/</p>
                            <p>Website Development</p>
                          </div>
                        </div>
                        {/* Bottom */}
                        <div className="w-full h-fit flex text-[0.9rem] leading-[0.9rem] justify-center items-center ">
                          {/* Left */}
                          <div className="w-1/2 h-fit flex flex-col justify-center  gap-2">
                            <p className="font-semibold">03/</p>
                            <p>Website Development</p>
                          </div>
                          {/* right */}
                          <div className="w-1/2 h-fit flex flex-col justify-center  gap-2">
                            <p className="font-semibold">04/</p>
                            <p>Website Development</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Social-Cont */}
                <div className="w-full h-fit flex flex-col items-center pt-5 ">
                  {socialLinks.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="social-item w-full h-fit flex items-center"
                      >
                        <p className="text-[#002BBA] leading-normal">{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* SecondMenu */}
          <Link href={"/deck"}>
            <div className="w-17 flex h-12 bg-[#FFFFFF5C]  backdrop-blur-3xl group transition-all duration-150 ease-out relative rounded-lg select-none cursor-pointer justify-center items-center ">
              <img
                src={`/svg/MenuVectorBox.svg`}
                alt="MVB"
                className="w-[1rem] absolute top-[45%] left-[45%] group-hover:top-1/2  group-hover:left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out "
              />
              <img
                src={`/svg/MenuVectorBox.svg`}
                alt="MVB"
                className="w-[1rem] absolute top-[48%] left-[48%] group-hover:top-1/2 group-hover:left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out "
              />
              <img
                src={`/svg/MenuVectorBox.svg`}
                alt="MVB"
                className="w-[1rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
              />
            </div>
          </Link>
        </div>

        {/* <p className="text-[#f5f5f5] RF_Font hover:text-[#858585] transition-all ease-in cursor-pointer duration-200 uppercase text-[0.8rem]">
          Contact
        </p> */}
      </div>
    </>
  );
};

export default Header;
