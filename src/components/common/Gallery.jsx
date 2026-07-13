import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectModal from "./ProjectModal";


export default function Gallery({ categories, service }) {

const navigate = useNavigate();

const [hoveredProject,setHoveredProject] = useState(null);
const [selectedProject,setSelectedProject] = useState(null);



return (

<>

<section className="w-full bg-white py-16">

<div className="max-w-[1200px] mx-auto px-6">


<div className="space-y-20">


{
categories.map((category)=>(


<section key={category.id}>


<h3 className="text-3xl font-bold text-[#001186] mb-3">
{category.heading}
</h3>


<p className="text-gray-500 text-lg mb-8">
{category.description}
</p>



<div className="flex gap-5 overflow-hidden">


{
category.images.map((image,index)=>{


const id = `${category.id}-${index}`;

const active = hoveredProject === id;



return (


<div

key={id}

onMouseEnter={() =>
setHoveredProject(id)
}

onMouseLeave={() =>
setHoveredProject(null)
}


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


${active
?
"flex-[2]"
:
"flex-1"
}


`}


>



<img

src={image}

alt=""

className="

absolute

inset-0

w-full

h-full

object-cover

transition-transform

duration-700

group-hover:scale-110

"

/>



<div

className={`

absolute

inset-0

bg-black/50

transition-all

duration-500


${active
?
"opacity-100"
:
"opacity-20"
}


`}

/>



<div

className="

absolute

bottom-0

left-0

right-0

p-6

text-white

bg-gradient-to-t

from-black/90

to-transparent

"

>


<h4 className="text-xl font-bold">

{category.title}

</h4>


{
active &&

<>


<p className="mt-3 text-sm text-gray-200">

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

px-5

py-2

rounded-full

font-semibold

"

>

Read More →

</button>


</>


}



</div>



</div>


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