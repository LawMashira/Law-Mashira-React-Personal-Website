import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'

export default function Education() {
  return (
    <motion.div initial= {{opacity:0}} animate={{opacity:1,transition:{duration:.5}}}
        className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-15'>
          {/*part one */}
 <div>
      <div className="py-6 lgl:py-12  font-titleFont flex flex-col gap-4">
        {/*<p className="text-sm text-designColor tracking-[4px] "> 2020 - 2024</p>*/}
        <h2 className="text-3xl md:text-4xl font-bold "> Educational Qualifications</h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] 
      border-l-black
       border-opacity-30 flex flex-col gap-10">
        <ResumeCard 
        title="Bsc Honours in Software Engineering"
        subtitle="Zimbabwe Open University (2020-2024)"
      
        des="A programme designed for equipping graduates with software development skills
        to solve business problems taking ideas into reality"/>
        <ResumeCard
          title="Diploma in Education"
          subtitle="University of Zimbabwe (2012-2015)"
          
          des="A programmme that equipped me with teachings skills specifically for 
          elementary students"
           />
        <ResumeCard 
          title="General Certificate Of Education Ordinary Level"
          subtitle="Rufaro Secondary School (2005-2008)"
          des="Secondary Education that formed the basis of Mathematical and Logical reasoning"/>
        </div>
      </div>
      {/*part two */}
      <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        {/*<p className="text-sm text-designColor tracking-[4px] "> 2020 - 2024</p>*/}
        <h2 className="text-3xl md:text-4xl font-bold "> Work Experience</h2>
      </div>
      <div className=" mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] 
      border-l-black
       border-opacity-30 flex flex-col gap-10">
        <ResumeCard 
        title="Software Developer"
        subtitle="Freelancing (Self-Employed) (2022-present)"
      
        des="Currently workng with spring boot as the main back end technology for developing Java web applications.   Java and C # have also be
        been used for developing stand alone desktop applications with the MySQL database"/>
        <ResumeCard
          title="Front End Developer"
          subtitle="Freelancing (Self-Employed) (2022-present)"
          
          des="Currently working with front end techinologies and developing tools
          such as Visual Studio Code, ReactJS and Taiwindcss to develop all devices responsive 
          websites."
           />
        <ResumeCard 
          title="School Teacher"
          subtitle="Ministry Of Education,Zimbabwe (2015-2023)"
          des="Worked as primary school teacher in the Ministry of Education, 
          Zimbabwe for more than seven years delivering lessons 
          and evaluating pupils' work."/>

           
        </div>
        </div>

  </motion.div>
  )
}
