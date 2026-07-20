import React from "react";
import imgCEO from "../../assets/CEO.png";
import imgHR from "../../assets/HumanResource.png";
import imgAccountant from "../../assets/Accountant.png";
import imgArchi1 from "../../assets/Architect(1).png";
import imgArchi2 from "../../assets/Architect.png";
import imgArtist from "../../assets/3DArtist.png";

import meetTeamIcon from "../../assets/icons/MeetTheTeam.png";

export default function MeetTeam() {
  const team = [
    {
      role: "CEO",
      name: "Mr. Founder",
      img: imgCEO,
    },
    {
      role: "Human Resource",
      name: "Ms. HR Department",
      img: imgHR,
    },
    {
      role: "Accountant",
      name: "Mrs. Finance",
      img: imgAccountant,
    },
    {
      role: "Architect",
      name: "Mrs. Archi Department",
      img: imgArchi1,
    },
    {
      role: "Architect",
      name: "Mr. Architect",
      img: imgArchi2,
    },
    {
      role: "3D Artist",
      name: "Mr. Artist",
      img: imgArtist,
    },
  ];

  return (
    <section
      id="team"
      className="bg-[#F8F5F1] py-24 px-[5%] text-center"
    >
      {/* Heading */}

      <div className="max-w-3xl mx-auto mb-16">

        <h2 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold text-[#483832]">

          <img
            src={meetTeamIcon}
            alt=""
            className="w-10 h-10 object-contain"
          />

          Meet The Team

        </h2>

        <div className="w-24 h-[3px] bg-[#D8B57A] rounded-full mx-auto mt-5 mb-6" />

        <p className="text-[#6B5B52] text-lg leading-8">
          Meet the passionate professionals behind every successful project.
          Together we transform ideas into beautifully designed spaces.
        </p>

      </div>

      {/* Team Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1150px] mx-auto">

        {team.map((member, index) => (
          <div
            key={index}
            className="
              group
              bg-white
              rounded-[28px]
              border
              border-[#E8DED3]
              overflow-hidden
              shadow-[0_14px_35px_rgba(72,56,50,0.10)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#D8B57A]/50
              hover:shadow-[0_28px_60px_rgba(72,56,50,0.18)]
            "
          >
            {/* Image */}

            <div className="relative overflow-hidden">

              <img
                src={member.img}
                alt={`${member.name} - ${member.role}`}
                className="
                  w-full
                  h-[340px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#483832]/25 via-transparent to-transparent" />

            </div>

            {/* Content */}

            <div className="p-7">

              <h3 className="text-[28px] font-bold text-[#483832]">
                {member.role}
              </h3>

              <div className="w-12 h-[3px] bg-[#D8B57A] rounded-full mx-auto my-4 transition-all duration-500 group-hover:w-20" />

              <p className="text-[#6B5B52] text-lg font-medium">
                {member.name}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}