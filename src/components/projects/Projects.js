import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { point,react,wallet, school, logoo} from '../../assets'
export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black"  >

    <div className="flex justify-center items-center text-center ">
      <Title   
      title="Visit my Portfolio"
      des="My Projects"
      />
      
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14  ">

    <a href='https://lakav-tech-services.vercel.app'>
      <ProjectCard 
      title=" Start Up Portfolio "
      des="
      This is an application, built with React, TypeScript, and Tailwind CSS, provides a clean, scalable, and highly performant solution that can be adapted to various industries and 
      use cases. It focuses on delivering a seamless user experience, ease of maintenance, and flexibility for future growth.
      "
      src={logoo}/>
      </a>

      <a href='https://maghandi-institute.vercel.app/'>
      <ProjectCard
      title="A Full Stack Springboot and React.JS College Admission System"
      des="A full stack application for managing enrolment of students. This is a project that was made using the Spring Boot as the backend 
      framework and ReactJS  and Tailwind CSS as  frontend frameworks. The project is much focused on RESTful services.
       In short its much centered  on admitting at school"
      src={school}
      
      />
      </a>
      <a href='https://github.com/LawMashira/Inventory_Management_and_Point_of_Sale_System.git'>
      <ProjectCard
      title="Inventory and Point Of Sale System"
      des="An application that allows supermarkets and 
      wholesales to track sales made in relation to the goods in the 
      stock as it keeps the records of goods sold and those still in stock. T
      he application requires customers to pay in different currency USD, Rand 
      and ZWL. The reports will be generated according to the currency used in 
      purchasing the goods."
      src={point}/>
      </a>
    
      <a href='https://github.com/LawMashira/Springboot_CRUD_Operations.git'>
      <ProjectCard
      title="Sring Boot RESTful CRUD Application"
      des="Spring boot operations for inserting, delete ,update or retrieve data using MySQL"
      src="data:image/png;base64,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"
      />
      </a>
      <a href='https://github.com/LawMashira/USSD_Code_For_Managing_Mobile_Money_Wallets.git'>
      <ProjectCard 
      title="USSD COde for mobile money wallets management"
      des="USSD code for managing mobile wallets eg Ecocash in Zimbabwe. This code is useful for checking balance, making cash outs ,recharging mobile phones or pay bills for different services. It also transfers money from one account to another. Generally, coding thrills me as it helps me to understand programming languages for I have great passion for it"
      src={wallet}/>
      </a >

      <a href='https://github.com/LawMashira/Law-Mashira-React-Personal-Website.git'>

      
      <ProjectCard 
      title="ReactJS Portfolio Website"
      des="This is my personal website that portrays all the skillsI have honed,tools and 
      technolgies I have pratical experience in working with. The webiste was developed following
      high standards of using ReactJS libraries with the help of Taiwindcss for designing."
      src={react}/>
      </a>
     
    </div>
    </section>
  )
}
