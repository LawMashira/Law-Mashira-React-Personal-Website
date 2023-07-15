import React from 'react'
import { logo } from '../../assets'
import { Link } from 'react-scroll'
import{FaFacebook,FaGithub,FaLinkedinIn}from "react-icons/fa"

const Footer =() =>{
  return (
    <div className='w-full py-20 h-auto border-b-[1px] border-black grid grid-cols-1 md:grid-cols-3 gap-8'>
      
        <div className='w-full h-full flex flex-col gap-8 '> 
        <img  className='w-14 border border-yellow-500 rounded-lg overflow-hidden'

         src={logo} alt='loogo'       
         /> 
        
         

<h1 className="text-5xl font-signature flex flex-col text-designColor">LawMashira</h1>     
        
      
         
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
        <div className='w-full h-full '>

  <h3 className='text-xl uppercase text-designColor tracking-wide'>
    Quick Link</h3>
<ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
    
      <Link to="home"> 
      <li>
     <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer 
     relative group'> About 
     
     
     
     <span className='absolute h-[1px] w-full inline-flex
      bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
      transition-transform duration-300
     '></span></span>
      </li>
      </Link>
      <Link to ="projects">
      <li>
      
     <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer 
     relative group'> Portifolio <span className='absolute h-[1px] w-full inline-flex
      bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
      transition-transform duration-300
     '></span></span>
      </li>
      </Link>
      <Link to ="features">
      <li >
      
     <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer 
     relative group'> Services<span className='absolute h-[1px] w-full inline-flex
      bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
      transition-transform duration-300
     '></span></span>
      </li>
      </Link>
      <Link to = "contact">
      <li>
      
     <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer 
     relative group'> Contact <span className='absolute h-[1px] w-full inline-flex
      bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
      transition-transform duration-300
     '></span></span>
      </li>
      </Link>
    
</ul>
        </div>
        <div className='w-full h-full '>


        <h3 className='text-xl uppercase text-designColor tracking-wide'>
        Terms Of Service</h3>
<ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
    <li>
      
     <span className='w-full text-lg hover:text-blue-500 duration-300 cursor-pointer 
     relative group'> Softaware Development Support Policy <span className='absolute h-[1px] w-full inline-flex
      bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
      transition-transform duration-300
     '></span></span>
      </li>
      <li>
      
     <span className='w-full text-lg hover:text-blue-500 duration-300 cursor-pointer 
     relative group'> Tech Support Policy<span className='absolute h-[1px] w-full inline-flex
      bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
      transition-transform duration-300
     '></span></span>
      </li>
      <li>
      
     <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer 
     relative group'> 
    



     <span className='absolute h-[1px] w-full inline-flex
      bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
      transition-transform duration-300
     '></span></span>
      </li>
</ul>
        </div>
     
    </div>

    
     
    
  )
} 
export default Footer
