import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'
export default function Experience() {
  return (
                <motion.div 
                 initial= {{opacity:0}} animate={{opacity:1,transition:{duration:.5}}}
                
                className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-15'>
                <div>
                     <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                       <p className="text-sm text-designColor tracking-[4px] "> 2020 - 2024</p>
                       <h2 className="text-3xl md:text-4xl font-bold "> Experience Qualifications</h2>
                     </div>
                     <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] 
                     border-l-black
                      border-opacity-30 flex flex-col gap-10">
                       <ResumeCard 
                       title="Bsc Honours in Software Engineering"
                       subtitle="Zimbabwe Open University (2020-2024)"
                     
                       des="jjherjfiorgiorgklgjkfgiogiotrpofgnm,srgiorgjkrg"/>
                       <ResumeCard
                         title="Diploma in Education"
                         subtitle="University of Zimbabwe (2012-2015)"
                         
                         des="jjherjfiorgiorgklgjkfgiogiotrpofgnm,srgiorgjkrg"
                          />
                       <ResumeCard 
                         title="General Certificate Of Education Ordinary Level"
                         subtitle="Rufaro Secondary School (2005-2008)"
                         des="jjherjfiorgiorgklgjkfgiogiotrpofgnm,srgiorgjkrg"/>
                       </div>
                     </div>
                     <div>
                     <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                       <p className="text-sm text-designColor tracking-[4px] "> 2020 - 2024</p>
                       <h2 className="text-3xl md:text-4xl font-bold "> Experience Experience</h2>
                     </div>
                     <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] 
                     border-l-black
                      border-opacity-30 flex flex-col gap-10">
                       <ResumeCard 
                       title="Software Developer"
                       subtitle="Freelancing (Self-Employed) (2021-present)"
                     
                       des="I have practical experience  in writing codes,building and designing software  systems as a freelancer. Currently,  I prefer to 
                       work with technologies such as Visual Studio Code,eclipse for Java, ReactJS, MySQL, SpringBoot and Microsoft 
                       Visual Studio for C#."/>
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
