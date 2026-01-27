import React from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
gsap.registerPlugin(SplitText);

const Form = ({ closeForm }) => {

  return (
    <div className=" form_paren opacity-0 hidden  w-[90vw] h-full  px-20 flex-col justify-center  relative  text-white ">

      <button onClick={closeForm} className="absolute cursor-pointer leading-none right-5 top-5 text-2xl z-10">
        ✕
      </button>

      <div className="w-full  pt-10 ">
        <div className="w-full  grid grid-cols-[28%_30%_42%]">
          <div className="">
            <p className=' capitalize pfn  text-5xl   leading-none'>  Become a <br /> Zerrorian </p>
          </div>
          <div className="text-xs pt-4">
            <p className=''>Integral parts </p>
            <p className=''>of zerror</p>
          </div>
          <div className="capitalize    text-3xl  ">
            <p className="font-medium leading-10"> <span className='opacity-0 pointer-events-none'>.......................</span> The people behind Zerror are designers, developers, and strategists who care deeply about craft, clarity, and impact.</p>
          </div>
        </div>
      </div>

      <form
        className="w-full mt-10  grid grid-cols-1 md:grid-cols-2  gap-x-16 gap-y-8  text-white "
      >
        {/* Full Name */}
        <Input label="Full Name *" />

        {/* Role Dropdown */}
        <Select
          label="Role *"
          options={["Founder", "Designer", "Developer", "Marketing", "Other"]}
        />

        {/* Email */}
        <Input label="Email *" type="email" />

        {/* Phone */}
        <Input label="Phone Number *" type="tel" />

        <Input label="Tell us about yourself *" type="tel" className="md:col-span-2" />

        <div
          className="full h-fit border bg-[#1239B7]  hover:bg-[#143cbe] transition-all duration-150 ease-in border-[#ffffff42] rounded-sm flex justify-center items-center py-4 cursor-pointer"
        >
          <p>Attach Resume</p>
        </div>

        <div className="w-full">
          <p className="text-[#f5f5f59d] select-none cursor-pointer">
            By clicking connect you accept our{" "}
            <span className="text-white">Privacy Policy </span>
          </p>
          <p className="text-[#f5f5f59d] select-none cursor-pointer">
            Prefer email ? {" "}
            <span className="text-white">hello@zerrorstudios.com </span>
          </p>
        </div>
      </form>

      {/* SubmitBtN */}
      <div className="w-full mt-10 center">
        <button className=" border border-white rounded-lg px-4 py-2 bg-white text_blue font-medium">
          SUBMIT
        </button>
      </div>

    </div>
  );
};

export default Form;

const Input = ({ label, type = "text", className }) => (
  <div className={`text-white ${className} `}>
    <div className="form relative  overflow-hidden  pt-4">
      <input type={type} name="name" required />
      <label htmlFor="name" className="label-name">
        <span className="content-name">{label}</span>
      </label>
    </div>
  </div>
);

const Select = ({ label, options }) => (
  <div className="text-white cursor-pointer flex flex-col justify-end pb-2">
    <label className="block font-medium mb-2 text-white">
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
