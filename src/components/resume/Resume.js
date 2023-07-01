import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
 
import Achievements from './Achievements'
//{/*import Experience from './Experience'*/}
export default function Resume() {
  const [educationData, setEducationData]= useState(true);
  const [skillsData, setSkillsData]= useState(false);

 //{/*const [experienceData, setEperienceData]= useState(false);*/}

  const [achievementsData, setAchiementsData]= useState(false);
  return (
    < section id='resume' 
    className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center ">
      <Title   
      title="More than two years of practical experience in coding"
      des="My Resume"
      />

    </div>
    

    <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
          <li onClick={()=> setEducationData(true) &
                            setSkillsData (false) &
                            setAchiementsData (false)&
                            {/*setEperienceData(false) &*/}
                           
          } 
          className={`${educationData ? "border-designColor rounded-lg":
          "border-transparent"}
           resumeLi`}>


             Education
             </li>

          <li onClick={()=>  
                           setSkillsData(true)&
                           setEducationData(false)&
                          
                           setAchiementsData (false)&
                           {/* setEperienceData(false) & */}
                          } 
          
       className={`${skillsData ? "border-designColor rounded-lg":
                          "border-transparent"}
                           resumeLi`}>
                
           Professional Skills</li>

          {/*
          <li onClick={()=>   setEducationData (false)&
                              setSkillsData(false)&
                              setAchiementsData (false)
                              &setEperienceData (true)} 

                              className={`${experienceData ? "border-designColor rounded-lg":
                              "border-transparent"}
                               resumeLi`}>
                    
          
          Experience</li>*/}
          <li  onClick={()=>   setEducationData (false)&
                              setSkillsData(false)&
                              setAchiementsData (true)
                              &
          {/*setEperienceData (false)*/}
                            } 
          
          
                              className={`${achievementsData ? "border-designColor rounded-lg":
                              "border-transparent"}
                               resumeLi`}>
                    
          
          Achievements</li>
        </ul>
      </div>
      
    {
      educationData &&  <Education/>
    }
    {
      skillsData && <Skills/>
    }
    {/*
    {
      experienceData && <Experience/>
    }*/}
    {
      achievementsData && <Achievements/>
    }
   
  
    </section>
  )
}
