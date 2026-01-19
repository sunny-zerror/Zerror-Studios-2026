import React from "react";

const servicesContent = [
  {
    id: 1,
    title: "Website Development",
    description:
      "We Design And Develop Websites That Are More Than Just Good-Looking—They’re Engineered For Speed, Clarity, And Conversion.",
    buttonText: "VIEW MORE",
    image: "/images/hourglass.png",
  },
  {
    id: 2,
    title: "E-Commerce Development",
    description:
      "We Design And Develop Websites That Are More Than Just Good-Looking—They’re Engineered For Speed, Clarity, And Conversion.",
    buttonText: "VIEW MORE",
    image: "/images/hand.png",
  },
  {
    id: 3,
    title: "Branding, Marketing & SEO",
    description:
      "We Design And Develop Websites That Are More Than Just Good-Looking—They’re Engineered For Speed, Clarity, And Conversion.",
    buttonText: "VIEW MORE",
    image: "/images/branding.png",
  },
  {
    id: 4,
    title: "Branding, Marketing & SEO",
    description:
      "We Design And Develop Websites That Are More Than Just Good-Looking—They’re Engineered For Speed, Clarity, And Conversion.",
    buttonText: "VIEW MORE",
    image: "/images/branding.png",
  },
];

const Our_Services = () => {
  return (
    <div className={`w-full h-fit flex flex-col relative px-10 py-10`}>
      {servicesContent.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-full h-screen flex justify-start py-10 ${index == 0 ? "" : "border-t border-black/40"}  `}
          >
            <div className="w-full h-fit flex justify-between">
              {/* Left */}
              <div className="max-w-[10%] h-fit flex">
                <h1 className="text-[3rem] text-[#002BBA] leading-[3.2rem] spirit">
                  {item.title}
                </h1>
              </div>
              {/* Right */}
              <div className="w-[30%] h-fit flex flex-col ">
                <p className="text-[2rem] text-justify leading-[2.2rem] text-[#002BBA] ibm">
                  {item.description}
                </p>

                <button className="w-fit rounded-sm font-semibold h-fit text-[1rem] ibm  text-[#002BBA] mt-5 tracking-tight leading-[1rem] px-2.5 py-2.5 rounded-sm border-[1.5px] border-[#002BBA]">
                  {item.buttonText}
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="w-full h-screen fixed top-0 left-0 flex justify-center items-center z-[-1] ">
        <div className=" w-[300px] aspect-square absolute z-10">
            <img src={'/images/Try.svg'} alt="try" className="w-full h-full object-center object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Our_Services;
