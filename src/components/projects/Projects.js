import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { point,crud,employee,react,download,wallet} from '../../assets'
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
      <a href='https://github.com/LawMashira/A-_Full_Stack-Spring_Boot-And-_React_js_Application-Employee_Management_System.git'>
      <ProjectCard
      title="A Full Stack Springboot and React.JS Employee Management System"
      des="A full stack application for managing employees. This is a project that was made using the spring boot as the backend framework and React JS as the frontend framework. The project is much focused on RESTful services. In short its much centered on deleting, edit or save employees in the MySQL database following spring boot annotations"
      src={employee}
      
      />
      </a>
      <a href='https://github.com/LawMashira/Springboot_CRUD_Operations.git'>
      <ProjectCard
      title="Sring Boot RESTful CRUD Application"
      des="Spring boot operations for inserting, delete ,update or retrieve data using MySQL"
      src={crud}/>
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
      <a href='https://github.com/LawMashira/Drone-RESTful-API-using-the-Springboot.git'>
      <ProjectCard 
      title="Drone transport application"
      des="
      this is a drone application developed to demonstrate the building of spring boot RESTful APIs. The application can register new drones,checks drone availability before trying to load any medication. It also checks drone battery level to avoid using drones with too less percentage battery. 
      This is achieved by receiving HTTP requests in JSON format."
      src={download}/>
      </a>
    </div>
    </section>
  )
}
