import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'
export default function Achievements() {
  return (
                <motion.div initial= {{opacity:0}} animate={{opacity:1,transition:{duration:.5}}}
                 className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-15'>
 <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        {/*<p className="text-sm text-designColor tracking-[4px] "> 2020 - 2024</p>*/}
        <h2 className="text-3xl md:text-4xl font-bold "> Project Achievements</h2>
      </div>
      <div className="mt-4 lgl:mt-14 w-full h-[1000px] border-l-[6px] 
      border-l-black
       border-opacity-30 flex flex-col gap-10">
        <ResumeCard 
        title="Inventory Management and Point of Sale System"
        subtitle="( From February- April 2022)"
      
        des="This a standalone GUI application that I managed to develop using Java programming
        language and eclipse IDE. It successfully performes transactions in wholesales and
        supermarkets. The JDBC driver was used to make connections to the MySQL
        database."/>
        <ResumeCard
          title="ReactJS Portfolio Website"
          subtitle="(January 2022)"
          
          des="This is my personal website that portrays all the skillsI have honed,tools and 
          technolgies I have pratical experience in working with. The webiste was developed following
          high standards of using ReactJS libraries with the help of Taiwindcss for designing. 
          The website is currently deployed on Amazon Web Services via GitHub"
           />
        <ResumeCard 
          title="Spring Boot  Applications"
          subtitle=" (From April 2022-present)"
          des="I have managed to develop several full stack applications using Java, Spring Boot and ReactJS such
          Employee Management System, Drone Application and Student Management System. The applications 
          heavily invloved the use of Spring Boot RESTful APIs."/>
        </div>
      </div>
      <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        {/*<p className="text-sm text-designColor tracking-[4px] "> 2020 - 2024</p>*/}
        <h2 className="text-3xl md:text-4xl font-bold "> Work Achievements</h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] 
      border-l-black
       border-opacity-30 flex flex-col gap-10">
        <ResumeCard 
        title="Java Backend Developer"
        subtitle=" MusalaSoft (2020 - Present)"
      
        des="jjherjfiorgiorgklgjkfgiogiotrpofgnm,srgiorgjkrg"/>
        <ResumeCard
          title="Front End Dveloper"
          subtitle="University of Zim(2012-2015)"
          
          des="jjherjfiorgiorgklgjkfgiogiotrpofgnm,srgiorgjkrg"
           />
        <ResumeCard 
          title="School Teacher"
          subtitle="Ministry Of Education,Zimbabwe (2015-2023)"
          des="jjherjfiorgiorgklgjkfgiogiotrpofgnm,srgiorgjkrg"/>
        </div>
        </div>

    </motion.div>
    
                
  )
}
