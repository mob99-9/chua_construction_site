import { useNavigate } from "react-router-dom";

export default function GalleryCard({
  project,
  active,
  setActive,
}) {

const navigate = useNavigate();


return (

<div

onMouseEnter={()=>setActive(project.id)}

onMouseLeave={()=>setActive(null)}

onClick={()=>project.onOpen(project)}

className={`
relative
overflow-hidden
rounded-3xl
shadow-lg
cursor-pointer
transition-all
duration-500
ease-out

h-[260px]

${active === project.id
? "flex-[2]"
: "flex-1"}

`}

>


<img

src={project.image}

alt={project.title}

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



<div

className="
absolute
bottom-0
left-0
right-0
bg-gradient-to-t
from-black/90
via-black/40
to-transparent
p-5
text-white
"

>


<h3 className="text-xl font-bold">

{project.category}

</h3>


<p className="text-sm mt-1">

{project.title}

</p>


</div>




{
active === project.id && (

<div

className="
absolute
inset-0
bg-black/60
flex
flex-col
justify-end
p-7
text-white
transition-all
"

>


<h2 className="text-3xl font-bold">

{project.title}

</h2>



<p className="mt-3 text-gray-200 leading-7">

{project.description}

</p>



<button

onClick={(e)=>{

e.stopPropagation();

navigate(`/projects/${project.page}`);

}}

className="
mt-5
bg-[#F87400]
hover:bg-orange-600
px-6
py-3
rounded-full
font-semibold
w-fit
"

>

Read More →

</button>



</div>

)

}


</div>

)

}