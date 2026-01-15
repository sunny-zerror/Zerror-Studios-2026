"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "next-view-transitions";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { RiArrowRightUpLine } from "@remixicon/react";

const MENU_ITEMS = [
  {
    id: "home",
    label: "Home",
    image: "/images/menu/1.jpg",
    href: `/`,
  },
  {
    id: "about",
    label: "About",
    image: "/images/menu/2.jpg",
    href: `/about`,
  },
  {
    id: "work",
    label: "Our Work",
    image: "/images/menu/3.jpg",
    href: `/work`,
  },
  {
    id: "expertise",
    label: "Expertise",
    image: "/images/menu/4.jpg",
    expertise: [
      "⁠Website Development",
      "E-commerce Development",
      "Custom CMS Development",
      "Branding, Marketing & SEO",
    ],
    href: `/`,
  },
  {
    id: "contact",
    label: "Contact",
    image: "/images/menu/5.jpg",
    href: `/contact`,
  },
];

const SOCIAL_LINKS = ["LinkedIn", "Instagram", "Behance"];

//  Without Opacity down hove ->

// const MenuItem = React.forwardRef(({ item, showBorderTop, href, closeMenu }, ref) => {
//   return (
//     <Link href={href} onClick={closeMenu} >

//       <div
//         ref={ref}
//         className={`w-full flex gap-2 py-2.5 border-b border-[#c9cfe482]
//       ${showBorderTop ? "border-t" : ""}
//        transition-opacity duration-300 ease-out
//     group-hover/menu:opacity-70
//     hover:!opacity-100

//       `}
//       >
//         <div className="w-28 aspect-4/3  overflow-hidden">
//           <img src={item.image} className="w-26 aspect-4/3  object-cover" />
//         </div>

//         <p className={`mr-auto  ${item.expertise? ('mt-[1.5vw]'):('my-auto')}   uppercase text-[1rem] text-[#002BBA] ibm font-semibold `}>{item.label}</p>

//         {item.expertise && (
//           <div className="w-1/2 grid grid-cols-2 border-l border-[#c9cfe482] text-[#001BA7]">
//             {item.expertise.map((text, i) => (
//               <div
//                 key={i}
//                 className="px-3 py-2 border-r border-[#c9cfe482] flex flex-col text-[0.9rem] gap-1"
//               >
//                 <p className=" text-sm ibm font-semibold ">{String(i + 1).padStart(2, "0")}/</p>
//                 <p className="text-sm leading-3.75">{text}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </Link>
//   );
// });

