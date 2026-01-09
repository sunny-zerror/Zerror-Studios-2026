"use client";
import FormSection from "@/components/contact/FormSection";
import HelpSection from "@/components/contact/HelpSection";
import SocialSection from "@/components/contact/SocialSection";
import ThanksSection from "@/components/contact/ThanksSection";
import React, { useState } from "react";

const contact = () => {
  const [Num, SetNum] = useState(1);

  return (
    <div className="w-full h-screen flex bg-[#012CBA]">
      {/* Left */}
      <div className="w-1/2 h-screen relative">
        <div className=" absolute bottom-[4%] left-[4%] flex flex-col RF_Font text-[4vw] leading-[3.5vw] text-white">
          <h2>Let’s</h2>
          <h2>Talk</h2>
        </div>
      </div>

      {/* Right */}
      <div className="w-1/2 h-screen flex justify-end items-end pb-[2vw] pr-[5vw] relative">
        <div className="w-full h-[80vh] relative">
          {/* Sections with smooth transitions */}
          <div className="w-full h-full relative overflow-hidden">
            <div className={`absolute inset-0 transition-all duration-500 ${Num === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}`}>
              <FormSection />
            </div>
            <div className={`absolute inset-0 transition-all duration-500 ${Num === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
              <HelpSection />
            </div>
            <div className={`absolute inset-0 transition-all duration-500 ${Num === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
              <SocialSection />
            </div>
            <div className={`absolute inset-0 transition-all duration-500 ${Num === 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
              <ThanksSection />
            </div>
          </div>

          {/* BTN-Section */}
          <div
            className={`w-full flex items-center ${Num == 1 && "justify-end"} ${
              Num == 4 && "hidden"
            }  justify-between absolute bottom-0`}
          >
            <button
              onClick={() => SetNum(Num - 1)}
              className={`bg-white ${
                Num == 1 && "hidden"
              }  text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg`}
            >
              Prev
            </button>

            <button
              onClick={() => SetNum(Num + 1)}
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
