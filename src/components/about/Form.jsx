import React from "react";

const Form = ({SetmemberActive}) => {
  return (
    <div className="h-[95%] w-[70%] flex-col gap-5 bg-[#1239B7]  text-white flex items-center justify-end px-12 pb-5 pt-20 relative">

         {/* Close Icon */}
        <button onClick={()=>SetmemberActive(false)} className="absolute right-8 top-6 text-2xl font-light">✕</button>

      {/* Info */}
      <div className="w-full  grid grid-cols-[25%_32%_43%] pb-5">
        <div className="">
          <p className="capitalize pf_nine text-[3rem]  leading-none spirit">Become a </p>
          <p className="capitalize pf_nine text-[3rem]  leading-none spirit">Zerrorian</p>
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

      {/* 1 */}
      <div className="w-full flex gap-5">
        {/* First Name */}
        <div className="w-1/2 bg-white  px-4 py-2 rounded-sm ">
          {/* Label */}
          <label className="block text-[#1239B7] text-sm font-medium ">
            First Name
          </label>

          {/* Input */}
          <input
            type="text"
            placeholder="Your First Name"
             className=" mt-1   bg-white  w-full   text-base  text-[#1239B7]   placeholder:text-[#C9D4F6]  "
          />
        </div>

        {/* Last Name */}
        <div className="w-1/2 bg-white  px-4 py-2 rounded-sm ">
          {/* Label */}
          <label className="block text-[#1239B7] text-sm font-medium ">
            First Name
          </label>

          {/* Input */}
          <input
            type="text"
            placeholder="Your First Name"
            className=" mt-1 bg-white w-full text-base text-[#1239B7] placeholder:text-[#C9D4F6] "
          />
        </div>
      </div>

      {/* 2 */}
      <div className="w-full flex gap-5">
        {/* Email */}
        <div className="w-1/2 bg-white  px-4 py-2 rounded-sm ">
          {/* Label */}
          <label className="block text-[#1239B7] text-sm font-medium ">
            Email
          </label>

          {/* Input */}
          <input
            type="text"
            placeholder="Your Email Address"
          className=" mt-1   bg-white  w-full   text-base  text-[#1239B7]   placeholder:text-[#C9D4F6]  "
          />
        </div>

        {/* M-Number */}
        <div className="w-1/2 bg-white  px-4 py-2 rounded-sm ">
          {/* Label */}
          <label className="block text-[#1239B7] text-sm font-medium ">
            Phone Number
          </label>

          {/* Input */}
          <input
            type="text"
            placeholder="9xxxxxxxxx"
            className=" mt-1   bg-white  w-full   text-base  text-[#1239B7]   placeholder:text-[#C9D4F6]  "
          />
        </div>
      </div>

      {/* Resume Upload */}
      <div className="w-full bg-white px-4 py-2 ">
        <label className="block text-[#1239B7] text-sm font-medium ">
          Resume
        </label>
        <div className="border-2 border-dashed text-[#1239B7] border-[#1239B7] my-5 mx-2 rounded-md h-40 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/5 transition">
          <div className="mb-2">
            <svg
              className="w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M3 16.5V18a2 2 0 002 2h14a2 2 0 002-2v-1.5M12 3v13m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>
          <p className="text-sm">Drop Your Image Here, Or Browse</p>
          <p className="text-xs opacity-70 mt-1">
            Supports : JPG, JPEG, PNG, GIF, MP4
          </p>
        </div>
      </div>

      {/* TALK */}
      <div className="w-full bg-white px-4 py-2">
        <label className="block text-[#1239B7] text-sm font-medium ">
          Tell us about yourself !
        </label>
        <textarea
          rows="2"
          className="w-full bg-white text-black px-4 py-3 rounded-sm outline-none resize-none"
        ></textarea>
      </div>

      {/* BTN */}
      <div className="flex justify-center pt-4">
        <button
          type="submit"
          className="bg-white text-[#1239B7] px-10 py-3 text-sm font-semibold rounded-sm hover:bg-gray-100 transition"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Form;
