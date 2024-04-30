import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import{SiSpringboot,SiTailwindcss} from "react-icons/si"
import { DiReact ,DiMysql,DiVisualstudio,DiJava, DiIntellij, DiBootstrap, DiAws, DiGit} from "react-icons/di";

export default function Features() {
  return ( 
  <section id="features"
  className= "w-full  py-20  border-b-[1px] border-b-black " >


                <Title title="FEATURES" 
                des="The technologies and tools I have practical experience with:"/>
   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 text-xl">
               <Card title="SpringBoot"
                des="Main backend framework"
                icon={<SiSpringboot/>}
                />
                
                <Card
                title="ReactJS"
                des="Main frontend framework"
                icon={<DiReact/>}
                />
 
           <Card
                title="Java"
                des="Have solid knowledge of the language"
                icon={<DiJava/>}
                />
                 
                 <Card
                title="Amazon Web Services"
                des="Main deployment and DevOps platform  "
                icon={<DiAws/>}
              />


                <Card
                title="Tailwindcss"
                des="Widely used for designing React applications."
                icon={<SiTailwindcss/>}
                />
                <Card 
                 title="MicroSoft Visual Studio"
                 des="Main development tool for C# applications"
                 icon={<DiVisualstudio/>}
                 />
                <Card 
                 title="MySQL"
                 des="Main database that has been used as part of the 
                 backend"
                 icon={<DiMysql/>}
                 />
                <Card
                 title="Git & GitHub"
                 des="Main version control that has been for deploying applications to AWS"
                 icon={<DiGit/>} 
                />
                 <Card
                title="Intellij IDEA"
                des="Main development tool with STS tools "
                icon={<DiIntellij/>}
              />
                 <Card
                title="Bootstrap"
                des="Main development tool with STS tools "
                icon={<DiBootstrap/>}
              />


   </div>
   </section>
  )
}
