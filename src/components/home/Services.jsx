"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);

const ServicesData = [
  {
    id: 1,
    title: 'Website Design & Development',
    services: ["Mood boarding", "UI/UX Design", "Frontend & Backend Development", "Responsive Design", "Performance & Security"]
  },
  {
    id: 2,
    title: 'Custom software Development',
    services: ["Content Architecture", "Headless CMS", "Admin Dashboards", "Custom Workflows", "Scalable Systems"]
  },
  {
    id: 3,
    title: 'ecommerce Development',
    services: ["Store Strategy", "UX-Led Design", "Payment & Checkout", "Platform Development", "Scalable Infrastructure"]
  },
  {
    id: 4,
    title: 'Branding, Marketing & SEO',
    services: ["Brand Identity", "Visual Systems", "Digital Marketing", "SEO Strategy", "Growth Optimization"]
  },
]
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Services = () => {

  useGSAP(() => {

    const split_wrd = SplitText.create(".split_wrd", { type: "words, chars" });
    gsap.set(split_wrd.words, { y: 50, opacity: 0, display: "inline-block" })

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.services_paren',
        start: 'top top',
        end: "+=250%",
        pin: true,
        scrub: true
      }
    })
    tl.to(".expand_circ", {
      height: "120vw",
      width: "120vw",
      ease: "linear",
    })
      .to(split_wrd.words, {
        y: 0,
        opacity: 1,
        stagger: 0.01
      })
  })

  useEffect(() => {
    const items = document.querySelectorAll(".service-item");

    const observer = new IntersectionObserver((entries) => {
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

      item.addEventListener("mouseenter", () => {
        animateChars(chars);
      });
    });

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <div className="w-full relative h-screen center flex-col gap-y-8 text-center">
        <p className="text-7xl pb-5 capitalize font-semibold w-1/2 bg-clip-text text-transparent bg-[url('/images/homePage/mask_img.webp')] bg-fixed bg-cover bg-center">
          To build zero-error digital products where design and technology move as one.
        </p>
      </div>

      <div className=" services_paren overflow-hidden w-full h-screen relative  grid grid-cols-2 gap-x-24 ">

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
              <p className="text-3xl font-bold text_blue leading-none transition-all duration-300">
                <span className="block">
                  {splitToChars(words.slice(0, mid).join(" "))}
                </span>
                <span className="block">
                  {splitToChars(words.slice(mid).join(" "))}
                </span>
              </p>

              <p className="text-sm w-1/2 text_blue font-semibold leading-tight ">
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

        <div className="expand_circ overflow-hidden size-3.5 z-10 center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shrink-0 bg_blue rounded-full ">
          <div className=" padding space-y-32 w-screen shrink-0 text-white   grid grid-cols-[25%_32%_43%]">
            <div className="col-span-3">
              <p className='split_wrd  capitalize pf_nine text-6xl   leading-none'>Our <br /> clients</p>
            </div>
            <div className="text-xs col-span-2 capitalize leading-tight pt-5">
              <p className='split_wrd'>Brands we’ve </p>
              <p className='split_wrd'>worked with</p>
            </div>
            <div className=" split_wrd capitalize text-4xl leading-none pl-2">
              <p> <span className='opacity-0'>...................................</span>  We work with startups, studios, and growing brands to design and build digital products that are clear, scalable, and impactful.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Services





const splitToChars = (text) =>
  text.split("").map((char, i) => (
    <span
      key={i}
      className={`char inline-block opacity-0 ${char === " " ? "w-[0.35em]" : ""
        }`}
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
        duration: 0.4,
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