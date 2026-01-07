'use client'
import React from "react";
import gsap from "gsap";

const Footer = () => {

    const handelMouseEnter = (item) => {
    gsap.to(item, {
      backgroundColor: "#2147c4",
      ease: "power4.in",
      duration: 0.06,
    });
  };

  const handelMouseLeave = (item) => {
    gsap.to(item, {
      backgroundColor: "#2147c400",
      ease: "power1.in",
      duration: 0.4,
    });
  };

  return (
    <div className="w-full h-screen bg-[#012CBA] p-[2vw]">
      <div className="w-full crd card1 h-full p-3  ">
        {/* 1 */}
        <div className="w-full h-1/3 flex">
          {["Built to last.", "", "/svg/e.svg", "", "Prototypes that bring ideas to life.", "", "", "/svg/o.svg", ""].map(
            (item, i) => {
              const isImage = item.endsWith(".svg");
              return (
                <div
                  onMouseEnter={() => handelMouseEnter(`.hoverBgAnimateI${i}`)}
                  onMouseLeave={() => handelMouseLeave(`.hoverBgAnimateI${i}`)}
                  key={i}
                  className={` w-1/9 glitch-item  hoverBgAnimateI${i}  border bg-[#fa331000] border-[#d3d3d36c] flex ${
                    i == 0 && "items-start"
                  } text-[#f5f5f5b6] rounded-lg text-[1vw] leading-[1vw] py-5 px-15 ${isImage && (' px-0 py-0 justify-center items-center')} `}
                >
                  {isImage ? (
                    <img src={item} alt="icon" className="w-[4vw]" />
                  ) : (
                    item && <span>{item}</span>
                  )}
                </div>
              );
            }
          )}
        </div>

        {/* 2 */}
        <div className="w-full h-1/3 flex">
          {["", "/svg/z.svg", "", "", "", "/svg/r.svg", "Bengaluru, India", "Design. Development. Marketing.", "/svg/r.svg"].map(
            (item, i) => {
              const isImage = item.endsWith(".svg");
              return (
                <div
                  onMouseEnter={() => handelMouseEnter(`.hoverBgAnimateS${i}`)}
                  onMouseLeave={() => handelMouseLeave(`.hoverBgAnimateS${i}`)}
                  key={i}
                  className={` w-1/9 glitch-item  hoverBgAnimateS${i}  border bg-[#fa331000] border-[#d3d3d36c] flex ${
                    i == 0 && "items-start justify-center" 
                  } ${i == 7 && "items-end justify-center"} text-[#f5f5f5b6] rounded-lg text-[1vw] leading-[1vw] py-5 px-15 ${isImage && (' px-0 py-0 justify-center items-center')} `}
                >
                  {isImage ? (
                    <img src={item} alt="icon" className="w-[4vw]" />
                  ) : (
                    item && <span>{item}</span>
                  )}
                </div>
              );
            }
          )}
        </div>

        {/* 3 */}
         <div className="w-full h-1/3 flex">
          {["Where ideas become usable.", "", "Crafted with intent.", "", "/svg/r.svg", "Refine through feedback.", "", "", "© 2025 Zerror Studio. All rights reserved. Made by the Zerror Team."].map(
            (item, i) => {
              const isImage = item.endsWith(".svg");
              return (
                <div
                  onMouseEnter={() => handelMouseEnter(`.hoverBgAnimateT${i}`)}
                  onMouseLeave={() => handelMouseLeave(`.hoverBgAnimateT${i}`)}
                  // #2147c4
                  key={i}
                  className={` w-1/9 glitch-item  hoverBgAnimateT${i}  border bg-[#2147c400] border-[#d3d3d36c] flex ${
                    i == 0 && "items-end justify-center px-15" 
                  } ${i == 2 && "items-start justify-center px-15" }  ${i == 7 && "items-end justify-center text-center "} ${i == 8 && "items-end justify-center px-5 "} ${i == 5 && "  justify-center text-center "} text-[#f5f5f5b6] rounded-lg text-[1vw] leading-[1vw] py-5  ${isImage && (' px-0 py-0 justify-center items-center')} `}
                >
                  {isImage ? (
                    <img src={item} alt="icon" className="w-[4vw]" />
                  ) : (
                    item && <span>{item}</span>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
