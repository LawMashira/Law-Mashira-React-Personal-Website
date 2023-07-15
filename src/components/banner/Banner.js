import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import{FaFacebook,FaGithub,FaLinkedinIn, FaReact}from "react-icons/fa"
import{SiTailwindcss,SiSpringboot} from "react-icons/si"
import { law } from '../../assets';
export default function Banner() {
const [text]=useTypewriter({
  words:["Java Backend Developer","ReactJS Developer", "Java Full Stack Developer"," Web Developer"],
  loop:true,
  typeSpeed:1,
  delaySpeed:2000,
  deleteSpeed:1,  
});

  return (
    <section id="home" className="w-full pt-10 pb-20  flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center
     border-b-[1px] font-titleFont    border-b-black">
<div className='w-full  lgl:w-1/2  flex flex-col gap-20'>

<div className="flex flex-col gap-5">
  <h4 className="text-4xl ml-2 text-yellow-400">Welcome To My World...</h4>
  <h1 className="text-5xl font-bold text-white">I'm 
    <span className="text-designColor capitalize"> Law Mashira </span>
  </h1>
  <h2 className="text-4xl font-bold text-white">
    a <span> {text} </span> 
    <Cursor
    cursorBlinking="false"
    cursorStyle="|"
    cursorColor="#ff014f"
    />  
    </h2>
  <p className="font-bodyFont leading-6 tracking-wide text-xl">
  who has practical experience  in writing codes,building and designing software  systems as a freelancer. Currently,  I prefer to 
  work with technologies such as Visual Studio Code,Eclipse for Java, ReactJS, MySQL, SpringBoot and Microsoft 
  Visual Studio for C#.   
</p>
<p className="text-xl"> Lawson is a former classroom practitioner who worked under the Ministry of Education, Zimbabwe for more than 
 seven years having attained 
a Diploma in Education in 2015 at Joshua Mqabuko Nkomo Polytechnic, an associate college of the University of Zimbabwe but he has great passion for software development.
</p>
</div>
<div className="flex  flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
<div className="">
  <h2 className='text-base uppercase font-titleFont mb-4  text-blue-500'>FIND ME ON</h2>
<div className="flex gap-4">
<a href='https://www.facebook.com/law.mashira'>

  <span className="icon">
<FaFacebook/>
  </span>

  </a>
  <a href='https://www.linkedin.com/in/lawson-matutu-520a07216/'>

  <span className="icon">
<FaLinkedinIn/>
  </span>
  </a>

<a href='http://www.github.com/LawMashira'>
  <span className="icon">
<FaGithub/>
  </span>
  </a>
  </div>

  </div>

<div >
<h2 className="text-base uppercase font-titleFont mb-4 text-blue-500">BEST SKILLS ON </h2>

<div className="flex gap-4">
  <span className="icon">
    <FaReact/>
  </span>
  <span className="icon">
    <SiSpringboot/>
  </span>

  <span className="icon">
    <SiTailwindcss/>
  </span>
  </div>
  
</div>
</div>
</div>
    



      <div className='w-full lgl:w-1/2 flex justify-center items-center relative'>
      <img 
className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
src={law} alt="IMG"/>
<div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024]
to-[#202327] shadow-shadowOne flex justify-center items-center"></div>

      </div>


    </section>
  )
}
