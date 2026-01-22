import React, { useCallback } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Flip from "gsap/dist/Flip";
gsap.registerPlugin(Flip);

gsap.registerPlugin(ScrollTrigger);

const OurTeam = ({
  SetmemberActive,
  flipStateRef,
  FormAnimDeactive,
  SetFormAnimDeactive,
}) => {

  const teamMembers = [
    {
      id: 1,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/1.png",
    },
    {
      id: 2,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/2.png",
    },
    {
      id: 3,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/3.png",
    },
    {
      id: 4,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/4.png",
    },
    {
      id: 5,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/1.png",
    },
    {
      id: 6,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/2.png",
    },
    {
      id: 7,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/3.png",
    },
    {
      id: 8,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/4.png",
    },
    {
      id: 9,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/2.png",
    },
    {
      id: 10,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/3.png",
    },
    {
      id: 11,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/3.png",
    },
    {
      id: 99,
    },
  ];

  // const ActiveAinmationGrid = (selector) => {
  //   const GT = gsap.timeline();

  //   // ❌ hovered grid ke pixels
  //   const excludedPixels = document.querySelectorAll(`${selector} .GDdiv`);

  //   // ✅ saare pixels
  //   const allPixels = document.querySelectorAll(".GDdiv");

  //   // 🔥 baaki sab (except hovered)
  //   const pixelsToAnimate = Array.from(allPixels).filter(
  //     (el) => !Array.from(excludedPixels).includes(el)
  //   );

  //   // safety
  //   gsap.killTweensOf(pixelsToAnimate);

  //   GT.to(pixelsToAnimate, {
  //     opacity: 1,
  //     duration: 0.001,
  //     stagger: {
  //       each: 0.0001,
  //       from: "random",
  //     },
  //     ease: "expo.out",
  //   });

  //   // GT.to(pixelsToAnimate, {
  //   //   opacity: 0,
  //   //   duration: 0.03,
  //   //   stagger: {
  //   //     each: 0.001,
  //   //     from: "random",
  //   //   },
  //   //   ease: "expo.out",
  //   // });
  // };

  // const DeActiveAinmationGrid = (selector) => {
  //   const GTB = gsap.timeline();

  //   // ❌ hovered grid ke pixels
  //   const excludedPixels = document.querySelectorAll(`${selector} .GDdiv`);

  //   // ✅ saare pixels
  //   const allPixels = document.querySelectorAll(".GDdiv");

  //   // 🔥 baaki sab (except hovered)
  //   const pixelsToAnimate = Array.from(allPixels).filter(
  //     (el) => !Array.from(excludedPixels).includes(el)
  //   );

  //   // safety
  //   gsap.killTweensOf(pixelsToAnimate);

  //   GTB.to(pixelsToAnimate, {
  //     opacity: 0,
  //     duration: 0.001,
  //     stagger: {
  //       each: 0.0001,
  //       from: "random",
  //     },
  //     ease: "expo.out",
  //   });
  // };


  // let scrollY = 0;

// const disableScroll = () => {
//   scrollY = window.scrollY;

//   document.body.style.position = "fixed";
//   document.body.style.top = `-${scrollY}px`;
//   document.body.style.left = "0";
//   document.body.style.right = "0";
//   document.body.style.width = "100%";
//   document.body.style.overflow = "hidden";

//   // GSAP ScrollTrigger bhi freeze
//   if (typeof ScrollTrigger !== "undefined") {
//     ScrollTrigger.getAll().forEach(st => st.disable());
//   }
// };

// const enableScroll = () => {
//   document.body.style.position = "";
//   document.body.style.top = "";
//   document.body.style.left = "";
//   document.body.style.right = "";
//   document.body.style.width = "";
//   document.body.style.overflow = "";

//   window.scrollTo(0, scrollY);

//   if (typeof ScrollTrigger !== "undefined") {
//     ScrollTrigger.getAll().forEach(st => st.enable());
//   }
// };





  /* ---------------- GRID ANIMATION ---------------- */

  const animateGridExcept = useCallback((excludeSelector, opacity) => {
    const excluded = document.querySelectorAll(`${excludeSelector} .GDdiv`);
    const excludedSet = new Set(excluded);

    const pixels = gsap.utils
      .toArray(".GDdiv")
      .filter((el) => !excludedSet.has(el));

    gsap.killTweensOf(pixels);

    gsap.to(pixels, {
      opacity,
      duration: 0.1,
      stagger: {
        each: 0.01,
        from: "random",
      },
      ease: "expo.out",
      overwrite: "auto",
    });
  }, []);

  const ActiveAinmationGrid = (selector) => animateGridExcept(selector, 1);

  const DeActiveAinmationGrid = (selector) => animateGridExcept(selector, 0);

  const div99Ref = useRef(null);

  const ActiveForm = () => {
    if(window.lenis){window.lenis.stop()}
    // 1️⃣ Current state capture karo
    // 🔥 Save original position
    flipStateRef.current = Flip.getState(div99Ref.current);

    const state = Flip.getState(div99Ref.current);

    // 2️⃣ Final fullscreen styles apply karo (no animation yet)
    div99Ref.current.style.position = "fixed";
    div99Ref.current.style.top = "50%";
    div99Ref.current.style.left = "50%";
    div99Ref.current.style.width = "75vw";
    div99Ref.current.style.height = "80vh";
    div99Ref.current.style.transform = "translate(-50%, -50%)";
    div99Ref.current.style.zIndex = "120";

    // 3️⃣ Text fade
    gsap.to(".OTText", {
      opacity: 0,
      duration: 0.5,
      ease: "power4.Out",
    });

    // 4️⃣ FLIP animation (magic ✨)
    Flip.from(state, {
      duration: 1.2,
      ease: "power3.inOut",
      absolute: true,
      onComplete: () => {
        SetmemberActive(true);
        SetFormAnimDeactive(true);
      },
    });
  };

  const DeactivateForm = () => {
     if(window.lenis){window.lenis.start()}
    // 1️⃣ Capture fullscreen state
    const state = Flip.getState(div99Ref.current);

    // 2️⃣ Reset styles (original grid styles)
    Object.assign(div99Ref.current.style, {
      position: "",
      top: "",
      left: "",
      width: "",
      height: "",
      transform: "",
      zIndex: "",
    });

    // 3️⃣ Fade text back
    gsap.to(".OTText", {
      opacity: 1,
      duration: 0.4,
      ease: "power2.inOut",
    });

    // 4️⃣ FLIP → back to grid
    Flip.from(state, {
      duration: 1,
      ease: "power3.inOut",
      absolute: true,
      onComplete: () => { SetmemberActive(false)}
    });
  };

  useEffect(() => {
    // jab FormAnimDeactive false ho
    if (FormAnimDeactive === false && div99Ref.current) {
      DeactivateForm();
    }
  }, [FormAnimDeactive]);


  return (
    <div className="w-full min-h-screen z-100 relative bg-white  ">
      <div className=" w-full px-10 pb-42">
        <div className="grid  gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => {
            // 👉 Special Blue Card for id 99
            if (member.id === 99) {
              return (
                <div
                  onClick={()=>{  ActiveForm()}}
                  key={member.id}
                  ref={div99Ref}
                  className="w-full h-full div99  aspect-[4/5] bg-[#002BBA] hover:bg-[#0735cc] flex flex-col justify-end p-6 gap-[20px] text-white cursor-pointer"
                >
                  <h2 className="text-[3.1rem] OTText leading-[3.1rem] RF_Font font-semibold spirit ">
                    Become A <br /> Zerrorian
                  </h2>

                  <p className="mt-4 text-[1rem] OTText leading-[1.1rem] opacity-90">
                    Join us in creating great work <br />
                    share your resume.
                  </p>
                </div>
              );
            }

            return (
              <div key={member.id} className="text-start relative">
                <div className="w-full h-fit relative ">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover object-top"
                  />

                  {/* Grid */}
                  <div
                    onMouseEnter={() =>
                      ActiveAinmationGrid(`.GridBox${member.id} `)
                    }
                    onMouseLeave={() =>
                      DeActiveAinmationGrid(`.GridBox${member.id} `)
                    }
                    style={{ gridTemplateColumns: "repeat(10, 1fr)" }}
                    className={` GridBox${member.id} absolute top-0 left-0 w-full h-full grid`}
                  >
                    {[...Array(10 * 10)].map((_, i) => (
                      <div
                        key={i}
                        className="w-full GDdiv h-full bg-white opacity-0 shrink-0"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xl font-semibold leading-none mt-2 mb-1 uppercase text_blue">
                  {member.name}
                </p>
                <p className="text_blue  leading-none text-sm">{member.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
