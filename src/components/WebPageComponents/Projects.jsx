import React from 'react';
import projImg1 from '../../assets/image 3 (4).png';
import projImg2 from '../../assets/image 3 (5).png';
import projImg3 from '../../assets/image 3 (6).png';
import projImg4 from '../../assets/image 3 (7).png';
import projImg5 from '../../assets/image 3 (8).png';
import projImg6 from '../../assets/image 3 (9).png';

export default function Projects() {
  const projectsList = [
    {
      name: 'Apartment',
      desc: '1 story, 3 apartment',
      image: projImg1
    },
    {
      name: 'Residence',
      desc: '1 story, 1 bedroom',
      image: projImg2
    },
    {
      name: 'Residence',
      desc: '2 story, 2 bedroom',
      image: projImg3
    },
    {
      name: 'Residence',
      desc: '2 story, 3 bedroom',
      image: projImg4
    },
    {
      name: 'Residence',
      desc: '2 story, 2 bedroom',
      image: projImg5
    },
    {
      name: 'Residence',
      desc: '1 story, 3 bedroom',
      image: projImg6
    }
  ];

  return (
    <section id="projects" className="py-24 px-[5%] text-center bg-light-bg">
      <h2 className="text-4xl font-extrabold mb-16 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary-orange after:rounded-full">
        Recent Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
        {projectsList.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-light-gray hover:-translate-y-2 hover:shadow-2xl hover:border-primary-orange/40 transition-all duration-300 flex flex-col group">
            <div className="aspect-square overflow-hidden bg-light-bg">
              <img 
                src={project.image} 
                alt={`${project.name} - ${project.desc}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-1 text-dark-navy">{project.name}</h3>
              <p className="text-gray-text text-sm">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
