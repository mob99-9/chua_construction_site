import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectModal from "./ProjectModal";

import iconDesign from "../../assets/icons/Design.png";
import iconRender from "../../assets/icons/3dRender.png";
import iconBlueprint from "../../assets/icons/BluePrint.png";

import iconResidential from "../../assets/icons/Residential.png";
import iconCommercial from "../../assets/icons/Commercial.png";
import iconOfficeSpace from "../../assets/icons/OfficeSpace.png";
import iconReligious from "../../assets/icons/Religious.png";

const getMainIcon = (title) => {
  if (title === "Design") return iconDesign;
  if (title === "3D Render") return iconRender;
  if (title === "Blueprint") return iconBlueprint;
  return null;
};

const getCategoryIcon = (categoryTitle) => {
  if (categoryTitle === "Residential") return iconResidential;
  if (categoryTitle === "Commercial") return iconCommercial;
  if (categoryTitle === "Office Space") return iconOfficeSpace;
  if (categoryTitle === "Religious") return iconReligious;
  return null;
};

export default function GallerySection({
  title,
  service,
  categories
}) {


const navigate = useNavigate();

const [hoveredProject, setHoveredProject] = useState(null);

const [hoverPreview, setHoverPreview] = useState(null);

const [selectedProject, setSelectedProject] = useState(null);

const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});

const [previewPosition, setPreviewPosition] = useState({
  x: 0,
  y: 0,
});


return (

<>

<section className="w-full bg-white py-16 md:py-20">

<div className="max-w-[1200px] mx-auto px-5 md:px-6">


<div className="mb-16">


<div className="flex items-center gap-4">

<h2 className="text-4xl md:text-5xl font-extrabold text-[#F87400] flex items-center gap-3">
{getMainIcon(title) && <img src={getMainIcon(title)} alt="" className="w-10 h-10 object-contain" />}
{title}
</h2>


<span className="text-5xl text-[#001186]">
|
</span>


<span className="text-4xl font-semibold text-[#001186]">
Services
</span>


</div>


<p className="mt-4 text-lg text-slate-600">
Check out our previous {service.toLowerCase()} projects below.
</p>


</div>





<div className="space-y-20">


{
categories.map((category)=>(


<section key={category.id}>


<div className="mb-4 flex items-center">
  {getCategoryIcon(category.title) ? (
    <img 
      src={getCategoryIcon(category.title)} 
      alt={category.heading} 
      className="h-10 md:h-12 object-contain" 
    />
  ) : (
    <h3 className="text-3xl font-bold text-[#001186]">
      {category.heading}
    </h3>
  )}
</div>



<p className="mt-3 mb-8 text-gray-500 text-lg">
{category.description}
</p>




<div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-5 overflow-visible">

{
category.images.map((image,index)=>{


const id =
`${category.id}-${index}`;


const active =
hoveredProject===id;



return (


<article
  key={id}

onMouseEnter={() => setHoveredProject(id)}

onMouseMove={(e)=>{

setMousePosition({

x:e.clientX,

y:e.clientY,

});

}}

onMouseLeave={()=>setHoveredProject(null)}

  onMouseLeave={() => setHoveredProject(null)}

  onClick={() =>
    setSelectedProject({
      id: category.id,
      image,
      title: `${category.title} Project ${index + 1}`,
      category: category.title,
      service,
      description: category.description,
    })
  }

  className={`
    relative
    h-[260px]
    rounded-3xl
    overflow-hidden
    cursor-pointer
    shadow-lg
    transition-all
    duration-500
    ${active ? "flex-[2]" : "flex-1"}
  `}
>



<img

src={image}

alt={category.title}


className="

absolute

inset-0

w-full

h-full

object-cover

transition-transform

duration-700


hover:scale-110

"

/>





<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"/>





<div className="absolute bottom-0 p-6 text-white">


<h4 className="text-2xl font-bold">

{category.title}

</h4>



<p className="text-sm mt-1">

Project {index+1}

</p>



{

active &&

<div className="mt-4 animate-fadeIn">


<p className="text-gray-200 leading-6 text-sm">

{category.description}

</p>




<button


onClick={(e)=>{


e.stopPropagation();


navigate(`/projects/${category.id}`);


}}


className="

mt-5

bg-[#F87400]

hover:bg-orange-600

px-6

py-3

rounded-full

font-semibold

"


>


Read More →


</button>



</div>

}

{/* ================= Hover Preview ================= */}



</div>

{active && (
<div
className="
hidden
md:block
fixed
z-[99999]
w-[420px]
rounded-[30px]
overflow-hidden
bg-white
shadow-[0_25px_80px_rgba(0,0,0,.25)]
border
border-gray-200
animate-[fade_.25s_ease]
pointer-events-none
"

style={{
top: mousePosition.y - 260,
left: mousePosition.x + 30,
}}
>

<img
src={image}
alt=""
className="w-full h-60 object-cover"
/>

<div className="p-7">

<p className="uppercase tracking-[5px] text-xs text-[#F87400] font-bold">
{service}
</p>

<h2 className="text-3xl font-bold text-[#001186] mt-2">
{category.title}
</h2>

<p className="mt-4 text-gray-600 leading-7">
{category.description}
</p>

<div className="flex justify-between items-center mt-6">

<span className="text-[#F87400] font-bold">
Click to explore →
</span>

<span className="text-gray-400 text-sm">
Preview
</span>

</div>

</div>

</div>
)}

</article>


)


})

}



</div>



</section>


))


}



</div>



</div>


</section>





<ProjectModal

project={selectedProject}

onClose={()=>setSelectedProject(null)}

/>



</>

)

}
