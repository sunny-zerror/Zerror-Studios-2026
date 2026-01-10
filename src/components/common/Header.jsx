
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "next-view-transitions";
import { useLayoutEffect } from "react";

const MENU_ITEMS = [
  {
    id: "home",
    label: "Home",
    image: "/images/plpImg/img1.webp",
    href: `/`,
  },
  {
    id: "studio",
    label: "Studio",
    image: "/images/plpImg/img2.webp",
    href: `/`,
  },
  {
    id: "work",
    label: "Our Work",
    image: "/images/plpImg/img3.webp",
    href: `/`,
  },
  {
    id: "expertise",
    label: "Expertise",
    image: "/images/plpImg/img4.webp",
    expertise: [
      "Website Development",
      "UI/UX Design, Development",
      "Brand Identity",
      "Motion Design",
    ],
     href: `/`,
  },
  {
    id: "contact",
    label: "Contact",
    image: "/images/plpImg/img5.webp",
    href: `/contact`,
  },
];

const SOCIAL_LINKS = ["LinkedIn", "Instagram", "Behance"];

const MenuItem = React.forwardRef(({ item, showBorderTop, href }, ref) => {
  return (
    <Link href={href} >
    
    <div
      ref={ref}
      className={`w-full flex gap-4 py-4 border-b border-[#e0e0e0]
      ${showBorderTop ? "border-t" : ""}`}
    >
      <div className="w-20.5 h-13.5 overflow-hidden">
        <img src={item.image} className="w-full h-full object-cover" />
      </div>

      <p className="mr-auto text-[#002BBA]">{item.label}</p>

      {item.expertise && (
        <div className="w-1/2 grid grid-cols-2 border-l border-[#e0e0e0] text-[#001BA7]">
          {item.expertise.map((text, i) => (
            <div
              key={i}
              className="px-4 py-4 border-r border-[#e0e0e0] text-[0.9rem]"
            >
              <p className="RF_Font">{String(i + 1).padStart(2, "0")}/</p>
              <p>{text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </Link>
  );
});

const Header = () => {
  const menuTL = useRef();
  const menuRef = useRef();
  const preMenuRef = useRef();
  const itemsRef = useRef([]);

  // useEffect(() => {
  //   menuTL.current = gsap.timeline({ paused: true });

  //   menuTL.current
  //     .to(menuRef.current, {
  //       opacity: 1,
  //       pointerEvents: "auto",
  //       duration: 0.8,
  //       ease: "power4.out",
  //     })
  //     .to(
  //       preMenuRef.current,
  //       {
  //         opacity: 0,
  //         pointerEvents: "none",
  //         duration: 0.8,
  //       },
  //       "<"
  //     )
  //     .from(
  //       itemsRef.current,
  //       {
  //         opacity: 0,
  //         y: 20,
  //         stagger: 0.08,
  //         duration: 0.5,
  //         ease: "power2.out",
  //       },
  //       "-=0.4"
  //     );
  // }, []);

  useLayoutEffect(() => {
    // INITIAL STATES (CRITICAL)
    gsap.set(menuRef.current, {
      autoAlpha: 0,
      pointerEvents: "none",
    });

    gsap.set(preMenuRef.current, {
      autoAlpha: 1,
      pointerEvents: "auto",
    });

    gsap.set(itemsRef.current, {
      autoAlpha: 0,
      y: 20,
    });

    // TIMELINE
    menuTL.current = gsap.timeline({ paused: true });

    menuTL.current
      .to(menuRef.current, {
        autoAlpha: 1,
        pointerEvents: "auto",
        duration: 0.8,
        ease: "power4.out",
      })
      .to(
        preMenuRef.current,
        {
          autoAlpha: 0,
          pointerEvents: "none",
          duration: 0.8,
          ease: "power4.out",
        },
        "<"
      )
      .to(
        itemsRef.current,
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.4"
      );

    return () => menuTL.current.kill();
  }, []);

  const openMenu = () => menuTL.current.play();
  const closeMenu = () => menuTL.current.timeScale(2).reverse();

  return (
    <div className="fixed top-0 left-0 w-full  z-80 px-10 py-5 flex justify-center">
      <div className="flex gap-4">
        {/* MENU BUTTON */}
        <div className="relative w-[30vw] h-12 bg-[#FFFFFF5C] backdrop-blur-3xl rounded-lg px-7  group transition-all duration-150 ease-out  flex justify-between items-center gap-4">
          <p
            ref={preMenuRef}
            onClick={openMenu}
            className="premenu text-white select-none cursor-pointer"
          >
            MENU
          </p>

          <div
            onClick={openMenu}
            className="w-fit h-12 select-none cursor-pointer  flex flex-col justify-center items-center gap-1 group transition-all duration-150 ease-in hover:gap-2 "
          >
            <span className="w-8 h-[1px] bg-[#ffffff]" />
            <span className="w-8 h-[1px] bg-[#ffffff]" />
          </div>

          {/* OPEN MENU */}
          <div
            ref={menuRef}
            className="absolute top-0 left-0 w-full bg-white rounded-lg  pointer-events-none pb-4 pt-2"
          >
            <div
              onClick={closeMenu}
              className="h-12 px-7 flex justify-between items-center  select-none cursor-pointer"
            >
              <img src="/svg/zerror.svg" className="h-4" />
              <span className="w-6 h-[2px] bg-[#001BA7]" />
            </div>

            <div className="px-4 pt-10">
              {MENU_ITEMS.map((item, i) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  showBorderTop={i === 0}
                  href={item.href}
                  ref={(el) => (itemsRef.current[i] = el)}
                />
              ))}

              <div className="pt-6">
                {SOCIAL_LINKS.map((link, i) => (
                  <p
                    key={link}
                    ref={(el) => (itemsRef.current[MENU_ITEMS.length + i] = el)}
                    className="text-[#002BBA]"
                  >
                    {link}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECOND BUTTON */}
        <Link href="/deck">
          <div className="w-17 h-12 bg-[#FFFFFF5C] backdrop-blur-3xl group transition-all duration-150 ease-out rounded-lg overflow-hidden flex items-center relative justify-center">
            <div className="w-4 h-3 border border-[#d4d4d4] rounded-[2px] group-hover:top-1/2 group-hover:left-1/2  absolute top-[55%] left-[55%] -translate-x-[50%] -translate-y-[50%] "></div>
            <div className="w-4 h-3 border-l border-t border-[#d4d4d4bd] group-hover:top-1/2 group-hover:left-1/2  rounded-[2px] absolute top-[48%] left-[50%] -translate-x-[50%] -translate-y-[50%] "></div>
            <div className="w-4 h-3 border-l border-t border-[#d4d4d4bd] group-hover:top-1/2 group-hover:left-1/2  rounded-[2px] absolute top-[42%] left-[45%] -translate-x-[50%] -translate-y-[50%] "></div>

            <div className="absolute inset-[-100%] pointer-events-none z-20 bg-[linear-gradient(-45deg,transparent_30%,rgba(255,255,255,0.6)_50%,transparent_70%)] -translate-x-full -translate-y-full transition-transform duration-700 ease-out group-hover:translate-x-full group-hover:translate-y-full" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
