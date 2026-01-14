import React from "react";

const InfoSection = () => {
  return (
    <div className="w-full px-10 py-32 text-[#002BBA] relative bg-white z-100 ">
      <div className="w-full  grid grid-cols-[25%_32%_43%]">
        <div className="">
          <p className="capitalize pf_nine text-5xl  leading-none">Our team</p>
        </div>
        <div className="text-xs uppercase leading-tight pt-5 flex flex-col items-center ">
          <div className="">
          <p className="">Integral parts </p>
          <p className="">of zerror</p>
          </div>
        </div>
        <div className="capitalize text-2xl leading-none pl-30 SS_Font   ">
          <p className="">
            {/* {" "} */}
            {/* <span className="opacity-0 pointer-events-none  ">
              ......................................
            </span>{" "} */}
            The people behind Zerror are designers, developers, and strategists who care deeply about craft, clarity, and impact. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
