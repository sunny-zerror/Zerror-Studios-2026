import React from "react";

const OurTeam = ({SetmemberActive}) => {
  const teamMembers = [
    {
      id: 1,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/1.png",
    },
    {
      id: 2,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/2.png",
    },
    {
      id: 3,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/3.png",
    },
    {
      id: 4,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/4.png",
    },
    {
      id: 5,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/1.png",
    },
    {
      id: 6,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/2.png",
    },
    {
      id: 7,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/3.png",
    },
    {
      id: 8,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/4.png",
    },
    {
      id: 9,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/2.png",
    },
    {
      id: 10,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/3.png",
    },
    {
      id: 11,
      name: "ARTUR SHARF",
      role: "Co-Founder And Lead Architect",
      img: "/images/outTeam/3.png",
    },
    {
      id: 99,
    },
  ];

  return (
    <div className="w-full min-h-screen z-100 relative bg-white ">
      <div className=" w-full px-10 pb-42">
        <div className="grid gap-25 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => {
            // 👉 Special Blue Card for id 99
            if (member.id === 99) {
              return (
                <div
                  onClick={()=>SetmemberActive(true)}
                  key={member.id}
                  className="w-full aspect-[4/5] bg-[#002BBA] flex flex-col justify-end p-6 gap-[20px] text-white cursor-pointer"
                >
                  <h2 className="text-[3.1rem] leading-[3.1rem] RF_Font font-semibold spirit ">
                    Become A <br /> Zerrorian
                  </h2>

                  <p className="mt-4 text-[1rem] leading-[1.1rem] opacity-90">
                    Join us in creating great work <br />
                    share your resume.
                  </p>
                </div>
              );
            }

            return (
              <div key={member.id} className="text-start">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover object-top  mb-4"
                />
                <h3 className="text-[#002BBA] RF_Font uppercase font-bold">
                  {member.name}
                </h3>
                <p className="text-[#002BBA]  font-normal">{member.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