// Opacity down hove ->
const MenuItem = React.forwardRef(
  ({ item, showBorderTop, href, closeMenu }, ref) => {
    return (
      <Link
        href={href}
        onClick={closeMenu}
        className="block opacity-100 transition-opacity duration-300 ease-out group-hover/menu:opacity-50 hover:!opacity-100"
      >
        <div
          ref={ref}
          className={`w-full flex gap-2 py-2.5 border-b border-[#c9cfe482] ${
            showBorderTop ? "border-t" : ""
          }`}
        >
          <div className="w-28 aspect-4/3  overflow-hidden">
            <img src={item.image} className="w-26 aspect-4/3  object-cover" />
          </div>

          <p
            className={`mr-auto ${
              item.expertise ? "mt-[1.5vw]" : "my-auto"
            } uppercase text-[1rem] text-[#002BBA] ibm font-semibold`}
          >
            {item.label}
          </p>

          {item.expertise && (
            <div className="w-1/2 grid grid-cols-2 border-l border-[#c9cfe482] text-[#001BA7]">
              {item.expertise.map((text, i) => (
                <div
                  key={i}
                  className="px-3 py-2 border-r border-[#c9cfe482] flex flex-col gap-1"
                >
                  <p className="text-sm ibm font-semibold">
                    {String(i + 1).padStart(2, "0")}/
                  </p>
                  <p className="text-sm leading-tight">{text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Link>
    );
  }
);

MenuItem.displayName = "MenuItem";

const Header = () => {
  const pathname = usePathname();
  const menuTL = useRef();
  const menuRef = useRef();
  const preMenuRef = useRef();
  const itemsRef = useRef([]);

  // useLayoutEffect(() => {
  //   // INITIAL STATES (CRITICAL)
  //   gsap.set(menuRef.current, {
  //     autoAlpha: 0,
  //     pointerEvents: "none",
  //   });

  //   gsap.set(preMenuRef.current, {
  //     autoAlpha: 1,
  //     pointerEvents: "auto",
  //   });

  //   gsap.set(itemsRef.current, {
  //     autoAlpha: 0,
  //     y: 20,
  //   });

  //   // TIMELINE
  //   menuTL.current = gsap.timeline({ paused: true });

  //   menuTL.current
  //   .from(menuRef.current, {
  //     height:'48px',
  //   })
  //     .to(menuRef.current, {
  //       autoAlpha: 1,
  //       pointerEvents: "auto",
  //       duration: 0.2,
  //       ease: "power4.inOut",
  //     })
  //     .to(
  //       preMenuRef.current,
  //       {
  //         autoAlpha: 0,
  //         pointerEvents: "none",
  //         duration: 0.8,
  //         ease: "power1.out",
  //       },
  //       "<"
  //     )
  //     .to(
  //       itemsRef.current,
  //       {
  //         autoAlpha: 1,
  //         y: 0,
  //         stagger: 0.08,
  //         duration: 0.5,
  //         ease: "power1.out",
  //       },
  //       "-=0.4"
  //     );

  //   return () => menuTL.current.kill();
  // }, []);

  // const openMenu = () => menuTL.current.play();
  // const closeMenu = () => menuTL.current.timeScale(2).reverse();

  useLayoutEffect(() => {
    /* Premium motion defaults */
    gsap.defaults({
      ease: "power3.out",
    });

    /* INITIAL STATES */
    gsap.set(menuRef.current, {
      autoAlpha: 0,
      pointerEvents: "none",
      scaleY: 0.88,
      y: -4,
      transformOrigin: "top",
      willChange: "transform, opacity",
    });

    gsap.set(preMenuRef.current, {
      autoAlpha: 1,
    });

    gsap.set(itemsRef.current, {
      autoAlpha: 0,
      y: 16,
      willChange: "transform, opacity",
    });

    /* TIMELINE */
    menuTL.current = gsap.timeline({ paused: true });

    menuTL.current
      /* Container reveal */
      .to(menuRef.current, {
        autoAlpha: 1,
        scaleY: 1,
        y: 0,
        pointerEvents: "auto",
        duration: 0.38,
        ease: "expo.out",
      })

      /* MENU → fade */
      .to(
        preMenuRef.current,
        {
          autoAlpha: 0,
          duration: 0.2,
          ease: "power2.out",
        },
        "<"
      )

      /* Items cascade */
      .to(
        itemsRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          stagger: {
            each: 0.055,
            ease: "power3.out",
          },
        },
        "-=0.25"
      );

    return () => menuTL.current?.kill();
  }, []);

  const openMenu = () => {
    /* Smooth & calm open */
    menuTL.current.timeScale(1).play();
  };

  const closeMenu = () => {
    /* Fast, clean close */
    menuTL.current.timeScale(3).reverse();
  };

  return (
    <div className="fixed top-0 left-0 w-full  z-80 px-10 py-5 flex justify-center">
      <div className="flex gap-4">
        {/* MENU BUTTON */}
        <div className="relative border border-black/20 w-[35vw] h-12 bg-[#FFFFFF5C] backdrop-blur-3xl rounded-lg px-7  group transition-all duration-150 ease-out  flex justify-between items-center gap-4">
          <div
            onClick={openMenu}
            className="  w-full h-12 flex justify-between items-center select-none cursor-pointer group transition-all duration-150 ease-in"
          >
            <p
              ref={preMenuRef}
              // onClick={openMenu}
              className="premenu  text-white select-none cursor-pointer"
            >
              MENU
            </p>

            <div
              // onClick={openMenu}
              className="w-fit h-12 select-none cursor-pointer  flex flex-col justify-center items-center gap-1 group transition-all duration-150 ease-in  group-hover:gap-2 "
            >
              <span className="w-8  h-[1px] bg-[#ffffff]" />
              <span className="w-8  h-[1px] bg-[#ffffff]" />
            </div>
          </div>

          {/* OPEN MENU */}
          <div
            ref={menuRef}
            className="absolute top-0 left-0 w-full opacity-0 bg-white rounded-lg  pointer-events-none pt-2"
          >
            <div
              onClick={closeMenu}
              className="h-12 px-7 flex justify-between items-center  select-none cursor-pointer"
            >
              <Link href={"/"}>
                <img src="/svg/zerror.svg" className="h-5" />
              </Link>
              <span className="w-4 h-[2px] bg-[#001BA7]" />
            </div>

            <div className="px-7 pt-4 pb-7 group/menu">
              {MENU_ITEMS.map((item, i) => (
                <MenuItem
                  closeMenu={closeMenu}
                  key={item.id}
                  item={item}
                  showBorderTop={i === 0}
                  href={item.href}
                  ref={(el) => (itemsRef.current[i] = el)}
                />
              ))}

              <div className="pt-6 flex flex-col gap-1 uppercase text_blue ">
                {SOCIAL_LINKS.map((link, i) => (
                  <button
                    key={link}
                    ref={(el) => (itemsRef.current[MENU_ITEMS.length + i] = el)}
                    className=" relative w-fit opacity-100 transition-all duration-300 ease-out group/social group-hover/menu:opacity-50 hover:!opacity-100"
                  >
                    {/* underline */}
                    <span className=" absolute left-0 -bottom-[2px] h-[1px] w-0 bg_blue transition-all duration-300 ease-out group-hover/social:w-full" />

                    <p className="capitalize ibm font-semibold text-sm">
                      {link}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECOND BUTTON */}
        {pathname === "/deck" ? (
          <Link href={"/"}>
            <div className="w-17 h-12 border border-black/20 mix-blend-difference bg-[#FFFFFF5C] backdrop-blur-3xl group transition-all duration-300  rounded-lg overflow-hidden flex items-center relative justify-center">
              <div className="w-5  h-3 border border-[#d4d4d4] rounded-[2px] group-hover:top-1/2 group-hover:left-1/2  transition-all duration-300 absolute top-[50.5%] left-[55%] -translate-x-[50%] -translate-y-[50%] "></div>
              <div className="w-5  h-3 border-l border-t border-[#d4d4d4bd] group-hover:top-1/2 group-hover:left-1/2  rounded-[2px] transition-all duration-300 absolute top-[44.5%] left-[51%] -translate-x-[50%] -translate-y-[50%] "></div>
              <div className="w-5  h-3 border-l border-t border-[#d4d4d4bd] group-hover:top-1/2 group-hover:left-1/2  rounded-[2px] transition-all duration-300 absolute top-[40%] left-[47%] -translate-x-[50%] -translate-y-[50%] "></div>
              <div className="absolute inset-[-100%] pointer-events-none z-20 bg-[linear-gradient(-45deg,transparent_30%,rgba(255,255,255,0.6)_50%,transparent_70%)]  -translate-x-full -translate-y-full transition-transform duration-700 ease-out group-hover:translate-x-full group-hover:translate-y-full" />
            </div>
          </Link>
        ) : (
          <Link href="/deck">
            <div className="w-17 h-12 border border-black/20 mix-blend-difference bg-[#FFFFFF5C] backdrop-blur-3xl group transition-all duration-300  rounded-lg overflow-hidden flex items-center relative justify-center">
              <div className="w-5  h-3 border border-[#d4d4d4] rounded-[2px] group-hover:top-1/2 group-hover:left-1/2  transition-all duration-300 absolute top-[50.5%] left-[55%] -translate-x-[50%] -translate-y-[50%] "></div>
              <div className="w-5  h-3 border-l border-t border-[#d4d4d4bd] group-hover:top-1/2 group-hover:left-1/2  rounded-[2px] transition-all duration-300 absolute top-[44.5%] left-[51%] -translate-x-[50%] -translate-y-[50%] "></div>
              <div className="w-5  h-3 border-l border-t border-[#d4d4d4bd] group-hover:top-1/2 group-hover:left-1/2  rounded-[2px] transition-all duration-300 absolute top-[40%] left-[47%] -translate-x-[50%] -translate-y-[50%] "></div>
              <div className="absolute inset-[-100%] pointer-events-none z-20 bg-[linear-gradient(-45deg,transparent_30%,rgba(255,255,255,0.6)_50%,transparent_70%)]  -translate-x-full -translate-y-full transition-transform duration-700 ease-out group-hover:translate-x-full group-hover:translate-y-full" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
