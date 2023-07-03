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
      <div className="mt-2 xs:mt-4 lgl:mt-14 w-full h-[1000px] border-l-[6px] 
      border-l-black
       border-opacity-30 flex flex-col gap-10">
        <ResumeCard 
        title="Inventory Management and Point of Sale System"
        subtitle="( From February- April 2022)"
      
        des="A standalone GUI application developed using Java for performing transactions in wholesales and
        supermarkets."/>
        <ResumeCard
          title="ReactJS Portfolio Website"
          subtitle="(January 2022)"
          
          des="A personal website that portrays all the skills honed,tools and 
          technolgies I have pratical experience in working with.
"
           />
        <ResumeCard 
          title="Spring Boot  Applications"
          subtitle=" (From April 2022-present)"
          des="Developed several full stack applications using Spring Boot and ReactJS that heavily invloved the use of SpringBoot RESTful APIs."/>
        </div>
      </div>
      <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        {/*<p className="text-sm text-designColor tracking-[4px] "> 2020 - 2024</p>*/}
        <h2 className="text-3xl md:text-4xl font-bold "> Work Achievements</h2>
      </div>
      <div className="mt-2 xs:mt-4 lgl:mt-14 w-full h-[1000px] border-l-[6px] 
      border-l-black
       border-opacity-30 flex flex-col gap-10">
        <ResumeCard 
        title="Java Backend Developer"
        subtitle=" Freelancing (Self-Employeed) (2022 - Present)"
      
        des="Java Programming Language has been used as the main language in backend development
        with the Spring boot for developing Java Web based applications."/>
        <ResumeCard
          title="Front End Developer"
          subtitle="University of Zim(2012-2015)"
          
          des="The framework has been used for development of React applications"
           />
        <ResumeCard 
          title="School Teacher"
          subtitle="Ministry Of Education,Zimbabwe (2015-2023)"
          des="Worked as teacher under the Ministry Of Education teaching and planning pupils'
          work "/>
        </div>
        </div>

    </motion.div>
    
                
  )
}
