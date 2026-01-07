"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);

const ServicesData = [
  {
    id: 1,
    title: 'Complete website',
    services: ["MoodBoard", "Wireframing", "Design", "Development", "Testing", "Deployment"]
  },
  {
    id: 2,
    title: 'Ui Design',
    services: ["MoodBoard", "design concepts", "animation", "webdesign"]
  },
  {
    id: 3,
    title: 'ux design',
    services: ["Wireframing", "ux research", "website audit"]
  },
  {
    id: 4,
    title: 'Web Development',
    services: ["Design", "Development", "Testing", "Deployment"]
  },
]
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Services = () => {

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.services_paren',
        start: 'top top',
        pin: true,
        scrub: true
      }
    })
    tl.to(".expand_circ", {
      height: "120vw",
      width: "120vw",
      ease: "none",
    })
  })

  useEffect(() => {
  const items = document.querySelectorAll(".service-item");

  // INTERSECTION OBSERVER
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          const chars = entry.target.querySelectorAll(".char");
          animateChars(chars);

          entry.target.dataset.animated = "true"; // run once
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  items.forEach((item) => {
    const chars = item.querySelectorAll(".char");

    observer.observe(item);

    // HOVER (replay allowed)
    item.addEventListener("mouseenter", () => {
      animateChars(chars);
    });
  });

  return () => observer.disconnect();
}, []);


  return (
    <>
      <div className="w-full relative h-screen center flex-col gap-y-8 text-center">
        <p className="text-6xl pb-5 capitalize font-semibold w-1/2 bg-clip-text text-transparent bg-[url('/images/homePage/mask_img.webp')] bg-fixed bg-cover bg-center">
          To build zero-error digital products where design and technology move as one.
        </p>
      </div>

      <div className=" services_paren overflow-hidden w-full h-screen relative  grid grid-cols-2 gap-x-24 ">
        <div className="expand_circ overflow-hidden size-3.5 z-10 center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shrink-0 bg_blue rounded-full ">
          <div className=" padding space-y-32 w-screen shrink-0 text-white font-semibold  grid grid-cols-2">
            <div className="">
              <p className=' font-bold  text-5xl leading-none uppercase'>Our <br /> clients</p>
            </div>
            <div className="text-base leading-none capitalize">
              <p className=''>Brands we’ve </p>
              <p className=''>worked with</p>
            </div>
            <div className=""></div>
            <div className="capitalize text-3xl pl-2">
              <p>  We work with startups, studios, and growing brands to design and build digital products that are clear, scalable, and impactful.</p>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col items-center gap-y-12 justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-px bg-[#D3D3D3] h-full"></div>
          <div className="size-3.5 opacity-0 shrink-0 bg_blue rounded-full "></div>
          <div className="w-px bg-[#D3D3D3] h-full"></div>
        </div>
        {ServicesData.map((item, i) => {
          const words = item.title.split(" ");
          const mid = Math.ceil(words.length / 2);

          return (
            <div
              key={item.id}
              className={`service-item  w-full group center flex-col gap-y-5 uppercase text-center h-full ${i === 0 || i === 1 ? "" : "border-t border-[#D3D3D3]"
                }`}
            >
              <p className="text-3xl leading-none transition-all duration-300">
                <span className="block">
                  {splitToChars(words.slice(0, mid).join(" "))}
                </span>
                <span className="block">
                  {splitToChars(words.slice(mid).join(" "))}
                </span>
              </p>

              <p className="text-base w-1/3 leading-none tracking-wide">
                {item.services.map((service, i) => (
                  <span key={service}>
                    {service}
                    {i !== item.services.length - 1 && " / "}
                  </span>
                ))}
              </p>
            </div>
          );
        })}

      </div>
    </>
  )
}

export default Services





const splitToChars = (text) =>
  text.split("").map((char, i) => (
    <span
      key={i}
      className="char inline-block opacity-0"
      data-char={char}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));


  const animateChars = (chars) => {
  chars.forEach((char, i) => {
    const original = char.dataset.char;

    gsap.fromTo(
      char,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: i * 0.04,
      }
    );

    gsap.delayedCall(i * 0.04, () => {
      let iterations = 0;

      const scramble = setInterval(() => {
        char.textContent =
          letters[Math.floor(Math.random() * letters.length)];
        iterations++;

        if (iterations > 8) {
          clearInterval(scramble);
          char.textContent = original;
        }
      }, 30);
    });
  });
};