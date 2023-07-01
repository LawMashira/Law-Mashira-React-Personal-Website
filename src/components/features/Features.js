import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import{SiSpringboot,SiTailwindcss} from "react-icons/si"
import { DiEclipse,DiReact ,DiMysql,DiVisualstudio,DiGithub,DiJava,DiPostgresql} from "react-icons/di";
export default function Features() {
  return ( 
  <section id="features"
  className= "w-full  py-20  border-b-[1px] border-b-black " >


                <Title title="FEATURES" des="The technologies and tools I have practical experience"/>
   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 text-xl">
               <Card title="SpringBoot"
                des="yuweryudfhsdy
                yuyuuyhhjhjhyuyuyu
                tytyyuyiiyuuyh
                uiuiouiiiio"
                icon={<SiSpringboot/>}
                />
                
                <Card
                title="RaectJS"
                des="yuweryudfhsdfhsdfjhdfjh"
                icon={<DiReact/>}
                />
 
           <Card
                title="Java"
                des="yuweryudfhsdfhsdfjhdfjh"
                icon={<DiJava/>}
                />
                 
                 <Card
                title="Eclipse"
                des="yuweryudfhsdfhsdfjhdfjh"
                icon={<DiEclipse/>}
                />




                <Card
                title="Tailwindcss"
                des="yuweryudfhsdfhsdfjhdfjh"
                icon={<SiTailwindcss/>}
                />
                <Card 
                 title="MicroSoft Visual Studio"
                 des="yuweryudfhsdfhsdfjhdfjh"
                 icon={<DiVisualstudio/>}
                 />
                <Card 
                 title="MySQL"
                 des="yuweryudfhsdfhsdfjhdfjh"
                 icon={<DiMysql/>}
                 />
                <Card
                 title="GitHub"
                 des="yuweryudfhsdfhsdfjhdfjh"
                 icon={<DiGithub/>} 
                />

<Card
                 title="Postgresql"
                 des="yuweryudfhsdfhsdfjhdfjh"
                 icon={<DiPostgresql/>} 
                />


   </div>
   </section>
  )
}
