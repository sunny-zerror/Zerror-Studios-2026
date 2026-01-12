import React from "react";

const InfoSection = () => {
  return (
    <div className="w-full px-10 py-25 text-[#002BBA] ">
      <div className="w-full  grid grid-cols-[25%_32%_43%]">
        <div className="">
          <p className="capitalize pf_nine text-5xl  leading-none">Our team</p>
        </div>
        <div className="text-xs capitalize leading-tight pt-5">
          <p className="">Thoughtful design.</p>
          <p className="">Strong technology.</p>
        </div>
        <div className="capitalize text-2xl leading-none pl-2 SS_Font">
          <p>
            {" "}
            <span className="opacity-0 pointer-events-none ">
              ......................................
            </span>{" "}
            We exist to end that trade-off. At Zerror, design and technology
            move as one — from first thought to final build. Every decision is
            intentional. Every detail measured. Every release stable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
