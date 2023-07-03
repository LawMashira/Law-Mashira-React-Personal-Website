import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import{SiSpringboot,SiTailwindcss} from "react-icons/si"
import { DiEclipse,DiReact ,DiMysql,DiVisualstudio,DiGithub,DiJava} from "react-icons/di";
export default function Features() {
  return ( 
  <section id="features"
  className= "w-full  py-20  border-b-[1px] border-b-black " >


                <Title title="FEATURES" 
                des="The technologies and tools I have practical experience with:"/>
   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 text-xl">
               <Card title="SpringBoot"
                des="The framework has been used as the backend technology
                for developing Java applications"
                icon={<SiSpringboot/>}
                />
                
                <Card
                title="RaectJS"
                des="The framework has been used as the frontend technology 
                for developing React applications."
                icon={<DiReact/>}
                />
 
           <Card
                title="Java"
                des="The laguage has been used for developing 
                 web,desktop and console applications."
                icon={<DiJava/>}
                />
                 
                 <Card
                title="Eclipse"
                des="The IDE has been used for as the main develoment tool with STS tools being
                incooperated"
                icon={<DiEclipse/>}
                />




                <Card
                title="Tailwindcss"
                des="The framework has been widely used for designing React applications."
                icon={<SiTailwindcss/>}
                />
                <Card 
                 title="MicroSoft Visual Studio"
                 des="The IDE has been useful for developing C# applications"
                 icon={<DiVisualstudio/>}
                 />
                <Card 
                 title="MySQL"
                 des="This is the main database that has been included mainly as part of the 
                 backend development"
                 icon={<DiMysql/>}
                 />
                <Card
                 title="GitHub"
                 des="The main version control that has been used when deploying applications to AWS"
                 icon={<DiGithub/>} 
                />


   </div>
   </section>
  )
}
