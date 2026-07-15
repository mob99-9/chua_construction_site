import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../../assets/image 3 (1).png";
import serviceImg2 from "../../assets/image 3 (2).png";
import serviceImg3 from "../../assets/image 3 (3).png";

import mostBookedIcon from "../../assets/icons/MostBookedServices.png";

export default function Services() {
  const servicesList = [
    {
      name: "Design",
      desc: "Designing floor plans",
      image: serviceImg1,
      route: "/design",
    },
    {
      name: "3D Render",
      desc: "Rendering floor plans",
      image: serviceImg2,
      route: "/3d-render",
    },
    {
      name: "Blueprint",
      desc: "Actualizing the plans",
      image: serviceImg3,
      route: "/blueprint",
    },
  ];


  return (
    <section
      id="services"
      className="py-24 px-[5%] text-center bg-white"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary-orange after:rounded-full">
        <img src={mostBookedIcon} alt="" className="w-10 h-10 inline-block mr-3 align-bottom relative -top-1" />
        Most Booked Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
        {servicesList.map((service, index) => (
          <Link
            key={index}
            to={service.route}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-light-gray hover:-translate-y-2 hover:shadow-2xl hover:border-primary-orange/40 transition-all duration-300 flex flex-col group no-underline"
          >
            <div className="aspect-square overflow-hidden bg-light-bg">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-dark-navy">
                {service.name}
              </h3>

              <p className="text-gray-text text-sm">
                {service.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}