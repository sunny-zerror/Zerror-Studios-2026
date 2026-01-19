import React from "react";

const Exp_HeroSection = () => {
  return (
    <div className="w-full min-h-screen flex bg-[#002BBA] px-10 justify-center items-center z-90">
      <div className="w-full h-fit flex items-end ">
        {/* Left */}
        <div className="w-[60%] h-fit  flex justify-center items-center capitalize">
          <h1 className="text-[7vw] leading-[7.3vw] spirit text-white">
            Our services bridge the gap between Design development
          </h1>
        </div>

        {/* Right */}
        <div className="w-[40%] h-fit  flex justify-center items-center">
          <div className="w-[65%] h-fit ">
            <p className="text-[2rem] text-white text-justify ibm leading-[2.3rem]">
              We design and develop websites that are more than just
              good-looking—they’re engineered for speed, clarity, and
              conversion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp_HeroSection;
