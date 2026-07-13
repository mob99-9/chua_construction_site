import React from "react";
import GallerySection from "../common/GallerySection";

// Residential
import res1 from "../../assets/BlueprintPage/Residential/Image1.png";
import res2 from "../../assets/BlueprintPage/Residential/Image2.png";
import res3 from "../../assets/BlueprintPage/Residential/Image3.png";
import res4 from "../../assets/BlueprintPage/Residential/Image4.png";
import res5 from "../../assets/BlueprintPage/Residential/Image5.png";

// Commercial
import com1 from "../../assets/BlueprintPage/Commercial/Image1.png";
import com2 from "../../assets/BlueprintPage/Commercial/Image2.png";
import com3 from "../../assets/BlueprintPage/Commercial/Image3.png";
import com4 from "../../assets/BlueprintPage/Commercial/Image4.png";
import com5 from "../../assets/BlueprintPage/Commercial/Image5.png";

// Office Space
import off1 from "../../assets/BlueprintPage/Office Space/Image1.png";
import off2 from "../../assets/BlueprintPage/Office Space/Image2.png";
import off3 from "../../assets/BlueprintPage/Office Space/Image3.png";
import off4 from "../../assets/BlueprintPage/Office Space/Image4.png";
import off5 from "../../assets/BlueprintPage/Office Space/Image5.png";

import rel1 from "../../assets/BlueprintPage/Religious/Image1.png";
import rel2 from "../../assets/BlueprintPage/Religious/Image2.png";
import rel3 from "../../assets/BlueprintPage/Religious/Image3.png";
import rel4 from "../../assets/BlueprintPage/Religious/Image4.png";
import rel5 from "../../assets/BlueprintPage/Religious/Image5.png";

const categories = [

{
id:"residential",

heading:"Residential Architecture",

title:"Residential",

description:
"Modern homes designed with functionality, comfort, and timeless architectural concepts.",

images:[
res1,
res2,
res3,
res4,
res5
]

},



{
id:"commercial",

heading:"Commercial Architecture",

title:"Commercial",

description:
"Professional spaces designed for businesses, customers, and long-term growth.",

images:[
com1,
com2,
com3,
com4,
com5
]

},



{
id:"office-space",

heading:"Office Space Design",

title:"Office Space",

description:
"Creative workplace environments designed to improve productivity and collaboration.",

images:[
off1,
off2,
off3,
off4,
off5
]

},



{
id:"religious",

heading:"Religious Architecture",

title:"Religious",

description:
"Purposeful architectural spaces designed for worship and community gatherings.",

images:[
rel1,
rel2,
rel3,
rel4,
rel5
]

}

];





export default function Gallery(){


return (

<GallerySection

title="Blueprint & Construction"

service="Blueprint & Construction"

categories={categories}

/>

);


}