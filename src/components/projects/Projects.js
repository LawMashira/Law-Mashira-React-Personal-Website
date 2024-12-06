import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { point,react, school, logoo} from '../../assets'
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

      <a href='https://agri-connect-system.vercel.app'>
      <ProjectCard
      title="AgriConnect System"
      des="A modular Agri-Tech platform designed with Java, Spring Boot,React TypeScript, and Tailwind CSS to tackle Zimbabwe’s agricultural challenges. It offers localized weather forecasting, real-time market insights, post-harvest solutions, e-commerce for inputs, expert advisory services, a digital marketplace, efficient logistics, financial assistance, and community engagement to empower farmers and improve productivity."
      src="https://images.unsplash.com/photo-1649665612550-df97d3cc7de1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
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

      
      <a href='https://swd-renovations-expert.vercel.app'>
      <ProjectCard 
      title="SWD Renovations Expert"
      des="A construction website  fully developed platform showcasing professional construction services and completed projects. It features responsive design, a modern tech stack (React, TypeScript, Tailwind CSS), and an intuitive user interface. Designed to engage clients, it highlights service offerings, portfolios, and client testimonials, ensuring seamless navigation and accessibility."
      src='https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      </a >

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
