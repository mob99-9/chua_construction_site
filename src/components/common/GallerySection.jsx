import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectModal from "./ProjectModal";


export default function GallerySection({
  title,
  service,
  categories
}) {


const navigate = useNavigate();


const [hoveredProject,setHoveredProject] = useState(null);

const [selectedProject,setSelectedProject] = useState(null);



return (

<>

<section className="w-full bg-white py-16 md:py-20">

<div className="max-w-[1200px] mx-auto px-5 md:px-6">


<div className="mb-16">


<div className="flex items-center gap-4">

<h2 className="text-5xl font-extrabold text-[#F87400]">
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


<h3 className="text-3xl font-bold text-[#001186]">
{category.heading}
</h3>



<p className="mt-3 mb-8 text-gray-500 text-lg">
{category.description}
</p>




<div className="flex gap-5 overflow-hidden">


{
category.images.map((image,index)=>{


const id =
`${category.id}-${index}`;


const active =
hoveredProject===id;



return (


<article


key={id}


onMouseEnter={()=>setHoveredProject(id)}

onMouseLeave={()=>setHoveredProject(null)}


onClick={()=>


setSelectedProject({

id:category.id,

image,

title:
`${category.title} Project ${index+1}`,

category:
category.title,

service,

description:
category.description

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


${

active

?

"flex-[2]"

:

"flex-1"

}

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



</div>



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