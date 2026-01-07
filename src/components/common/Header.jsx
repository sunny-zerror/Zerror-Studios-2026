'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
   const menuTL = useRef(null);

  useEffect(() => {
    menuTL.current = gsap.timeline({ paused: true });

    menuTL.current
      .set(".opnMenu", {
        transformOrigin: "top",
        scaleY: 0,
        height:'48px',
        opacity: 0,
        pointerEvents: "none",
      })
      .to(".opnMenu", {
        scaleY: 1,
        height:'75vh',
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
      .to(
        ".pre-menu",
        {
          opacity: 0,
          // duration: 0.3,
          pointerEvents: "none",
        },
        0
      );
  }, []);

  const ManuActivate = () => {
    menuTL.current.play();
  };

  const ManuDeActivate = () => {
    menuTL.current.reverse();
  };

  return (
    <>
      <div className="w-full h-fit px-10 flex justify-between py-5 items-center fixed top-0 left-0 z-50">
        <img
          src={`/svg/Logo.svg`}
          alt="logo"
          className="w-[2rem] select-none cursor-pointer"
        />

        <div className="w-fit h-fit flex  gap-4 ">
          <div className="w-full h-12 rounded-lg relative flex bg-[#FFFFFF5C] backdrop-blur-3xl group gap-88 transition-all ease-in cursor-pointer duration-200 px-7 justify-center items-center">
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

            <div className="w-full opnMenu h-12 opacity-0 rounded-lg flex flex-col bg-white pointer-events-none absolute top-0 left-0 z-60">
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
            </div>
          </div>

          <div className="w-17 flex h-12 bg-[#FFFFFF5C] backdrop-blur-3xl relative rounded-lg select-none cursor-pointer justify-center items-center ">
            <img
              src={`/svg/MenuVectorBox.svg`}
              alt="MVB"
              className="w-[1rem]"
            />
          </div>
        </div>

        <p className="text-[#f5f5f5] RF_Font hover:text-[#858585] transition-all ease-in cursor-pointer duration-200 uppercase text-[0.8rem]">
          Contact
        </p>
      </div>
    </>
  );
};

export default Header;
