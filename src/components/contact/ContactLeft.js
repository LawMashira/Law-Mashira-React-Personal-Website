import React from 'react'
import{FaFacebook,FaGithub,FaLinkedinIn}from "react-icons/fa"
import { contactImage } from '../../assets'


export default function ContactLeft() {
  return (
<div className='w-fll lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]
p-4 lgl:p-8 
    rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
<img className='w-full h-72 object-fill rounded-lg mb-2'
  src={contactImage}  
  alt='thre supposed to be pic'
  />

  <div className='flex flex-col gap-4'>
    <h3 className="text-4xl font-bold  text-red-600"> Law Mashira</h3>
    <p className='text-lg font-normal text-gray-400'>
      Java Full Stack Developer
    </p>
    <p className='text-xl text-yellow-400 tracking-wide'>
      Java Developer with SpringBoot and ReactJS skills
    </p>

    <p className='text-xl text-gray-400 flex items-center gap-2'>
      Phone:<span className='text-lightText'>+27641156101</span>
    </p>

    <p className='text-xl text-gray-400 flex items-center gap-2'>
      Email:<span className='text-lightText'>lawsonmatutu@gmail.com</span>
    </p>
  </div>
<div className='flex flex-col gap-4'>
<h2 className='text-xl uppercase font-titleFont mb-4  text-blue-500'>FIND ME ON
</h2>

<div className='flex gap-4'>
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
</div>
    
  )
}
