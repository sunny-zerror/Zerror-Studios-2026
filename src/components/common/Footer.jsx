'use client'
import React from "react";
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
      { text: "Built to last.", align: "items-start", hover: 'hover:pt-10' },
      {},
      { img: "/svg/e.svg", hover: 'hover:pb-10' },
      {},
      { text: "Prototypes that bring ideas to life.",  hover: 'hover:pt-10' },
      {},
      {},
      { img: "/svg/o.svg", hover: 'hover:pb-10' },
      {},
    ],
  },
  {
    id: "S",
    items: [
      {},
      { img: "/svg/z.svg", hover: 'hover:pb-10' },
      {},
      {},
      {},
      { img: "/svg/r.svg", hover: 'hover:pb-10' },
      { text: "Bengaluru, India", hover: 'hover:pt-10' },
      {
        text: "Design. Development. Marketing.",
        align: "items-end justify-center",
        hover: 'hover:pb-10'
      },
      { img: "/svg/r.svg", hover: 'hover:pb-10' },
    ],
  },
  {
    id: "T",
    items: [
      { text: "Where ideas become usable.", align: "items-end justify-center",  hover: 'hover:pb-10' },
      {},
      { text: "Crafted with intent.", align: "items-start justify-center",  hover: 'hover:pt-10' },
      {},
      { img: "/svg/r.svg", hover: 'hover:pb-10' },
      { text: "Refine through feedback.", align: "justify-center ", hover: 'hover:pt-10'  },
      {},
      {},
      {
        text: "© 2025 Zerror Studio. All rights reserved. Made by the Zerror Team.",
        align: "items-end justify-center",
        hover: 'hover:pb-10'
      },
    ],
  },
];


const Footer = () => {
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
                  className={`w-full hoverBg${row.id}${i} glitch-item border border-white/10 transition-all duration-300 ease-in rounded-lg flex text-white  leading-tight
                    ${item.align || ""}
                     ${item.hover || ""}
                    ${isImage ? "px-0 py-0 justify-center items-center" : "p-5"}
                  `}
                >
                  {item.img && (
                    <img src={item.img} alt="icon" className="w-[4vw]" />
                  )}

                  {item.text && <span>{item.text}</span>}
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
