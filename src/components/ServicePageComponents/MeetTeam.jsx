import React from 'react';
import imgCEO from '../../assets/CEO.png';
import imgHR from '../../assets/HumanResource.png';
import imgAccountant from '../../assets/Accountant.png';
import imgArchi1 from '../../assets/Architect(1).png';
import imgArchi2 from '../../assets/Architect.png';
import imgArtist from '../../assets/3DArtist.png';
import meetTeamIcon from '../../assets/icons/MeetTheTeam.png';

export default function MeetTeam() {
  const team = [
    {
      role: 'CEO',
      name: 'Mr. Founder',
      img: imgCEO
    },
    {
      role: 'Human Resource',
      name: 'Ms. HR Department',
      img: imgHR
    },
    {
      role: 'Accountant',
      name: 'Mrs. Finance',
      img: imgAccountant
    },
    {
      role: 'Architect',
      name: 'Mrs. Archi Department',
      img: imgArchi1
    },
    {
      role: 'Architect',
      name: 'Mr. Architect',
      img: imgArchi2
    },
    {
      role: '3D Artist',
      name: 'Mr. Artist',
      img: imgArtist
    }
  ];

  return (
    /* Changed bg-light-bg to bg-white to stay consistent with ServiceDetails */
    <section id="team" className="py-24 px-[5%] bg-white text-center">
      <h2 className="text-[#0B132B] text-4xl md:text-5xl font-extrabold mb-16 flex items-center justify-center gap-3">
        <img src={meetTeamIcon} alt="" className="w-10 h-10 object-contain" />
        Meet The Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 max-w-[1100px] mx-auto justify-items-center">
        {team.map((member, index) => (
          /* Eliminated card styles (no shadow, no border, no white card bg) */
          <div 
            key={index} 
            className="flex flex-col items-center text-center"
          >
            {/* Team member photo - w-72 h-72 (size-72) and rounded-[20px] as specified in Figma */}
            <div className="w-72 h-72 rounded-[20px] overflow-hidden mb-5 shadow-sm relative group">
              <img 
                src={member.img} 
                alt={`${member.name} - ${member.role}`} 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
            
            <h3 className="text-black text-xl sm:text-2xl font-bold mb-1 select-none">
              {member.role}
            </h3>
            <p className="text-gray-text text-lg sm:text-[1.1rem] font-medium select-none">
              {member.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
