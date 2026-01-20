import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useScroll } from "@react-three/drei";
import { SplitText } from "gsap/SplitText";

// Register SplitText plugin
gsap.registerPlugin(SplitText);

const Form = ({ SetmemberActive, SetFormAnimDeactive }) => {
  const CloseForm = () => {
    SetmemberActive(false);
    SetFormAnimDeactive(false);
  };

  const formRef = useRef();

  useEffect(() => {
    // Animate the form once when it mounts
    gsap.to(formRef.current, {
      opacity: 1,
      y: 0, // slide up from below
      duration: 1,
      ease: "power3.out",
      stagger: 0.1, // if multiple child elements, animate them one by one
    });
  }, []);

  const mouseEnterC = () => {
    gsap.to(".ARText", {
      y: "-1rem",
      stagger: 0.01,
      duration: 0.3,
    });
  };
  const mouseLeaveC = () => {
    gsap.to(".ARText", {
      y: "0rem",
      // stagger:0.01,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  const mouseEnterS = () => {
    gsap.to(".SText", {
      y: "-1rem",
      stagger: 0.01,
      duration: 0.3,
    });
  };
  const mouseLeaveS = () => {
    gsap.to(".SText", {
      y: "0rem",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="h-[80%] w-[75%] flex-col gap-5 bg-[#1239B7] relative  text-white flex items-center justify-center px-12 pb-5 pt-20 relative z-181">
      {/* Close Icon */}
      <button
        onClick={CloseForm}
        className="absolute right-10 top-8 text-2xl font-light z-181"
      >
        ✕
      </button>

      {/* Info */}
      <div className="w-full max-w-5xl  grid grid-cols-[25%_32%_43%] mb-15 ">
        <div className="">
          <p className="capitalize pf_nine text-[2.5rem]  leading-none spirit">
            Become a{" "}
          </p>
          <p className="capitalize pf_nine text-[2.5rem]  leading-none spirit">
            Zerrorian
          </p>
        </div>
        <div className="text-xs uppercase leading-tight pt-5 flex flex-col items-center ">
          <div className="">
            <p className="">Integral parts </p>
            <p className="">of zerror</p>
          </div>
        </div>
        <div className="capitalize text-[1.3rem] leading-none pl-30 SS_Font   ">
          <p className="">
            The people behind Zerror are designers, developers, and strategists
            who care deeply about craft, clarity, and impact.
          </p>
        </div>
      </div>

      <form
        ref={formRef}
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 translate-y-10 gap-x-16 gap-y-6 text-white opacity-0"
      >
        {/* Full Name */}
        <Input label="Full Name*" />

        {/* Role Dropdown */}
        <Select
          label="Role*"
          options={["Founder", "Designer", "Developer", "Marketing", "Other"]}
        />

        {/* Email */}
        <Input label="Email*" type="email" />

        {/* Phone */}
        <Input label="Phone Number*" type="tel" />

        <div className="md:col-span-2">
          <div className="form  pt-4">
            {/* ------------------------------------ */}
            <input type="text" name="name" required />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Tell us about yourself*</span>
            </label>
          </div>

          {/* <label className="block text-[1rem] mb-2 ">
            Tell us about yourself*
          </label> */}
          {/* <textarea
            rows="1"
            className="w-full bg-transparent border-b border-[#ffffff42]  outline-none transition-all duration-300 resize-none"
          /> */}
        </div>

        {/* attach Resume */}
        <div
          onMouseEnter={mouseEnterC}
          onMouseLeave={mouseLeaveC}
          className="full h-fit border bg-[#1239B7]  hover:bg-[#143cbe] transition-all duration-150 ease-in border-[#ffffff42] rounded-sm flex justify-center items-center py-4 cursor-pointer"
        >
          <span className="w-fit h-[1rem]   overflow-hidden flex flex-col">
            {/* top */}
            <span className="flex leading-[1rem]">
              <span className="text-[1rem] leading-[1rem] ARText flex">A</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">t</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">t</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">a</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">c</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">h</span>

              <span className="ml-2 text-[1rem] leading-[1rem] ARText flex">
                R
              </span>
              <span className="text-[1rem] leading-[1rem] ARText flex">e</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">s</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">u</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">m</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">e</span>
            </span>
            {/* bottom */}
            <span className="flex leading-[1rem]">
              <span className="text-[1rem] leading-[1rem] ARText flex">A</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">t</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">t</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">a</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">c</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">h</span>

              <span className="ml-2 text-[1rem] leading-[1rem] ARText flex">
                R
              </span>
              <span className="text-[1rem] leading-[1rem] ARText flex">e</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">s</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">u</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">m</span>
              <span className="text-[1rem] leading-[1rem] ARText flex">e</span>
            </span>
          </span>
        </div>

        {/* Policy */}
        <div className="w-full">
          <p className="text-[#f5f5f59d] select-none cursor-pointer">
            By clicking connect you accept our{" "}
            <span className="text-white">Privacy Policy </span>
          </p>
          <p className="text-[#f5f5f59d] select-none cursor-pointer">
            Prefer email?{" "}
            <span className="text-white">hello@zerrorstudios.com </span>
          </p>
        </div>
      </form>

      {/* SubmitBtN */}
      <div
        onMouseEnter={mouseEnterS}
        onMouseLeave={mouseLeaveS}
        className="w-fit my-5 px-4 h-fit border bg-[white]  hover:bg-[#f5f5f5] transition-all duration-150 ease-in border-[#ffffff42] rounded-sm flex justify-center items-center py-3 cursor-pointer"
      >
        <span className="w-fit h-[1rem] overflow-hidden flex flex-col text-[#1239B7] SS_Font">
          {/* top */}
          <span className="flex leading-[1rem]">
            <span className="text-[1rem] leading-[1rem] SText flex">S</span>
            <span className="text-[1rem] leading-[1rem] SText flex">U</span>
            <span className="text-[1rem] leading-[1rem] SText flex">B</span>
            <span className="text-[1rem] leading-[1rem] SText flex">M</span>
            <span className="text-[1rem] leading-[1rem] SText flex">I</span>
            <span className="text-[1rem] leading-[1rem] SText flex">T</span>
          </span>
          {/* bottom */}
          <span className="flex leading-[1rem]">
            <span className="text-[1rem] leading-[1rem] SText flex">S</span>
            <span className="text-[1rem] leading-[1rem] SText flex">U</span>
            <span className="text-[1rem] leading-[1rem] SText flex">B</span>
            <span className="text-[1rem] leading-[1rem] SText flex">M</span>
            <span className="text-[1rem] leading-[1rem] SText flex">I</span>
            <span className="text-[1rem] leading-[1rem] SText flex">T</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Form;

/* Reusable Input */
const Input = ({ label, type = "text" }) => (
  <div className="text-white">
    <div className="form  pt-4">
      <input type={type} name="name" required />
      <label htmlFor="name" className="label-name">
        <span className="content-name">{label}</span>
      </label>
    </div>
  </div>
);

/* Reusable Select */
const Select = ({ label, options }) => (
  <div className="text-white flex flex-col justify-end pb-2">
    <label className="block text-[1rem] leading-[1rem] mb-2 text-white">
      {label}
    </label>
    <select className="w-full bg-transparent border-b border-[#ffffff42] text-white  outline-none transition-all duration-300">
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="text-blue-800">
          {opt}
        </option>
      ))}
    </select>
  </div>
);
