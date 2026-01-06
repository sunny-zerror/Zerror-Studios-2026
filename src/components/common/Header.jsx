import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full h-fit px-10 flex justify-between py-5 items-center fixed top-0 left-0 z-50">
        <img src={`/svg/Logo.svg`} alt="logo" className="w-[2rem] select-none cursor-pointer" />

        <div className="w-fit h-fit flex  gap-4">
          <div className="w-full h-12 rounded-lg flex bg-[#FFFFFF5C] backdrop-blur-3xl group gap-88 transition-all ease-in cursor-pointer duration-200 px-7 justify-center items-center">
            <p className="RF_Font text-[0.8rem] text-[#f5f5f5] tracking-wide">MENU</p>
            <div className="w-fit h-12 flex flex-col gap-1 group-hover:gap-2 justify-center items-center transition-all ease-in cursor-pointer duration-200">
              <div className="w-[0.5rem] h-[0.10rem] rounded-full bg-[#f5f5f5] flex mr-auto"></div>
              <div className="w-[0.9rem] h-[0.10rem] rounded-full bg-[#f5f5f5] flex"></div>
              <div className="w-[0.5rem] h-[0.10rem] rounded-full bg-[#f5f5f5] flex ml-auto"></div>
            </div>
          </div>

          <div className="w-17 flex h-12 bg-[#FFFFFF5C] backdrop-blur-3xl relative rounded-lg select-none cursor-pointer justify-center items-center ">
            <img src={`/svg/MenuVectorBox.svg`} alt="MVB" className="w-[1rem]" />
          </div>
        </div>

        <p className="text-[#f5f5f5] RF_Font hover:text-[#858585] transition-all ease-in cursor-pointer duration-200 uppercase text-[0.8rem]">
          Contact
        </p>
      </div>
    </>
  );
};

export default Header;
