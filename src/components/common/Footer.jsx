"use client";
import React, {useEffect} from "react";
import gsap from "gsap";

const hoverIn = (selector) => {
  gsap.to(selector, {
    backgroundColor: "#2147c4",
    ease: "power4.in",
    duration: 0.06,
  });
};

const hoverOut = (selector) => {
  gsap.to(selector, {
    backgroundColor: "#2147c400",
    ease: "power1.in",
    duration: 0.4,
  });
};



const footerRows = [
  {
    id: "I",
    items: [
      {
        text: "Built to last.",
        align: "absolute top-[5%] left-[5%]",
        hover: "group-hover:top-[90%]",
      },
      {},
      { img: "/svg/e.svg", hover: "hover:pb-10" },
      {},
      {
        text: "Prototypes that bring ideas to life.",
        align: "absolute top-[5%] left-[5%]",
        hover: "group-hover:top-[80%]",
      },
      {},
      {},
      { img: "/svg/o.svg", hover: "hover:pb-10" },
      {},
    ],
  },
  {
    id: "S",
    items: [
      {},
      { img: "/svg/z.svg", hover: "hover:pb-10" },
      {},
      {},
      {},
      { img: "/svg/r.svg", hover: "hover:pb-10" },
      {
        text: "Bengaluru, India",
        align: "absolute top-[5%] left-[5%]",
        hover: "group-hover:top-[85%]",
      },
      {
        text: "Design. Development. Marketing.",
        align: "absolute bottom-[5%] left-[5%]",
        hover: "group-hover:bottom-[80%]",
      },
      { img: "/svg/r.svg", hover: "hover:pb-10" },
    ],
  },
  {
    id: "T",
    items: [
      {
        text: "Where ideas become usable.",
        align: "absolute bottom-[5%] left-[5%]",
        hover: "group-hover:bottom-[80%]",
      },
      {},
      {
        text: "Crafted with intent.",
        align: "absolute top-[5%] left-[5%]",
        hover: "group-hover:top-[85%]",
      },
      {},
      { img: "/svg/r.svg", hover: "hover:pb-10" },
      {
        text: "Refine through feedback.",
        align: "absolute top-[5%] left-[5%]",
        hover: "group-hover:top-[85%]",
      },
      {},
      {},
      {
        text: "© 2025 Zerror Studio. All rights reserved. Made by the Zerror Team.",
        align: "absolute bottom-[5%] left-[5%]",
        hover: "group-hover:bottom-[70%]",
      },
    ],
  },
];

const Footer = () => {

   useEffect(() => {
  const textEls = document.querySelectorAll(".glitch-text");

  const glitchRandomTwo = () => {
    if (textEls.length < 2) return;

    const allEls = Array.from(textEls);
    const shuffled = allEls.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 2);

    gsap.fromTo(
      selected,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "steps(1)",
        immediateRender: true,
        overwrite: 'auto',
        onComplete: () => {
          gsap.set(selected, { opacity: 1 }); // Ensure it returns to visible
          gsap.delayedCall(
            gsap.utils.random(0.08, 0.2),
            glitchRandomTwo
          );
        },
      }
    );
  };

  gsap.delayedCall(0.1, glitchRandomTwo); // Slight delay to ensure DOM is ready

  return () => {
    gsap.killTweensOf(".glitch-text");
  };
}, []);


  return (
    <div className="w-full h-screen bg-[#012CBA] p-[2vw]">
      <div className="w-full h-full p-3">
        {footerRows.map((row) => (
          <div key={row.id} className="w-full h-1/3 grid grid-cols-9">
            {row.items.map((item, i) => {
              const selector = `.hoverBg${row.id}${i}`;
              const isImage = !!item.img;

              return (
                <div
                  key={i}
                  onMouseEnter={() => hoverIn(selector)}
                  onMouseLeave={() => hoverOut(selector)}
                  className={`w-full hoverBg${
                    row.id
                  }${i}  border relative  group border-white/10 transition-all duration-300 ease-in rounded-lg flex text-white  leading-tight
                   
                    ${
                      isImage ? "px-0 py-0 justify-center  items-center" : "p-5"
                    }
                  `}
                >
                  {item.img && (
                    <img src={item.img} alt="icon" className="w-[4vw]" />
                  )}

                  {item.text && (
                    <span
                      className={`glitch-text  transition-all duration-300  ${item.align}
                        ${item.hover}
                     `}
                     style={{ willChange: 'opacity',  transition: 'top 0.3s ease-in, bottom 0.3s ease-in' }} // Only transition position, not opacity  }}
                    >
                      {item.text}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
